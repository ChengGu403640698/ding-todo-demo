// TodoComponent -- 页面组件 -- '/'

// 页面结构:
// HEADER--组件: 待办
// TodoItemList--组件: >已逾期
// TodoItemList--组件: >未来七天
// TodoItemList--组件: >以后

import React from 'react'
import { Link } from 'react-router-dom'
import TodoItemList from './TodoItemList'
import Header from './Header'
import AddBtn from './icons/add.png'
import { Task, TimerType } from './types'
import { DayLength } from './utils'
import './styles/style.less'
import { connect } from 'react-redux'

interface TodoComponentProps {
    TasksList: Task[];
}

interface TodoStates {
    TodoTasksList: Task[];
    currentTime: number;
}

class TodoComponent extends React.Component<any, TodoStates> {

    timer: TimerType | null = null;
    state: TodoStates = {
        TodoTasksList: [],
        currentTime: Date.now(),
    }

    private getExpireTasks(): Task[] {
        const currentTime = this.state.currentTime;
        return this.state.TodoTasksList.filter((item) => {
            return item.ExpireTime.getTime() < currentTime;
        })
    }


    private getIn7DaysTasks(): Task[] {
        const currentTime = this.state.currentTime;
        return this.state.TodoTasksList.filter((item) => {
            return item.ExpireTime.getTime() <= (currentTime + 7 * DayLength)
                && item.ExpireTime.getTime() >= currentTime;
        })
    }

    private getFutureComingTasks(): Task[] {
        const currentTime = this.state.currentTime;
        return this.state.TodoTasksList.filter((item) => {
            return item.ExpireTime.getTime() > (currentTime + 7 * DayLength);
        })
    }

    componentDidMount() {
        this.setState({
            TodoTasksList: this.props.TasksList.filter((item: any) => {
                return !item.ifFinished;
            })
        })

        this.timer = setInterval(() => {
            this.setState({
                currentTime: Date.now()
            })
        }, 1000 * 60);
        // 暂时设置成1分钟更新一个状态
    }
    //========================method1=====================================

    // componentDidUpdate(preProps: TodoComponentProps) {
    //     // 需要加入更新的条件否则会产生无穷的更新
    //     if (preProps.TasksList != this.props.TasksList) {
    //         this.setState({
    //             TodoTasksList: this.props.TasksList.filter((item: any) => {
    //                 return !item.ifFinished;
    //             })
    //         })
    //     }
    // }
    //========================method1=====================================
    //========================method2=====================================
    componentWillReceiveProps(nextProps: TodoComponentProps) {
        this.setState({
            TodoTasksList: nextProps.TasksList.filter((item: any) => {
                return !item.ifFinished;
            })
        })
    }
    //========================method2=====================================
    componentWillUnmount() {
        clearInterval(this.timer!);
    }
    render() {

        return (<>
            <Header targetPath="/" title="待办" />
            <TodoItemList description={"已逾期"} list={this.getExpireTasks()} />
            <TodoItemList description={"未来七天"} list={this.getIn7DaysTasks()} />
            <TodoItemList description={"以后"} list={this.getFutureComingTasks()} />
            <div className="inline-center">
                <Link to="/VisitFinished" >{"已处理的待办 >"}</Link>
            </div>
            <Link to="/addItem">
                <img className="add-btnicon" src={AddBtn} alt="Add TodoItem" />
            </Link>
        </>)
    }
}

const mapStateToProps = (state: Task[]) => {
    return {
        TasksList: state
    };
}

export default connect(mapStateToProps, null)(TodoComponent)
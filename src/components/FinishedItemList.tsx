// FinishedItemList -- 页面组件 -- '/VisitFinished'

// 页面结构:
// HEADER--组件: 已处理的
// TodoItem 列表

import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
import { Task } from './types'
import { connect } from 'react-redux'
interface FinishedTodoProps {
    TasksList: Task[],
}
interface FinishedTodoState {
    TasksList: Task[],
}
class FinishedTodo extends React.Component<FinishedTodoProps, FinishedTodoState> {
    state = {
        TasksList: []
    }

    componentDidMount() {
        this.setState(
            {
                TasksList: this.props.TasksList.filter((item) => {
                    return item.ifFinished;
                })
            }
        )
    }
    componentWillReceiveProps(nextProp: FinishedTodoProps) {
        this.setState(
            {
                TasksList: nextProp.TasksList.filter((item) => {
                    return item.ifFinished;
                })
            }
        )
    }

    render() {
        return <>
            <Header targetPath="/" title="已处理的" />
            {
                this.state.TasksList.map((item: Task) =>
                    <TodoItem key={item.Id} description="已完成" item={item} />)
            }
        </>
    }
}

const mapStateToProps = (state: Task[]) => {
    return {
        TasksList: state
    }
}

export default connect(mapStateToProps)(FinishedTodo)
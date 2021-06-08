import React, { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from './store'
import { clearAll } from './store/actions'
import { Provider } from 'react-redux'
// import { TodoComponent, FinishedItemList, EditTodoItem, AddTodoItem } from './components'
const TodoComponent = lazy(() => import('../src/components/TodoComponent'));
const FinishedItemList = lazy(() => import('../src/components/FinishedItemList'));
const AddTodoItem = lazy(() => import('../src/components/AddTodoItem'))
const EditTodoItem = lazy(() => import('../src/components/EditTodoItem'))
const App: React.FC<{}> = () => {

    useEffect(() => {
        store.dispatch(clearAll)
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/" exact><TodoComponent /></Route>
                    <Route path="/VisitFinished"><FinishedItemList /></Route>
                    <Route path="/addItem"><AddTodoItem /></Route>
                    <Route path="/editItem"><EditTodoItem /></Route>
                </Suspense>
            </Router >
        </Provider>

    )
}
export default App;
// 目前所有的网络

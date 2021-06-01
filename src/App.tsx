import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from './store'
import { clearAll } from './store/actions'
import { Provider } from 'react-redux'
import { TodoComponent, FinishedItemList, EditTodoItem, AddTodoItem } from './components'


const App: React.FC<{}> = () => {

    useEffect(() => {
        store.dispatch(clearAll)
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Route path="/" exact><TodoComponent /></Route>
                <Route path="/VisitFinished"><FinishedItemList /></Route>
                <Route path="/addItem"><AddTodoItem /></Route>
                <Route path="/editItem"><EditTodoItem /></Route>
            </Router >
        </Provider>

    )
}
export default App;
// 目前所有的网络

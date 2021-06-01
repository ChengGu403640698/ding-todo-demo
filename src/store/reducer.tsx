
import { Action, Task } from '../components/types'


const todoReducer = (state: Task[] = [], action: Action) => {
    switch (action.type) {
        case "replace":
            return action.data;
        case "clear":
            return [];
        case "make-item-finish": {
            const list = state.map((item, index) => {
                if (item.Id == action.item.Id)
                    return Object.assign({}, item, {
                        ifFinished: true
                    })
                else return Object.assign({}, item, {
                })
            })
            return list;
        }
        case "replace-item": {
            const list = [...state];
            list[action.index] = action.item;
            return list;
        }
        case "add-item":
            return [...state, action.item];
        default:
            return state;
    }
}

export const reducer = todoReducer

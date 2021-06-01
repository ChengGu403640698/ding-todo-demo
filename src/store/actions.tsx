import { Task } from "../components/types"
import { storeState } from '../components/types'

export const replaceTodo = (data: storeState) => {
    return {
        type: "replace",
        data,
    }
}

export const makeItemFinished = (item: Task) => {
    return {
        type: "make-item-finish",
        item,
    }
}

export const addItem = (item: Task) => {
    return {
        type: "add-item",
        item,
    }
}
export const replaceItem = (index: number, item: Task) => {
    return {
        type: "replace-item",
        item,
        index,
    }
}
export const clearAll = {
    type: "clear",
}

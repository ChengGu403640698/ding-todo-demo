import { createStore } from 'redux'
import { reducer } from './reducer'
import { PersonInfo } from '../components/types'
export const store = createStore(reducer);

export const person: PersonInfo = {
    Name: "顾承（我）",
    Id: "00001",
}
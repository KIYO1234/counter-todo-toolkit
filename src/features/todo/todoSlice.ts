import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store'

export interface TodoState {
    idCount: number,
    todos: {
        id: number,
        title: string,
        isDone: boolean
    }[]
}
const initialState: TodoState = {
    idCount: 1,
    todos: [
        {
            id: 1,
            title: 'サンプルタスク',
            isDone: false
        }
    ]
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.idCount++;
            const newTodo = {
                id: state.idCount,
                title: action.payload,
                isDone: false
            };
            state.todos = [newTodo, ...state.todos];
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const {addTask, deleteTask} = todoSlice.actions
export const todoList = (state: RootState): TodoState['todos'] => state.todo.todos
export default todoSlice.reducer
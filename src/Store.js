import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './Stores/todosSlice'

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})
import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        createNewTodoItem: (state: any, action) => {
            const newItem = {
                taskId: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newItem)
        },

        completeTodoTask: (state: any, action) => {
            const todoIndex = state.findIndex((todo: any) => todo.taskId === action.payload.taskId)
            state[todoIndex].completed = action.payload.checked
        },
        emptyTaskList: (state: any) => {
            state.length = 0
        }
    }
})

// Action creators are generated for each case reducer function
export const {createNewTodoItem, completeTodoTask, emptyTaskList} = todoSlice.actions
export const selectCompletedTodos = ({todo}: { todo: any }) => todo.filter((item: any) => item.completed)
export const selectPendingTodos = ({todo}: { todo: any }) => todo.filter((item: any) => !item.completed)

export default todoSlice.reducer
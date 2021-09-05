import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../store/todo/todoSlice'
import userReducer from '../store/user/userSlice'


export default configureStore({
    reducer: {
        todo: todoReducer,
        user: userReducer
    }
})
import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        userStatus: false
    },
    reducers: {
        createNewUser: (state: any, action) => {
            const newItem = {
                userId: Date.now(),
                email: action.payload.email,
                phone: action.payload.phone,
                password: action.payload.password,
            }
            state.users.push(newItem)
        },
        logout: (state: any) => {
            state.userStatus = false
        },

        updateUserStatus: (state: any, action) => {
            state.userStatus = action.payload.status
        }
    }
})

// Action creators are generated for each case reducer function
export const {logout, createNewUser, updateUserStatus} = userSlice.actions
export const login = ({user}: { user: any }) => user.users
export const userStatus = ({user}: { user: any }) => user.userStatus

export default userSlice.reducer
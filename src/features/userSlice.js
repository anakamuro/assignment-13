import {createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user", 
    initialState: {
        user: null, 
        firstName: '', 
        lastName: ''
    }, 
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        }, 
        logout: (state) => {
            state.user = null
        },

        updateProfile: (state, action) => {
            state = {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            } 
        }
    }
})

export const {login, logout,  updateProfile} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
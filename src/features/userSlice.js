import { createSlice } from "@reduxjs/toolkit"
// import { getUserProfile } from "../../server/services/userService"


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        // firstName: '',
        // lastName: ''
        userProfile: {
            firstName: '',
            lastName: ''
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },

        updateProfile: (state, action) => {

            state.userProfile = {

                firstName: action.payload.data?.firstName,
                lastName: action.payload.data?.lastName
            }
            
        },

        getUserProfile: (state, action) => {
            state.userProfile = {
                firstName: action.payload.data?.firstName,
                lastName: action.payload.data?.lastName
            }
        }
    }
})

export const { login, logout, updateProfile, getUserProfile } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
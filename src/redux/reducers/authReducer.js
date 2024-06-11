import { createReducer } from '@reduxjs/toolkit'
import { login as loginAction, logout } from '../actions/authActions'


const initialState = {
    loggedIn: false,
    token: '',
    expiresIn: '',
    user: {
        name: '',
        email: '',
        image: ''
    }
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginAction, (state, action) => {

            //falso a true
            // action.type
            // action.payload

            // state.expiresIn = action.payload.expiresIn

            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    image: action.payload.image
                },
                token: action.payload.token,
                loggedIn: action.payload.loggedIn,
                expiresIn: action.payload.expiresIn
            }
        })
    .addCase(logout, (state, action) => {
    // true a false
        return initialState;
    })

})

export default authReducer
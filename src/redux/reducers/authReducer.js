import { createReducer } from '@reduxjs/toolkit'
import { eraseError, login as loginAction, loginAsync, logout } from '../actions/authActions'
import { toast } from 'react-toastify'


const initialState = {
    loggedIn: false,
    token: '',
    expiresIn: '',
    error: '',
    user: {
        name: '',
        email: '',
        image: ''
    }
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginAsync.fulfilled, (state, action) => {

            //falso a true
            // action.type
            // action.payload

            // state.expiresIn = action.payload.expiresIn
            toast('Welcome ' + action.payload.name, {
                type: 'success',
            });
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    image: action.payload.image
                },
                token: action.payload.token,
                loggedIn: action.payload.loggedIn,
                expiresIn: action.payload.expiresIn,
                error: ''
            }
        })
        .addCase(loginAsync.pending, (state, action) => {
            console.log('pending');
            return {
                ...state,
                error: ''
            }
        })
        .addCase(loginAsync.rejected, (state, action) => {
            toast('Error credenciales incorrectas', {
                type: 'error',
            });

            return {
                ...state,
                error: 'Error credenciales incorrectas'
            }
        })

        .addCase(logout, (state, action) => {
            // true a false
            return initialState;
        })
        .addCase(eraseError, (state, action) => {
            return {
                ...state,
                error: ''
            }
        }
        )

})

export default authReducer
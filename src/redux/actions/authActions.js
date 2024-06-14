import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const login = createAction('LOGIN', (data /*informacion del usuario*/) => {

    const clearInfo = {
        name: data.firstName + " " + data.lastName,
        email: data.email,
        image: data.image,
        token: data.token,
        expiresIn: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
        loggedIn: true
    }

    return { payload: clearInfo }
})

export const loginAsync = createAsyncThunk("LOGIN", async (data /*informacion del usuario*/) => {


    const response = await axios.post("https://homebanking-app.onrender.com/api/auth/login", data)
    let token = response.data;

    const responseCurrent = await axios.get("https://homebanking-app.onrender.com/api/auth/current", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })


    const clearInfo = {
        name: responseCurrent.data.firstName + " " + responseCurrent.data.lastName,
        email: data.email,
        image: 'https://fakeimg.pl/50x50?text=Melba&font=noto',
        token: token,
        expiresIn: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
        loggedIn: true
    }
    

    return clearInfo;
})

export const eraseError = createAction('ERASE_ERROR')



export const logout = createAction('LOGOUT')
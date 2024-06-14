import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eraseError, login, loginAsync } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const { error } = useSelector(store => store.authReducer)
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {

        const user = {
            email: inputEmail.current.value,
            password: inputPassword.current.value
        }

        console.log(user);

        // const user = {
        //     firstName: 'Melba',
        //     lastName: 'Hernandez',
        //     email: 'melba@mindhub.com',
        //     password: 'melba',
        //     image: 'https://fakeimg.pl/50x50?text=Melba&font=noto'
        // }

        // dispatch(login(user))

        // TODO: Realizar el login de usuario con axios  

        try {


            // const response = await axios.post("https://homebanking-app.onrender.com/api/auth/login", user)
            // let token = response.data;

            // const responseCurrent = await axios.get("https://homebanking-app.onrender.com/api/auth/current", {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // })

            // let client = responseCurrent.data;
            // client.image = 'https://fakeimg.pl/50x50?text=Melba&font=noto'
            // client.token = token

            dispatch(loginAsync(user))
        } catch (error) {
            console.log(error);
        }

    }


    // function verifyForm() {
    //     let error = {};

    //     if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
    //         error.email = "Email is not valid"
    //     }

    //     if (!password.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
    //         error.password = "Password is not valid"
    //     }
    //     return error
    // }

    // useEffect(() => {
    //     if (error !== '') {
    //         alert(error)
    //         dispatch(eraseError())
    //     }
    // }, [error])

    return (
        <div className='flex-1 bg-blue-200 flex items-center justify-center flex-col gap-2'>
            <input onChange={(e) => { setEmail(e.target.value) }} ref={inputEmail} placeholder='Email' className='outline-none bg-transparent border-b border-b-gray-400 px-4 py-2' type="text" name="email" />
            {/* {
                verifyForm().email
            } */}
            <input onChange={(e) => { setPassword(e.target.value) }} ref={inputPassword} placeholder='Password' className='outline-none bg-transparent border-b border-b-gray-400 px-4 py-2' type="password" name="password" />
            {/* {
                verifyForm().password
            } */}
            <button type="button" className='transition-[background] duration-500 border rounded px-4 py-2 border-gray-800 text-gray-800 active:text-white hover:bg-green-500 active:border-green-200 hover:shadow-md active:shadow-xl' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
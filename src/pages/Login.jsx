import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/authActions';

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = async () => {
        const user = {
            email: 'melba@mindhub.com',
            password: 'melba'
        }
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


            const response = await axios.post("http://localhost:8080/api/auth/login", user)
            let token = response.data;

            const responseCurrent = await axios.get("http://localhost:8080/api/auth/current", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            let client = responseCurrent.data;
            client.image = 'https://fakeimg.pl/50x50?text=Melba&font=noto'
            client.token = token
            
            console.log(client);
            dispatch(login(client))

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex-1 bg-blue-200 flex items-center justify-center'>
            <button type="button" className='transition-[background] duration-500 border rounded px-4 py-2 border-gray-800 text-gray-800 active:text-white hover:bg-green-500 active:border-green-200 hover:shadow-md active:shadow-xl' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
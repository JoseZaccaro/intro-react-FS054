import axios from 'axios'
import Banner from '../components/Banner'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Home = () => {
    const params = useParams()
    console.log(params);
    const [data, setData] = useState([]);

    async function getData() {
        try {
            let response = await axios.get('http://localhost:8080/api/clients/1')
            console.log(response);
            // setData(response.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    // const navigate = useNavigate()
    // const location = useLocation()
    // console.log(location);
    function handleClick() {
        // if (confirm('Desea saber mas acerca de nosotros?')) {
        //     alert('Seras redirigido en unos momentos...')
        // setTimeout(() => {
        //     navigate('/about')
        // }, 2000)
        // setTimeout(() => {
        //     navigate('/')
        // }, 4000)
        // }

    }
    return (
        <>
            <Banner />
            <main className="h-fit w-full flex gap-4 flex-wrap p-4">
                {/* <h1>Welcome {name}</h1> */}
                {/* {
                    data.map(pj => <div key={pj.id} className='rounded flex flex-col w-[200px] h-[400px] border'>
                        <img src={pj.image} alt={pj.name} className='w-full h-3/4 object-cover' />
                        <section className='flex flex-col w-full flex-1 text-white'>
                            <h2>{pj.name}</h2>
                            <p>{pj.species}</p>
                        </section>
                    </div>)
                } */}


                <button onClick={handleClick}>Click</button>
            </main>
        </>
    )
}

export default Home
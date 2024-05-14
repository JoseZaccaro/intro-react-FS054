import { useState, useEffect } from "react";
import Alert from "../components/Alert";
import axios from "axios";



function Home(props) {

    // const [contador, setContador] = useState(1)
    const [texto, setTexto] = useState("")

    const [loading, setLoading] = useState(false)

    const [alert, setAlert] = useState(false)

    const [personas, setPersonas] = useState([])

    useEffect(() => {
        console.log('Me monte');
        getData()
    }, [])



    const getData = async () => {
        try {
            setLoading(true)
            let response = await axios.get('https://fakerapi.it/api/v1/persons')
            console.log(response);
            let { data } = response

            if (data.code === 404) throw new Error(data.status)
            setPersonas(data.data)
            setAlert(true)
            setTexto(data.code + " " + data.status)

        } catch (error) {
            console.log(error.message)
            setAlert(true)
            setTexto(error.message === "Not found" ? "404: " + error.message : error.message)
        } finally {
            setLoading(false)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }
    // useEffect(() => {
    //     console.log('Me actualice');
    // })

    // useEffect(() => {
    //     console.log('Me actualice x Contador');
    // }, [contador])

    const postItem = async (item) => {
        try {

            fetch('asdasddasads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })

            let respuesta = await axios.post('asdadsdas', item)
            // axios.post
            // axios.put
            // axios.delete
            // axios.patch
            console.log(respuesta);

        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {

    //     return () => {
    //         console.log('Me desmonte');
    //     }
    // }, [])

    // setContador(contador + 1)

    // function handleClick(evento) {
    //     setContador(contador + 1);
    // }
    // console.log(contador);
    console.log(personas);

    if (loading) {
        return (
            <main className={"p-2 flex flex-col w-full bg-green-600"}>
                <span className="loader"></span>
            </main>
        )
    }

    return (
        <main className={"p-2 flex flex-col w-full bg-gray-200"}>
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* {contador < 5 ? <Alert texto={texto} /> : <p>{contador}</p>} */}
            {
                alert && <Alert texto={texto} />
            }
            <h1 className='text-3xl text-red-500'>
                Lista personas
                {/* {contador} */}
            </h1>

            <table className="mt-4 border border-emerald-400">
                <thead>
                    <tr>
                        <th className="border-x border-emerald-400">Nombre</th>
                        <th className="border-x border-emerald-400">Cumpleaños</th>
                        <th className="border-x border-emerald-400">Genero</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Listar las personas */}

                    {
                        personas.map((persona, i) => (
                            <tr key={i}>
                                <td className="border-x border-emerald-400">{persona.firstname}</td>
                                <td className="border-x border-emerald-400">{persona.birthday}</td>
                                <td className="border-x border-emerald-400">{persona.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* <input type="text" value={texto} onInput={(e) => setTexto(e.target.value)} /> */}
        </main>
    )
}

export default Home

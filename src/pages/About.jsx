import React from 'react'

const About = () => {
    return (
        <main className={"p-2 flex flex-col w-full bg-gray-200"}>
            <h1>Apply Card</h1>
            <p>Acepta los terminos: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis deserunt suscipit, veniam labore delectus est dicta vel fuga! Nisi dolore molestias numquam iste repellat doloremque aut assumenda provident iusto. Eaque.</p>
            <select name="" id="">
                <option value="">-- Select --</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
            </select>
        </main>
    )
}

export default About
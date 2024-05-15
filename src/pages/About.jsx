import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    let params = useParams()
    console.log(params);
    return (
        <div>About</div>
    )
}

export default About
import React from 'react'

const Anchor = (props) => {
    return (
        <p href={props.href} className={'block underline text-blue-500 ' + props.className || ''}>{props.texto}</p>
    )
}

export default Anchor
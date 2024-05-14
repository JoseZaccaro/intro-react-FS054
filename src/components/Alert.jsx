import PropTypes from 'prop-types';
import { useEffect } from 'react';


function Alert(props) {
    // console.log(props);
    return (
        <main className={"p-2 flex flex-col bg-blue-300 rounded w-fit"}>
            <p>{props.texto}</p>
        </main>
    )
}

export default Alert

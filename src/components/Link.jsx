import { NavLink as LinkRR } from "react-router-dom";

const Link = (props) => {
    return (
        <LinkRR to={props.ruta} className={({ isActive }) => isActive ? "font-bold text-blue-500" : " font-thin"}>
            {props.nombre}
        </LinkRR>
    )
}

export default Link
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";


function NoAuthRoute(route) {
    const loggedIn = useSelector(store => store.authReducer.loggedIn)

    return !loggedIn && <Route path={route.path} key={route.key} element={route.element} /> 
}

export default NoAuthRoute
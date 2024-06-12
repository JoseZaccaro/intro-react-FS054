import React from 'react'
import { Route } from 'react-router-dom'

const RouteHoc = (Componente, ruta, key) => {
    return <Route path={ruta} key={key} element={<Componente />} />
}

export default RouteHoc
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector(store => store.authReducer.user) // TODO: Obtener de algun lugar la info del usuario logueado

  return (
    <div className='flex-1 bg-red-200 flex items-center justify-center gap-2'>

      <h1>Welcome! </h1>
      {user.name !== '' && <h2> {user.name} </h2>}

    </div>
  )
}

export default Home
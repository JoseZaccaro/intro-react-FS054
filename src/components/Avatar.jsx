import React from 'react'
import { useSelector } from 'react-redux'

const Avatar = () => {

  const { image, email } = useSelector(store => store.authReducer.user) // TODO: Obtener de algun lugar la info del usuario logueado

  return (
    <img
      className=" h-12 w-12 rounded-full object-cover object-center"
      alt={email}
      src={image || "https://fakeimg.pl/50x50?text=User&font=noto"}
    />

  )
}

export default Avatar
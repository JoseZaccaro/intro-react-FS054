import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const token = useSelector(store => store.authReducer.token)
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/accounts/current", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => setAccounts(response.data))
      .catch(error => console.log(error))
  },[])

  return (
    <div className='flex-1 bg-green-200 flex items-center justify-center gap-4 flex-col'>
      Profile

      {accounts.map(account => <p key={account.id}>{account.number}</p>)}

    </div>
  )
}

export default Profile
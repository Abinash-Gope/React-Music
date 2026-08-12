import React, { useContext } from 'react'
import {AuthContextData} from '../context/AuthContext'

const Home = () => {
  const { registerUser } = useContext(AuthContextData)
  console.log(registerUser)
  return (
    <div>Home</div>
  )
}

export default Home
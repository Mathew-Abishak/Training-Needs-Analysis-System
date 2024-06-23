import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import './Form.css'

export default function Login() {
    const navigate=useNavigate()
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[userList,setUserList]=useState('')
    useEffect(()=>{
      axios.get('http://localhost:3001/users').then(res=>setUserList(res.data)).catch(err=>console.log(err))
    },[])
  const auth=useAuth()
  const handleLogin=()=>{
    const userExist=userList.some(u=>u.username==username&&u.password==password)
    if(userExist){
      auth.login(username)
      navigate('/')
    }
    else{
      alert("Invalid Username or Password")
    }
  }
  return (
    <div className='form'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <label for='u2'>Username</label>
        <input type='text' value={username} id='u2' className='nam' onChange={(e)=>{setUsername(e.target.value)}}/>
        <br></br>
        <label for='p2'>Password</label>
        <input type='password' class='ht' id='p2' value={password} className='pass' onChange={(e)=>{setPassword(e.target.value)}}/>
        <br></br>
        <button type='submit' className='button1'>Login</button><br></br><br></br>
        <Link to='/signup' className='poda'>Don't have an account?Sign Up</Link>
      </form>
    </div>
  )
}

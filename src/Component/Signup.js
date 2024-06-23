import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Form.css'

export default function Signup() {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSignup=()=>{
      axios.post('http://localhost:3001/users',{"username":username,"email":email,"password":password}).then(res=>console.log(res)).catch(err=>console.log(err))
    }
  
  return (
    <div className='form'>
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <label for='u1'>Username</label>
        <input type='text' value={username} id='u1' className='nam' onChange={(e)=>{setUsername(e.target.value)}}/>
        <br></br>
        <label for='e1'>E-mail</label>
        <input type='email' value={email} className='mail' id='e1' onChange={(e)=>{setEmail(e.target.value)}}/>
        <br></br>
        <label for='p1'>Password</label>
        <input type='password' value={password} id='p1' className='pass' onChange={(e)=>{setPassword(e.target.value)}}/>
        <br></br>
        <button type='submit' className='button2'>Signup</button><br></br><br></br>
        <Link to='/login' className='poda'>Already have an account? Log In</Link>
      </form>
    </div>
  )
}

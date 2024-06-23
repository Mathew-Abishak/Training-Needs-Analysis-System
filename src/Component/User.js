import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Form.css'

export default function User() {
  const navigate=useNavigate()
  const auth=useAuth()
  const handleLogout=()=>{
    auth.logout()
    navigate('/')
  }
  const[post,setPost]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/students').then(res=>{setPost(res.data)}).catch(err=>{console.log(err)})
  })
  return (
    <div>
      {auth.user&&<h1>Welcome {auth.user}</h1>}<br></br>
      <div className='flex-container'>
        {post.map(x=>(
          <div className='flex-items'>
            <p>ID:{x.id}</p>
            <p>Name:{x.name}</p>
            <p>Age:{x.age}</p>
            <p>CGPA:{x.cgpa}</p>
            <p>Training Interest:{x.interest}</p>
            <p>Programming Interest:{x['programming level']}%</p>
          </div>
        ))}
      </div>
      {auth.user&&<button onClick={handleLogout} className='button3'>Log Out</button>}
    </div>
  )
}

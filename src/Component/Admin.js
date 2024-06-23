import { useAuth } from './Auth'
import axios from 'axios'
import './Admin.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
    const navigate=useNavigate()
    const auth=useAuth()
    const handleLogout=()=>{
    auth.logout()
    navigate('/')
  }
    const[post,setPost]=useState([])
    const[id,setId]=useState(0)
    const[name,setName]=useState('')
    const[age,setAge]=useState(0)
    const[cgpa,setCgpa]=useState(0)
    const[inter,setInter]=useState('')
    const[pro,setPro]=useState(0)
    const[pro1,setPro1]=useState(0)
    const[sug,setSug]=useState('')
    const[popup,setPopup]=useState(false)
    const[id1,setId1]=useState(0)
    const[name1,setName1]=useState('')
    const[age1,setAge1]=useState(0)
    const[cgpa1,setCgpa1]=useState(0)
    const[inter1,setInter1]=useState('')
    const openpopup=(datas)=>{
        setPopup(true)
        setId1(datas.id)
        setName1(datas.name)
        setAge1(datas.age)
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:3001/students/${id1}`,
        {
            "id":id1,"name":name1,"age":age1,"cgpa":cgpa1,"interest":inter1,"programming level":pro1,"suggested":sug
        })
        .then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    useEffect(()=>{
        axios.get("http://localhost:3001/students")
        .then(res=>{setPost(res.data)})
        .catch(err=>console.log(err))
    })
    const handleSubmit=()=>{
        axios.post("http://localhost:3001/students",{
        "id":id,"name":name,"age":age,"cgpa":cgpa,"interest":inter,"programming level":pro,"suggested":sug
    }
        ).then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/students/${id}`)
        .then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    function Check(){
    if(pro>=80){
        if(inter=="Yes"||inter=="yes"){
            setSug("Needed")
        }
        else{
            setSug("Not Needed")
        }
    }
    else if(pro<=80&&pro>=70){
        if(inter==="Yes"||inter==="yes"){
            setSug("Needed")
        }
        else{
            setSug("Not Needed")
        }
    }
    else{
        setSug("Needed")
    }}
  return (
    <div className='container'>
        <h1 className='wel'>Welcome {auth.user}</h1><br></br>
        <div className='ad_for'>
        <form onSubmit={handleSubmit}>
            <label>Id</label>
            <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
            <br></br>
            <label>Name</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <label>Age</label>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <br></br>
            <label>CGPA</label>
            <input type='number' value={cgpa} onChange={(e)=>setCgpa(e.target.value)}/>
            <br></br>
            <label>Training Interest</label>
            <input type='text' value={inter} placeholder='Yes or No' onChange={(e)=>setInter(e.target.value)}/>
            <br></br>
            <label>Programming Level</label>
            <input type='number' value={pro} className='label6' onChange={(e)=>setPro(e.target.value)}/>
            <br></br>
            <button type='submit' onClick={Check}>Submit</button>
        </form>
        </div>    
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>CGPA</th>
                    <th>Training Interest</th>
                    <th>Programming Level</th>
                    <th>Action</th>
                    <th>Suggested</th>
                    <th>Assessment Marks</th>
                </tr>
            </thead>
            <tbody>
                {post.map(x=>
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.cgpa}</td>
                    <td>{x.interest}</td>
                    <td>{x['programming level']}%</td>
                    <td>
                        <button onClick={()=>openpopup(x)}>Update</button>
                        <button onClick={()=>handleDelete(x.id)}>Delete</button>
                    </td>
                    <td>{x.suggested}</td>
                    <td>{x.marks}</td>
                  </tr>  
                    )}
            </tbody>
        </table>
        {popup && <div className='popup'>
        <form onSubmit={handleUpdate}>
            <button id='x-button' onClick={()=>setPopup(false)}>X</button><br></br><br></br>
            <label>Id</label>
            <input type='number' value={id1} className='label1' onChange={(e)=>setId1(e.target.value)}/>
            <br></br>
            <label>Name</label>
            <input type='text' value={name1} className='label2' onChange={(e)=>setName1(e.target.value)}/>
            <br></br>
            <label>Age</label>
            <input type='number' value={age1} className='label3' onChange={(e)=>setAge1(e.target.value)}/>
            <br></br>
            <label>CGPA</label>
            <input type='number' value={cgpa1} className='label4' onChange={(e)=>setCgpa1(e.target.value)}/>
            <br></br>
            <label>Training Interest</label>
            <input type='text' value={inter1} className='label5' placeholder='Yes or No' onChange={(e)=>setInter1(e.target.value)}/>
            <br></br>
            <label className='label7'>Programming Level</label>
            <input type='number' value={pro1} className='label67' onChange={(e)=>setPro1(e.target.value)}/>
            <br></br>
            <button type='submit' onClick={Check}>Submit</button>
        </form></div>}
        <button onClick={handleLogout} className='button4'>Log Out</button>
    </div>
  )
}
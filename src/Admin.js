import React from 'react'
import {Link} from "react-router-dom"
const Admin = () => {
  return (
    <div>
        <h1>Admin panel</h1>
        <Link to="/dashboard">
        <button  type="button" style={{color:"white",backgroundColor:"blue"}}>Dashboard</button>
        </Link>
        <Link to="/user">
        <button style={{color:"white",backgroundColor:"blue",marginLeft:"2%"}}>Register User</button>
        </Link>
        <Link to="/">
        <button  type="button" style={{color:"white",backgroundColor:"blue",marginLeft:"50%"}}>Login</button>
        </Link>
        <hr/>
      <marquee> <h1 style={{color:"red"}}>This is Home</h1></marquee>
      <marquee> <h1 style={{color:"red"}}>Welcome </h1></marquee>
      <marquee> <h1 style={{color:"red"}}>please click these buttons </h1></marquee>


    </div>
  )
}

export default Admin
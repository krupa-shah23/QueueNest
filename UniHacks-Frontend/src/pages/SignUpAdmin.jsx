import React, { useState } from 'react'
import axios from "axios"

const SignUpAdmin = () => {

  // 🔹 STATE
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")

  // 🔹 HANDLE SIGNUP
  const handleSignup = async () => {
    try {
      const res = await axios.post(
        "https://queuenest-1.onrender.com/api/auth/admin/register",
        {
          name,
          email,
          mobile,
          password
        }
      )

      alert("Signup successful ✅ Please login")
      window.location.href = "/loginadmin"

    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div>

      <div id='new login'>
        <div className="backgroundlogin">
          <div className="shapelogin"></div>
          <div className="shapelogin"></div>
        </div>

        <form id='loginform'>
          <h3 className='title1'>Sign Up</h3>

          {/* 🔹 NAME */}
          <label>Username</label>
          <input
            type='text'
            placeholder='Username'
            className='container'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* 🔹 EMAIL */}
          <label>Email</label>
          <input
            type='text'
            placeholder='Email'
            className='container'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* 🔹 Mobile */}
          <label>Mobile Number</label>
          <input
            type='text'
            placeholder='Mobile Number'
            className='container'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          {/* 🔹 PASSWORD */}
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            className='container'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='button'
            className='admin-btn'
            onClick={handleSignup}
          >
            Sign Up
          </button>

          <label>
            Already have an account? Click <a href='/loginadmin'><u>here</u></a>
          </label>
        </form>
      </div>
    </div>
  )
}

export default SignUpAdmin

import React, { useState } from 'react'
import '../Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signin = () => {


  const nav = useNavigate()


  const [input, setinput] = useState(
    { "email": "", "password": "" }

  )
  const ih = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }
  const rv = () => {
    console.log(input)
    axios.post("http://localhost:3030/signIn", input).then(
      (response) => {
        console.log(response.data)
        if (response.data.status === "incorrect password") {
          alert("invalid password")
        } else if (response.data.status === "invalid id") {
          alert("invalid email")

        } else {
          let token = response.data.token
          let userId = response.data.userId
          
          sessionStorage.setItem("userId", userId)
          sessionStorage.setItem("token", token)
          nav("/create")
        }
      }
    ).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" name='email' value={input.email} onChange={ih} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={input.password} onChange={ih} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={rv}>signin</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <a href='/signup' className="btn btn-primary">new user</a>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Signin
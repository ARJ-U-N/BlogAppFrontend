import React, { useState } from 'react'
import '../Signup.css'
import axios, { Axios } from 'axios'



const signup1 = () => {


    const [input, setinput] = new useState({
        "name": "", "phone": "", "email": "", "password": "", "cnfPass": ""
    })
    const ih = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })

    }
    const rv = () => {
        if (input.password === input.cnfPass) {
            let newinput = { "name": input.name, "phone": input.phone, "email": input.email, "password": input.password }
            axios.post("http://localhost:3030/signUp", newinput).then(
                (response) => {
                    console.log(response.data)

                    if (response.data.status === "Success") {
                        alert("registered")
                        setinput({"name": "", "phone": "", "email": "", "password": "", "cnfPass": ""})
                    } else {
                        alert("email exist")
                        setinput({"name": "", "phone": "", "email": "", "password": "", "cnfPass": ""})

                    }
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        } else {
            alert("password error")
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={ih} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="text" className="form-control" name='phone' value={input.phone} onChange={ih} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={ih} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={ih} />

                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label"> confirm Password</label>
                                <input type="password" className="form-control" name='cnfPass' value={input.cnfPass} onChange={ih} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={rv}>Register</button>
                                <a href='/' className="btn btn-primary">SignUp</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default signup1
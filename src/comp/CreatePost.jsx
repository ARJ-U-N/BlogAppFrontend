import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
    const [token, setoken] = useState(sessionStorage.getItem("token"))





    const [input, setinput] = useState(
        			
			
		{"userId":sessionStorage.getItem("userId"),"Message":""}
		



    )
    const ih = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
      }
      const rv=()=>{
        console.log(input)
        axios.post("http://localhost:3030/create",input,{
            headers:{"token":token,"Content_Type":"application/json"}
        }).then(
            (response)=>{
console.log(response.data)

                if (response.data.status==="Success ") {
                    alert("posted succesfully")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
      }
  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">post a message</label>
                        <textarea name="Message" value={input.Message} className="form-control" onChange={ih}></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={rv}>post</button>
                    </div>
                </div>
                </div>
            </div>
         </div>

    </div>
  )
}

export default CreatePost
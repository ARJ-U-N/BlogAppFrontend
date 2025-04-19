import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewmp = () => {
    const [data, setdata] = useState([])
    const [token, settoken] = useState(sessionStorage.getItem("token"))
    const [id, setid] = useState({"userId":sessionStorage.getItem("userId")})



    const fd = () => {
        axios.post("http://localhost:3030/viewmypost",id, {
            headers: { "token":token, "Content_Type": "application/json" }
        }).then(
            (response) => {
                setdata(response.data)

            }
        ).catch(
            (error) => { console.log(error) }
        )
    }

    useEffect(() => { fd() }, [])


    

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                                {data.map(
                                    (value,index)=>{
                                        return   <div class="card" >
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                                        <h5 class="card-title">{value.Message}</h5>
                                                        <p class="card-text"><small class="text-body-secondary">posted on{value.posredDate}</small></p>
                                                    </div>
                                    </div>
                                    }
                                )}














                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewmp
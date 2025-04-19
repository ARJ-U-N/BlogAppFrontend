import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const lg=()=>{
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/create">create</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewall">view all</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewmp">view my posy</a>
                            </li>
                            <li class="nav-item">
                                <button onClick={lg} className="btn btn-success">logout</button>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
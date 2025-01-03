import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import url from "../API/api.js"

function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    const Submit = (e) => {
        e.preventDefault()
        axios.post(url + "/createUser", {name, email, age})
        .then(results => {
            console.log(results)
            navigate("/")
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 m-auto mt-5">
                    <div className="d-flex justify-content-end">
                        <Link to="/" className="btn btn-primary ">Users</Link>
                    </div>
                    <form onSubmit={Submit}>
                        <div className="form-group mb-2">
                            <label >Name</label>
                            <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label >Email</label>
                            <input type="email" className="form-control" placeholder="Password" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label >Age</label>
                            <input type="number" className="form-control" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateUser;
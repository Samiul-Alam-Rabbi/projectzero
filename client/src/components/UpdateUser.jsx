import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import url from "../API/api.js"
import axios from 'axios'
function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(url + "/getUser/"+id)
        .then(results => {
            console.log(results)
            setName(results.data.name)
            setEmail(results.data.email)
            setAge(results.data.age)
        })
        .catch(err => console.log(err))
    }, [])
    const Update = (e) => {
        e.preventDefault()
        axios.put(url + "/putUser/"+id, {name, age, email})
        .then(res => {
            console.log(res)
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
                    <form onSubmit={Update}>
                        <div className="form-group mb-2">
                            <label >Name</label>
                            <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label >Email</label>
                            <input type="email" className="form-control" placeholder="Password" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label >Age</label>
                            <input type="number" className="form-control" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UpdateUser;
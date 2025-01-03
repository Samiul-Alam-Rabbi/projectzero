import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { Button } from "bootstrap";
import url from "../API/api.js"
function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(results => setUsers(results.data))
        .catch(err => console.log(err))
    })

    const handleDelete = (id) => {
        axios.delete(url + "/deleteUser/"+id)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/create" className="btn btn-primary ">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="row">

                <div className="col-lg-12 m-auto">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return (
                                        <tr>
                                            <th>{user.name}</th>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td>
                                                <Link to={`/update/${user._id}`} className="btn btn-primary btn-sm me-2">Update+</Link>
                                                <button className="btn btn-danger btn-sm" onClick={(e) => handleDelete(user._id)}>delete-</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Users;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function EditUser() {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  })

  const {id} = useParams()

  const { name, username, email } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(()=>{
    loadUser()
  },[])

  const onSubmit =async (e) => {
    e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`,user)
      window.location.replace("/")
    }

    const loadUser = async()=>{
        const res = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(res.data)
    }
    

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link  className="btn btn-danger mx-2" to="/">Cancle</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

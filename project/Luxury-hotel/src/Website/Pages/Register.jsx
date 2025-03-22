import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const redirect = useNavigate()

  const [newuser,setnewuser] = useState({
    id:"",
    name:"",
    email:"",
    password:"",
    image:"",
    phone:"",
    status:""
  })

  const handleonchange=(e)=>{
    setnewuser({
      ...newuser,
      id: new Date().getTime().toString(),
      status:"unblock",
      [e.target.name]:e.target.value
    })
    console.log(newuser)
  }
  
  const handlesubmit =async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/users`,newuser)
      console.log(res.data)
      setnewuser({
        id:"",
        name:"",
        email:"",
        password:"",
        image:"",
        phone:"",
        status:""
      })
      redirect("/")
    } catch (error) {
      console.log("error api data",error)
    }
  }
  return (
    <>
      <section className="site-section">
        <div className=" container col-9 col-md-7 col-lg-5 col-xl-4">
          <div className="row ">
            <div className="col-md-12">
              <form className="jumbotron py-4" onSubmit={handlesubmit}>
              <h2 className="mb-4 text-center">Sign Up</h2>
                <div className="row justify-content-center">
                  <div className="col-md-10 form-group">
                    <label htmlFor="email">Name :</label>
                    <input
                      type="text"
                      id="text"
                      name="name"
                      value={newuser.name}
                      onChange={handleonchange}
                      className="form-control "
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-10 form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newuser.email}
                      onChange={handleonchange}
                      className="form-control "
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-10 form-group">
                    <label htmlFor="email">Image Url :</label>
                    <input
                      type="url"
                      id="url"
                      name="image"
                      value={newuser.image}
                      onChange={handleonchange}
                      className="form-control "
                      placeholder="Enter Your Image Url"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-10 form-group">
                    <label htmlFor="pass">Password :</label>
                    <input
                      type="Password"
                      name="password"
                      value={newuser.password}
                      onChange={handleonchange}
                      className="form-control"
                      id="pass"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-10 form-group">
                    <label htmlFor="tel">Phone :</label>
                    <input
                      type="tel"
                      name="phone"
                      value={newuser.phone}
                      onChange={handleonchange}
                      className="form-control"
                      id="tel"
                      placeholder="Enter Your Contact Number"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mt-3 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;

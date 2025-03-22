import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
  const redirect = useNavigate()

const[users,setusers] = useState({
        email:"",
        password:""
    })

    const handleonchange =(e)=>{
      setusers({
          ...users,
          [e.target.name] : e.target.value
      })
      // console.log(admin)
  }

const handlesubmit=async(e)=>{
  e.preventDefault();

  const {email,password} = users

  // users ematy data
  if(!email.trim() || !password.trim()){
      console.log("Email and password filed first...!")
      toast.error("Email and password filed first...!")
      return false
  }

  try {
      const res = await axios.get(`http://localhost:3000/users?email=${email}`)

      //email match
      if(res.data.length == 0){
          console.log("Email does not match")
          toast.error("Email does not match")
          return false;
      }
          
     const us = res.data[0]
     //console.log(us)

     //password match
     if(us.password != password){
      console.log("password does not match")
      toast.error("password does not match")
      return false
     }

     if(us.status !== "unblock"){
      toast.error("account has been blocked")
      return false;
  }
     localStorage.setItem("userEmail", us.email);  // Store email as well
     localStorage.setItem("userid",us.id)
     localStorage.setItem("username",us.name)
     console.log("login successfully...")
     toast.success("login successfully...")
     redirect("/")
      
  } catch (error) {
      console.log("Api user data not found",error)
      toast.error("Api user data not found",error)
  }
}

  return (
    <>
      <section className="site-section">
        <div className="container col-9 col-md-5 col-lg-5 col-xl-3">
              <form className="jumbotron py-4" onSubmit={handlesubmit}>
                <h2 className="mb-4 text-center">Login</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11 form-group">
                    <label htmlFor="name">Useremail :</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={users.email}
                      onChange={handleonchange}
                      className="form-control "
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-11 form-group">
                    <label htmlFor="pass">Password :</label>
                    <input
                      type="Password"
                      name="password"
                      value={users.password}
                      onChange={handleonchange}
                      className="form-control"
                      id="pass"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mt-3 d-flex justify-content-center">
                    <button type="submit" className="btn btn-sm btn-primary">
                      Login
                    </button>
                  </div>
                </div>
                <div className="text-center">
                    <p>Not a member? <Link to="/register"> <span style={{color:"#b99365",fontWeight:"500"}}>Register</span></Link></p>
              </div>
              </form>
        </div>
      </section>
    </>
  )
}

export default Login

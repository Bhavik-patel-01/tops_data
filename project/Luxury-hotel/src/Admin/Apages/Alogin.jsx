import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Aheader from '../Acomman/Aheader'
import { toast } from 'react-toastify'


function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("adminid")){
            redirect("/dashboard")
        }
    })

    const [admin,setadmin] = useState({
        email:"",
        password:""
    })

    const handleonchange =(e)=>{
        setadmin({
            ...admin,
            [e.target.name] : e.target.value
        })
        // console.log(admin)
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();

        const {email,password} = admin

        // Admin ematy data
        if(!email.trim() || !password.trim()){
            console.log("Email and password filed first...!")
            toast.error("Email and password filed first...!")
            return false
        }

        try {
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)

            //email match
            if(res.data.length == 0){
                console.log("Email does not match")
                toast.error("Email does not match")
                return false;
            }
                
           const ad = res.data[0]
           //console.log(ad)

           //password match
           if(ad.password != password){
            console.log("password does not match")
            toast.error("password does not match")
            return false
           }
        
           localStorage.setItem("adminid",ad.id)
           localStorage.setItem("name",ad.name)
           console.log("login successfully...")
           toast.success("Admin login successfully...")
           redirect("/dashboard")
            
        } catch (error) {
            console.log("Api admin data not found",error)
            toast.error("Api admin data not found",error)
        }
    }
  return (
    <>
    <Aheader />
      <section className="site-section">
        <div className="container col-9 col-md-5 col-lg-5 col-xl-3">
              <form className="jumbotron py-4" onSubmit={handlesubmit}>
                <h2 className="mb-4 text-center">Admin Login</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11 form-group">
                    <label htmlFor="name">Useremail :</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={admin.email}
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
                      value={admin.password}
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
                      Register
                    </button>
                  </div>
                </div>
              </form>
        </div>
      </section>
    </>
  )
}

export default Alogin

import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EditProfile() {

  const redirect = useNavigate()

  const [data, setdata] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    img: "",
    phone: "",
    status: ""
})

useEffect(() => {
  fechdata()
}, [])

const fechdata = async () => {
  try {
      const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("userid")}`)
      console.log(res.data)
      setdata(res.data)

  } catch (error) {
      console.log("api data not found", error)
  }
}

const handleonchange = (e) => {
  setdata({
      ...data,
      [e.target.name]: e.target.value
  })
  console.log(data)
}

const handleedit = async (e) => {
  e.preventDefault()

  try {

      if (data.name.trim() === "" || data.email.trim() === "" 
      || data.password.trim() === "" || data.img.trim() === "" || data.phone.trim() === ""){
          console.log("pls fill first form")
          toast.error("pls fill first form")
          return false
      }

      const res = await axios.patch(`http://localhost:3000/users/${data.id}`,data)
      console.log(res.data)

      if(res.status == 200){
        setdata({
            name: "",
            email: "",
            password: "",
            img: "",
            phone: "",
          });
          toast.success("Successfully edited")
          redirect("/")
    }
    } catch (error) {
      console.log("Api data not Found")
      toast.error("Api data not Found")
  }
}
  return (
    <>
    <Header />
    <section
        className="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        style={{
          backgroundImage: "url(images/big_image_1.jpg)",
          backgroundAttachment: "fixed",
          minHeight: "200px",
          height: "30vh",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            className="row align-items-center site-hero-inner d-flex align-items-center"
            style={{ minHeight: "300px", height: "30vh" }}
          >
            <div className="col-md-12 text-center align-items-center">
              <div className="fadeInUp element-animated">
                <h1 style={{ fontSize: "35px" }}>Profile Changes</h1>
                {(() => {
                  if (localStorage.getItem("userid")) {
                    return (
                      <>
                        <p>{localStorage.getItem("username")}</p>
                      </>
                    );
                  }
                })()}
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End section */}

       <section className="site-section">
        <div className="container col-9 col-md-7 col-lg-5 col-xl-4">
          <div className="row ">
            <div className="col-md-12">
              <form className="jumbotron py-4" onSubmit={handleedit}>
              <h2 className="mb-5 text-center">Update Profile</h2>
                <div className="row justify-content-center">
                  <div className="col-md-10 form-group">
                    <label htmlFor="email">Name :</label>
                    <input
                      type="text"
                      id="text"
                      name="name"
                      value={data.name}
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
                      value={data.email}
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
                      value={data.img}
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
                      value={data.password}
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
                      value={data.phone}
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
                    <button type="submit" className="btn btn-primary rounded">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditProfile




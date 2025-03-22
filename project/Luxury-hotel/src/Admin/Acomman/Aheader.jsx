import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Aheader() {
  const redirect = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("adminid")) {
      redirect("/alogin");
    }
  });

  const logout = () => {
    localStorage.removeItem("adminid");
    localStorage.removeItem("name");
    redirect("/alogin");
    console.log("logout successfully...");
    toast.success("logout successfully...");
  };
  return (
    <>
      <header role="banner">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-light"
          style={{ backgroundColor: "red" }}
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              LuxuryHotel
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse navbar-light"
              id="navbarsExample05"
            >
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle "
                    data-toggle="dropdown"
                  >
                    Rooms Manage
                  </Link>
                  <div className="dropdown-menu rounded-0 m-0">
                    <NavLink to="/AroomsManage" className="dropdown-item">
                      Room Manage
                    </NavLink>
                    <NavLink to="/AroomsAdd" className="dropdown-item">
                      Room ADD
                    </NavLink>
                    <NavLink to="/AbookingManage" className="dropdown-item">
                      Room booking manage
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/usermanage">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item cta">
                  <NavLink className="nav-link" to="/booknow">
                    <span>Book Now</span>
                  </NavLink>
                </li> */}
                {(() => {
                  if (localStorage.getItem("adminid")) {
                    return (
                      <>
                        <li className="nav-item cta">
                          <NavLink
                            onClick={logout}
                            className="nav-item nav-link"
                          >
                            <span> Logout </span>
                          </NavLink>
                        </li>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <li className="nav-item cta">
                          <NavLink to="/alogin" className="nav-item nav-link">
                            <span> Alogin </span>
                          </NavLink>
                        </li>
                      </>
                    );
                  }
                })()}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* END header */}
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
                <h1 style={{ fontSize: "35px" }}>Admin</h1>
                {(() => {
                  if (localStorage.getItem("adminid")) {
                    return (
                      <>
                        <p>{localStorage.getItem("name")}</p>
                      </>
                    );
                  }
                })()}
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
    </>
  );
}

export default Aheader;

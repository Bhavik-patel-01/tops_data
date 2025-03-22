import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Header() {
  const redirect = useNavigate();

  const logout = () => {
     localStorage.removeItem("userid");
     localStorage.removeItem("username");
     redirect("/");
    //  console.log("logout successfully...");
     toast.success("logout successfully...");
    
   };
  return (
    <>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
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
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rooms">
                    Rooms
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/filter"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Rooms
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="rooms.html">
                      Room Videos
                    </a>
                    <a className="dropdown-item" href="rooms.html">
                      Presidential Room
                    </a>
                    <a className="dropdown-item" href="rooms.html">
                      Luxury Room
                    </a>
                    <a className="dropdown-item" href="rooms.html">
                      Deluxe Room
                    </a>
                  </div>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Blog
                  </NavLink>
                </li> */}
                {(() => {
                  if (localStorage.getItem("userid")) {
                    return (
                      <>
                        <li className="nav-item">
                          <NavLink to="/edit" className="nav-item nav-link">
                            Hello...{localStorage.getItem("username")}
                          </NavLink>
                        </li>
                      </>
                    );
                  }
                })()}
                {(() => {
                  if (localStorage.getItem("userid")) {
                    return (
                      <>
                        <li className="nav-item cta">
                          <NavLink
                            onClick={logout}
                            className="nav-item nav-link"
                          >
                            <span>Logout</span>
                          </NavLink>
                        </li>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <li className="nav-item cta">
                          <NavLink to="/login" className="nav-item nav-link">
                            <span> Login </span>
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
    </>
  );
}

export default Header;

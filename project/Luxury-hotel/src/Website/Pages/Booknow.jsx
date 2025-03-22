import React, { useEffect, useState } from "react";
import Header from "../Comman/Header";
import Footer from "../Comman/Footer";
import Loader from "../Comman/Loader";
import Vidsection from "../Comman/Vidsection";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Booknow() {
  const location = useLocation();

  // Destructuring room data from location.state
  const { title, description, image, guest, sqft, price } =
    location.state || {};
  
  const [booking, setbooking] = useState({
    id: "",
    arrival_date: "",
    departure_date: "",
    room: "",
    guest: "",
    email: "",
    description: "",
    title: "",
    price: "",
  });
   // useEffect to retrieve email from localStorage and set it in the booking state
   useEffect(() => {
    const userEmail = localStorage.getItem("userEmail"); // Get email from localStorage
    if (userEmail) {
      setbooking((prevBooking) => ({
        ...prevBooking,
        email: userEmail, // Set email in booking state
      }));
    }
  }, []);
  const handleonchange = (e) => {
    setbooking({
      ...booking,
      id: new Date().getTime().toString(),
      title: title,
      price: price,
      [e.target.name]: e.target.value,
    });
    console.log(booking);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/booking`, booking);
      console.log(res.data);
      setbooking({
        id: "",
        arrival_date: "",
        departure_date: "",
        room: "",
        guest: "",
        email: "",
        description: "",
      });
      toast.success("Reservation successfully");
    } catch (error) {
      console.log("error api data", error);
    }
  };
  return (
    <>
      <Header />
      <div>
        <section
          className="site-hero site-hero-innerpage overlay"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(images/big_image_1.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center site-hero-inner justify-content-center">
              <div className="col-md-12 text-center">
                <div className="mb-5 fadeInUp element-animated">
                  <h1>Reservation</h1>
                  <p>Discover our world's #1 Luxury Room For VIP.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END section */}
        <section className="site-section p-4 p-lg-5">
          <div className="container">
          {title && image && description && guest && sqft && price ? (
            <div className="row">
            
              <div className="col-md-6 order-3 order-sm-3 order-md-1">
                <h2 className="mb-5 mt-5 mt-md-0 text-center text-md-left">
                  Reservation Form
                </h2>
                <form onSubmit={handlesubmit}>
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <label htmlFor="">Arrival Date</label>
                      <div style={{ position: "relative" }}>
                        <input
                          type="date"
                          name="arrival_date"
                          value={booking.arrival_date}
                          className="form-control"
                          onChange={handleonchange}
                          id="arrival_date"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 form-group">
                      <label htmlFor>Departure Date</label>
                      <div style={{ position: "relative" }}>
                        <input
                          type="date"
                          id="departure_date"
                          name="departure_date"
                          value={booking.departure_date}
                          className="form-control"
                          onChange={handleonchange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="room">Room</label>
                      <select
                        name="room"
                        id="room"
                        className="form-control"
                        onChange={handleonchange}
                        value={booking.room}
                        required
                      >
                        <option value="1room">1 Room</option>
                        <option value="2room">2 Rooms</option>
                        <option value="3room">3 Rooms</option>
                        <option value="4room">4 Rooms</option>
                        <option value="5room">5 Rooms</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="room">Guests</label>
                      <select
                        name="guest"
                        id="guest"
                        className="form-control"
                        onChange={handleonchange}
                        value={booking.guest}
                        required
                      >
                        {/* <option hidden>Select No. of Guests</option> */}
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={booking.email}
                        className="form-control "
                        onChange={handleonchange}
                        readOnly 
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="message">Write a Note</label>
                      <textarea
                        name="description"
                        id="message"
                        className="form-control "
                        onChange={handleonchange}
                        value={booking.description}
                        cols={30}
                        rows={8}
                        style={{ resize: "none" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <button type="submit" className="btn btn-primary">
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-1 order-2 order-lg-2" />
              <div className="col-md-5 order-1 order-sm-1 order-md-3 ">
                <h3 className="mb-5 text-center text-md-left">Room Details</h3>
                
                  <div className="media d-block room mb-0">
                    <figure>
                      <img src={image} alt={title} className="img-fluid" />
                      <div className="overlap-text">
                        <span>
                          {/* Featured Room */}
                          <span className="ion-ios-star" />
                          <span className="ion-ios-star" />
                          <span className="ion-ios-star" />
                        </span>
                      </div>
                    </figure>
                    <div className="media-body">
                      <h3 className="mt-0">
                        <a href="#">{title}</a>
                      </h3>
                      <ul className="room-specs">
                        <li>
                          <span className="ion-ios-people-outline" /> {guest}
                          Guests
                        </li>
                        <li>
                          <span className="ion-ios-crop" /> {sqft} ft{" "}
                          <sup>2</sup>
                        </li>
                      </ul>
                      <p>{description}</p>
                      <p>
                        <a href="#" className="btn btn-primary btn-sm" style={{ pointerEvents: 'none'}}>
                          Book Now From ${price}
                        </a>
                      </p>
                    </div>
                  </div>
                
              </div>  
            </div>
            ) : (
              // Agar details missing hain, toh fallback message show karenge
              <div className="text-center">
                <h4>
                  <Link className="btn btn-secondary"> Please select your room first :</Link>
                </h4>
                <Link to="/rooms" className="btn btn-primary btn-sm p-2 mt-4 rounded">
                  Select room
                </Link>
              </div>
            )}
          </div>
        </section>
        {/* END section */}
        <Vidsection />
        {/* END section */}
      </div>

      <Footer />
      <Loader />
    </>
  );
}
export default Booknow;

import React, { useEffect, useState } from "react";
import Header from "../Comman/Header";
import Vidsection from "../Comman/Vidsection";
import Footer from "../Comman/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function Rooms() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [rooms, setrooms] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await axios.get("http://localhost:3000/rooms");
    console.log(res.data);
    setrooms(res.data);
  };

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? rooms
      : rooms.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Header />
      <section
        className="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(images/big_image_1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-12 text-center">
              <div className="mb-z fadeInUp element-animated">
                <h1>Our Rooms</h1>
                <p>Discover our world's #1 Luxury Room For VIP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
      <div className="container">
        <div className="btn-wrap">
          <button
            className="btn btn-primary btn-outline-primary btn-sm"
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className="btn btn-primary btn-outline-primary btn-sm"
            onClick={() => setSelectedCategory("economy")}
          >
            Economy
          </button>
          <button
            className="btn btn-primary btn-outline-primary btn-sm"
            onClick={() => setSelectedCategory("luxury")}
          >
            Luxury
          </button>
          <button
            className="btn btn-primary btn-outline-primary btn-sm"
            onClick={() => setSelectedCategory("deluxe")}
          >
            Deluxe
          </button>
          <button
            className="btn btn-primary btn-outline-primary btn-sm"
            onClick={() => setSelectedCategory("royal")}
          >
            royal
          </button>
        </div>
      </div>
      <section className="site-section" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div className="row">
            {filteredItems.map((item) => {
              const {
                id,
                category,
                title,
                description,
                image,
                guest,
                sqft,
                price,
              } = item;
              return (
                <div
                  key={id}
                  className="col-md-4 mb-4 fadeInUp element-animated"
                >
                  <div className="media d-block room mb-0">
                    <figure>
                      <img src={image} alt={title} className="img-fluid" />
                      <div className="overlap-text">
                        <span className="rating">
                          {/* Featured Room */}
                          <span className="ion-ios-star" />
                          <span className="ion-ios-star" />
                          <span className="ion-ios-star-half" />
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
                          <span className="ion-ios-crop" /> {sqft} ft
                          <sup>2</sup>
                        </li>
                      </ul>
                      <p>{description}</p>
                      <p>
                        {(() => {
                          if (localStorage.getItem("userid")) {
                            return (
                              <>
                                <Link
                                  to="/booknow"
                                  state={{
                                    title,
                                    description,
                                    image,
                                    guest,
                                    sqft,
                                    price,
                                  }}
                                  className="btn btn-primary btn-sm"
                                >
                                  Book Now From ${price}
                                </Link>
                              </>
                            );
                          } else {
                            return (
                              <Link
                                to="/login"
                                className="btn btn-primary btn-sm"
                              >
                                Book Now From ${price}
                              </Link>
                            );
                          }
                        })()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Vidsection />
      <Footer />
    </>
  );
}

export default Rooms;

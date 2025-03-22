import React from 'react'
import { useLocation } from 'react-router-dom';

function Book() {
    const location = useLocation();
  const { title, description, image, guest, sqft, price } = location.state || {};
  return (
    <>
      <section className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h3 className="mb-5">Featured Room</h3>
                <div className="media d-block room mb-0">
                  <figure>
                    <img
                      src={image}
                      alt={title}
                      className="img-fluid"
                    />
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
                        <span className="ion-ios-people-outline" /> {guest} Guests
                      </li>
                      <li>
                        <span className="ion-ios-crop" /> {sqft} ft <sup>2</sup>
                      </li>
                    </ul>
                    <p>
                      {description}
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary btn-sm">
                        Book Now From ${price}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Book

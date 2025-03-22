import React, { useState } from "react";
import Aheader from "../Acomman/Aheader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AroomsAdd() {

  const redirect = useNavigate()

  const [roomlist, setroomlist] = useState({
    id: "",
    image: "",
    category: "",
    title: "",
    description: "",
    guest: "",
    sqft: "",
    price: ""
  });
  // handaling change data
  const onchaform = (e) => {
    setroomlist({
      ...roomlist,
      // new id
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    });
    console.log(roomlist);
  };

  const roomsubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/rooms", roomlist);
      console.log(res.data);
      setroomlist({
        id: "",
        image: "",
        category: "",
        title: "",
        description: "",
        guest: "",
        sqft: "",
        price: ""
      });
      console.log(roomlist)
      redirect("/AroomsManage")

    } catch (error) {
      console.log("Api data not found");
    }
  };
  return (
    <>
      <Aheader />
      <section className="site-section">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <h2 className="mb-5 text-center">Room Add Form</h2>
              <form  onSubmit={roomsubmit}>
                <div className="row justify-content-center">
                  <div className="col-md-3 form-group">
                    <label htmlFor="room">Category</label>
                    <select
                      id="room"
                      value={roomlist.category}
                      name="category"
                      onChange={onchaform}
                      className="form-control"
                    >
                      <option hidden>Select Room Category</option>
                      <option value="economy">Economy Room</option>
                      <option value="luxury">Luxury Room</option>
                      <option value="deluxe">Deluxe Rooms</option>
                      <option value="royal">Royal Rooms</option>
                    </select>
                  </div>
                  <div className="col-md-3 form-group">
                    <label htmlFor="email">Title</label>
                    <input
                      type="text"
                      id="text"
                      value={roomlist.title}
                      name="title"
                      onChange={onchaform}
                      className="form-control "
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-3 form-group">
                    <label htmlFor="email">Image Url</label>
                    <input
                      type="url"
                      id="url"
                      value={roomlist.image}
                      name="image"
                      onChange={onchaform}
                      className="form-control "
                      required
                    />
                  </div>
                  <div className="col-md-3 form-group">
                    <label htmlFor="room">Guests</label>
                    <select
                      id="room"
                      value={roomlist.guest}
                      name="guest"
                      onChange={onchaform}
                      className="form-control"
                    >
                      <option hidden>Select No. of Guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6 form-group">
                    <label htmlFor="message">Description</label>
                    <textarea
                      value={roomlist.description}
                      name="description"
                      onChange={onchaform}
                      id="message"
                      className="form-control "
                      rows={3}
                      style={{ resize: "none" }}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-3 form-group">
                    <label htmlFor="email">Sqft</label>
                    <input
                      type="number"
                      id="number"
                      value={roomlist.sqft}
                      name="sqft"
                      onChange={onchaform}
                      className="form-control "
                    />
                  </div>
                  <div className="col-md-3 form-group">
                    <label htmlFor="email">Price</label>
                    <input
                      type="number"
                      id="url"
                      value={roomlist.price}
                      name="price"
                      onChange={onchaform}
                      className="form-control "
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mt-3 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      ADD ROOM
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

export default AroomsAdd;

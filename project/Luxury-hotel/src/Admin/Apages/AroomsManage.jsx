import React, { useEffect, useState } from "react";
import Aheader from "../Acomman/Aheader";
import axios from "axios";

function AroomsManage() {
  const [rooms, setrooms] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  // read data
  const getdata = async () => {
    const res = await axios.get("http://localhost:3000/rooms");
    console.log(res.data);
    setrooms(res.data);

  }

  // delete data
  const deletedata = async(id)=>{
    const res =await axios.delete(`http://localhost:3000/rooms/${id}`);
    console.log(res.data)
    getdata()
  }

  //view data 
  const [selectedRoom, setSelectedRoom] = useState(null);

  const viewdata= async(id) =>{
    const res =await axios.get(`http://localhost:3000/rooms/${id}`)
    setSelectedRoom(res.data); 
    console.log(res.data)
  }
   
   // update id
    const [roomupdate, setroomupdate] = useState({
      id: "",
      image: "",
      category: "",
      title: "",
      description: "",
      guest: "",
      sqft: "",
      price: ""
    });
    const onsavedata = (edit) => {
      setroomupdate(edit)
    }
    // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setroomupdate( roomupdate => ({
      ...roomupdate,
      [name]: value,
    }));
  };
  
  const onupdate=async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/rooms/${roomupdate.id}`,roomupdate)
      console.log(res.data)
      getdata()
    } catch (error) {
      console.log("data error",error)
    }
  }
  return (
    <>
      <Aheader />
      <style>
        {`
          .t-heading {
            // color:#dc7900;
            font-size: 2rem;ed3ed
          }
        `}
      </style>
      <div className="container"> 
  <h2 className="text-center py-4 t-heading">Rooms Manage</h2>
  <div className="row">
    <div className="col-12">
      {/* Wrapping table in a responsive wrapper */}
      <div className="table-responsive">
        <table className="table table-image align-items-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">TITLE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">GUEST</th>
              <th scope="col">SQFT</th>
              <th scope="col">PRICE</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {rooms && rooms.map((room, index) => {
              const {id, category, title, description, image, guest, sqft, price} = room;
              return(
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td className="w-25">
                    <img
                      src={image}
                      className="img-fluid img-thumbnail"
                      alt="room"
                    />
                  </td>
                  <td>{category}</td>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{guest}</td>
                  <td>{sqft}</td>
                  <td>{price}</td>
                  <td>
                    {/* <button type="button" className="btn btn-info btn-xs">VIEW</button>
                    <button type="button" className="btn btn-success btn-xs">EDIT</button>
                    <button type="button" className="btn btn-danger btn-xs">DELETE</button> */}
                     <div className="btn-group-vertical w-100">
                <button type="button" onClick={()=>viewdata(room.id)} className="btn btn-info btn-sm btn-block mb-2 rounded" data-toggle="modal" data-target="#Modalview">VIEW</button>
                <button type="button" onClick={()=>onsavedata(room)} className="btn btn-success btn-sm btn-block mb-2 rounded" data-toggle="modal" data-target="#exampleModal">EDIT</button> {/* Button trigger modal */}
                <button type="button" onClick={()=>deletedata(room.id)} className="btn btn-danger btn-sm btn-block mb-2 rounded">DELETE</button>
              </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Modal for update*/}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Room Update Form</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
        <form>
                <div className="row justify-content-center">
                  <div className="col-md-5 form-group">
                    <label htmlFor="room">Category</label>
                    <select id="room" name="category" value={roomupdate.category} onChange={handleInputChange} className="form-control">
                      <option hidden>Select Room Category</option>
                      <option value="economy">Economy Room</option>
                      <option value="luxury">Luxury Room</option>
                      <option value="deluxe">Deluxe Rooms</option>
                      <option value="royal">Royal Rooms</option>
                    </select>
                  </div>
                  <div className="col-md-5 form-group">
                    <label htmlFor="text">Title</label>
                    <input type="text" id="text" name="title" value={roomupdate.title} onChange={handleInputChange} className="form-control" required/>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-5 form-group">
                    <label htmlFor="email">Image Url</label>
                    <input type="url" id="url" name="image" value={roomupdate.image} onChange={handleInputChange} className="form-control" required/>
                  </div>
                  <div className="col-md-5 form-group">
                    <label htmlFor="room">Guests</label>
                    <select id="room" name="guest" value={roomupdate.guest} onChange={handleInputChange} className="form-control">
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
                  <div className="col-md-10 form-group">
                    <label htmlFor="message">Description</label>
                    <textarea name="description"
                      id="message"
                      className="form-control "
                      value={roomupdate.description}
                      onChange={handleInputChange}
                      rows={3}
                      style={{ resize: "none" }}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-5 form-group">
                    <label htmlFor="email">Sqft</label>
                    <input type="number"
                      id="number"
                      name="sqft"
                      value={roomupdate.sqft}
                      onChange={handleInputChange}
                      className="form-control "
                    />
                  </div>
                  <div className="col-md-5 form-group">
                    <label htmlFor="email">Price</label>
                    <input type="number"
                      id="url"
                      name="price"
                      value={roomupdate.price}
                      onChange={handleInputChange}
                      className="form-control "
                    />
                  </div>
                </div>
              </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary mb-2 rounded" data-dismiss="modal">Close</button>
          <button type="button" onClick={onupdate} className="btn btn-primary mb-2 rounded">Save changes</button>
        </div>
      </div>
    </div>
  </div>
        {/* Modal for view*/}
  <div className="modal fade  bd-example-modal-lg" id="Modalview" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Room View Form</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
                      {selectedRoom && (
                        <div className="table-responsive">
                          <table className="table table-image align-items-center">
                            <thead>
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Image</th>
                                <th scope="col">CATEGORY</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">GUEST</th>
                                <th scope="col">SQFT</th>
                                <th scope="col">PRICE</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* Destructure the selectedRoom data */}
                              <tr key={selectedRoom.id}>
                                <th scope="row">{selectedRoom.id}</th>
                                <td className="w-25">
                                  <img
                                    src={selectedRoom.image}
                                    className="img-fluid img-thumbnail"
                                    alt="room"
                                  />
                                </td>
                                <td>{selectedRoom.category}</td>
                                <td>{selectedRoom.title}</td>
                                <td>{selectedRoom.description}</td>
                                <td>{selectedRoom.guest}</td>
                                <td>{selectedRoom.sqft}</td>
                                <td>{selectedRoom.price}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary mb-2 rounded" data-dismiss="modal">Close</button>
          {/* <button type="button" className="btn btn-primary mb-2 rounded">Save changes</button> */}
        </div>
      </div>
    </div>
  </div>
      </div> 
    </div>
  </div>
</div>

    </>
  );
}

export default AroomsManage;

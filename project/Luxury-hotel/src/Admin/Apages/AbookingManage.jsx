import React, { useEffect, useState } from "react";
import Aheader from "../Acomman/Aheader";
import axios from "axios";

function AbookingManage() {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const getdata = async () => {
      try {
        const res1 = await axios.get("http://localhost:3000/users");
        const res2 = await axios.get("http://localhost:3000/booking");

        setUsers(res1.data);
        setBookings(res2.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    
    getdata();
  }, []);

  return (
    <>
      <Aheader />
      <div className="container">
        <h2 className="text-center py-4 t-heading">Room Booking Manage</h2>
        <div className="row">
          <div className="col-12">
             {/* Adding Internal CSS */}
             <style>{`
              .img-thumbnail {
                border-radius: 50%;
                width: 50px;
                height: 50px;
              }

              table th, table td {
                white-space: nowrap;
            `}</style>
            <div className="table-responsive">
              <table className="table table-image align-items-center">
                <thead>
                  <tr>
                    <th scope="col">U_ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">ROOM</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">ARRIVAL DATE</th>
                    <th scope="col">DEPARTURE DATE</th>
                    <th scope="col">GUEST</th>
                    <th scope="col">DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    // Find the booking for the user by matching email
                    const userBookings = bookings.filter(
                      (booking) => booking.email === user.email
                    );
                    return userBookings.map((booking) => (
                      <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td className="w-25">
                          <img
                            src={user.img}
                            className="img-fluid"
                            alt="user"
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{booking.room}</td>
                        <td>{booking.title}</td>
                        <td>{booking.price}</td>
                        <td>{booking.arrival_date}</td>
                        <td>{booking.departure_date}</td>
                        <td>{booking.guest}</td>
                        <td>{booking.description}</td>
                      </tr>
                    ));
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AbookingManage;

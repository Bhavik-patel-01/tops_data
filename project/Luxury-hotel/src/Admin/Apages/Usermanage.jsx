import React, { useEffect, useState } from "react";
import Aheader from "../Acomman/Aheader";
import axios from "axios";
import { toast } from "react-toastify";

function Usermanage() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      console.log(res.data);
      setuser(res.data);
    } catch (error) {
      console.log("error data", error);
    }
  };

  //view data
  const [selectedUser, setSelectedUser] = useState(null);
  const viewdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setSelectedUser(res.data);
    console.log(res.data);
  };

  // delete data
  const deletedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    console.log(res.data);
    getdata();
  };

  //update status only
  const statuhandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    const currentstatus = res.data.status;

    try {
      if (currentstatus === "block") {
        const res = await axios.patch(`http://localhost:3000/users/${id}`, {
          status: "unblock",
        });
        console.log(res.data);
        {
          if (res.status === 200) {
            toast.success("unblock successfully");
            getdata();
          }
        }
      } else if (currentstatus === "unblock") {
        const res = await axios.patch(`http://localhost:3000/users/${id}`, {
          status: "block",
        });

        {
          if (res.status === 200) {
            toast.success("block successfully");
            getdata();
          }
        }
      }
    } catch (error) {
      toast.error("errorr msg");
    }
  };

  return (
    <>
      <Aheader />
      <div className="container">
        <h2 className="text-center py-4 t-heading">Users Manage</h2>
        <div className="row">
          <div className="col-12">
            {/* Wrapping table in a responsive wrapper */}
            <div className="table-responsive">
              <table className="table table-image align-items-center">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {user &&
                    user.map((users, index) => {
                      return (
                        <tr>
                          <th scope="row">{users.id}</th>
                          <td className="w-25">
                            <img
                              src={users.img}
                              className="img-fluid img-thumbnail"
                              alt="room"
                            />
                          </td>
                          <td>{users.name}</td>
                          <td>{users.email}</td>
                          <td>{users.phone}</td>
                          <td>{users.status}</td>
                          <td>
                            <div className="btn-group-vertical w-100">
                              <button
                                className="btn btn-success btn-sm btn-block mb-2 rounded"
                                onClick={() => statuhandle(users.id)}
                              >
                                {users.status}
                              </button>
                              <button
                                type="button"
                                onClick={() => viewdata(users.id)}
                                className="btn btn-info btn-sm btn-block mb-2 rounded"
                                data-toggle="modal"
                                data-target="#Modalview"
                              >
                                VIEW
                              </button>
                              <button
                                type="button"
                                onClick={() => deletedata(users.id)}
                                className="btn btn-danger btn-sm btn-block mb-2 rounded"
                              >
                                DELETE
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {/* Modal for view*/}
              <div
                className="modal fade  bd-example-modal-lg"
                id="Modalview"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-lg modal-dialog-centered "
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Room View Form
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {selectedUser && (
                        <div className="table-responsive" >
                          <table className="table table-image align-items-center">
                          
                            <thead>
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Image</th>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">STATUS</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* Destructure the selectedUser data */}
                              <tr key={selectedUser.id}>
                                <th scope="row">{selectedUser.id}</th>
                                <td className="w-25">
                                  <img
                                    src={selectedUser.img}
                                    className="img-fluid img-thumbnail"
                                    alt="room"
                                  />
                                </td>
                                <td>{selectedUser.name}</td>
                                <td>{selectedUser.email}</td>
                                <td>{selectedUser.phone}</td>
                                <td>{selectedUser.status}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 rounded"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
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

export default Usermanage;

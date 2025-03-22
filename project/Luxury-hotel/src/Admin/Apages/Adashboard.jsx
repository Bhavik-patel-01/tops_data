import React from "react";
import Aheader from "../Acomman/Aheader";
import { Link } from "react-router-dom";

function Adashboard() {
  return (
    <>
      <Aheader />
  <div className="container py-5">
    {/* Page Header */}
    <div className="card mb-4">
      <div className="card-header text-center bg-dark">
        <h2 className="text-white">Admin Dashboard</h2>
      </div>
      <div className="card-body">
        <p className="text-center">
          Welcome to the Admin Dashboard. Here you can manage users, view
          analytics, and oversee application settings.
        </p>
      </div>
    </div>
    {/* Main Content */}
    <div className="row d-flex justify-content-center">
      {/* User Management Section */}
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-header bg-dark text-white text-center">
            <h5 className="text-white">User Manage</h5>
          </div>
          <div className="card-body text-center">
            <i className="fas fa-users fa-3x mb-3 text-dark" />
            <p>Manage user accounts, roles, and permissions.</p>
            <Link to="/usermanage" className="btn btn-dark btn-sm p-2 rounded">
                  Manage Users
                </Link>
          </div>
        </div>
      </div>
      {/* Room Section */}
      <div className="col-md-4 mb-4">
        <div className="card">
        <div className="card-header bg-dark text-white text-center">
            <h5 className="text-white">Room Manage</h5>
          </div>
          <div className="card-body text-center">
            <i className="fas fa-bed fa-3x mb-3 text-dark" />
            <p>Manage rooms, add details, and room booking.</p>
            <Link to="/AroomsManage" className="btn btn-dark btn-sm p-2 rounded">
                  Manage Rooms
                </Link>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Section */}
    <div className="card mt-4">
      <div className="card-body text-center">
        <p className="mb-0">
          © 2025 Your Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>


    </>
  );
}

export default Adashboard;

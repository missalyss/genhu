import React from "react";
import AdminNav from "./AdminNav";
import "./AdminHome.css";
// import { AdminTitle } from './Styles';

const AdminHome = () => {
  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <div className="title">GenHu Admin Home</div>

        <div className='papa'>

          <div className="button-col-one">
            <div className="row-one">
              <button>Stats Page</button>
              <button>Employees Page</button>
              <button>Events Page</button>
            </div>
        </div>
          <div className="button-col">
            <div className="row-one">
              <button>Orphanages Page</button>
              <button>Calendar Page</button>
              <button>Drop-Ins Page</button>
              <button>Drop-Ins Page</button>
              <button>Drop-Ins Page</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

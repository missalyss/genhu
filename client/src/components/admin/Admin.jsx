import React from "react";
import AdminNav from "./AdminNav";
import "./AdminHome.css";
import { AdminTitle } from './Styles';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <AdminTitle >GenHu Admin Home</AdminTitle>

        <div className='papa'>

          <div className="button-col-one">
            <div className="row-one">
              <Link to='/datastats'>
              <button>Stats Page</button>
              </Link>
              <Link to='/admin_employee'>
              <button>Employees Page</button>
              </Link>
              <button>Events Page</button>
            </div>
        </div>
          <div className="button-col">
            <div className="row-one">
            <Link to='/admin_homes'>
              <button>Homes</button>
              </Link>
              <button>Calendar Page</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

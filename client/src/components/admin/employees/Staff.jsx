import React, { useState } from "react";
import { AdminSubTitle, AdminData } from "../Styles";
import EmployeeForm from "./EmployeeForm";
import './Employees.css'
// import { Trash } from '../../../assets/Icons/TrashIcon.png'

const Staff = ({ first_name, last_name, bio, title, email, phone, other, role, image, editEmployee, id, deleteEmployee }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div>
      <div>
        <AdminSubTitle><h3>Name: </h3><AdminData><h3> {first_name} {last_name} </h3> </AdminData></AdminSubTitle>
      </div>
      <div>
        <AdminSubTitle><h3>Title: </h3><AdminData><h3>{title}</h3></AdminData></AdminSubTitle>
      </div>
      <div>
        <AdminSubTitle><h3>Role: </h3><AdminData><h3>{role}</h3></AdminData></AdminSubTitle>
      </div>
      <br />
      <div>
        <img className='employee_photo' src={image} />
      </div>
      <div>
        <button onClick={editToggle}>Edit</button>
        <button
          style={{ backgroundColor: "#863A2A" }}
          onClick={() => deleteEmployee(id)}
        >
          Delete
        </button>
      </div>
      {toggleEdit ? (
        <EmployeeForm
          editEmployee={editEmployee}
          editToggle={editToggle}
          firstName={first_name}
          lastName={last_name}
          email={email}
          phone={phone}
          role={role}
          title={title}
          bio={bio}
          image={image}
          other={other}
          id={id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Staff;

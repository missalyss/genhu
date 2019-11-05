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
        <AdminSubTitle>Name: <AdminData> {first_name} {last_name}  </AdminData></AdminSubTitle>
      </div>
      <div>
        <AdminSubTitle>Title: <AdminData>{title}</AdminData></AdminSubTitle>
      </div>
      <div>
        <AdminSubTitle>Role: <AdminData>{role}</AdminData></AdminSubTitle>
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

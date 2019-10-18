import React, { useState } from "react";
import { AdminSubTitle, AdminData } from "../Styles";
import EmployeeForm from "./EmployeeForm";
// import { Trash } from '../../../assets/Icons/TrashIcon.png'

const Volunteers = ({ first_name, last_name, bio, title, email, phone, other, role, image, editEmployee, id, deleteEmployee }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div>
      <div>
        <AdminSubTitle>Volunteers First Name: </AdminSubTitle>
        <AdminData> {first_name}</AdminData>
      </div>
      <div>
        <AdminSubTitle> Volunteers Last Name: </AdminSubTitle>
        <AdminData> {last_name}</AdminData>
      </div>
      <div>
        <AdminSubTitle> Volunteers Bio: </AdminSubTitle>
        <AdminData> {bio}</AdminData>
      </div>
      <div>
        <AdminSubTitle> Volunteers Title: </AdminSubTitle>
        <AdminData> {title}</AdminData>
      </div>
      <div>
        <AdminSubTitle> Email: </AdminSubTitle>
        <AdminData> {email}</AdminData>
      </div>
      <div>
        <AdminSubTitle>Phone: </AdminSubTitle>
        <AdminData> {phone}</AdminData>
      </div>
      <div>
        <AdminSubTitle> Other: </AdminSubTitle>
        <AdminData> {other}</AdminData>
      </div>
      <div>
        <AdminSubTitle> Volunteers Role: </AdminSubTitle>
        <AdminData> {role}</AdminData>
      </div>
      <div>
        <AdminSubTitle> Volunteers Image: </AdminSubTitle>
        <AdminData> {image}</AdminData>
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

export default Volunteers;
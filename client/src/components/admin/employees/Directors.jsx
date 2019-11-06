import React, { useState } from "react";
import { AdminSubTitle, AdminData } from "../Styles";
import EmployeeForm from "./EmployeeForm";
const defaultImage = 'http://www.tolmayenterprises.com/images/Person.png';
// import { Trash } from '../../../assets/Icons/TrashIcon.png'

const Directors = ({ first_name, last_name, bio, title, email, phone, other, role, image, editEmployee, id, deleteEmployee }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div>
      <div>
        <AdminSubTitle>Name: <AdminData> {first_name} {last_name}</AdminData></AdminSubTitle>
      </div>
      {/* <div>
        <AdminSubTitle> Directors Last Name: </AdminSubTitle>
        <AdminData> {last_name}</AdminData>
      </div> */}
      {/* <div>
        <AdminSubTitle> Directors Bio: </AdminSubTitle>
        <AdminData> {bio}</AdminData>
      </div> */}
      <div>
        <AdminSubTitle>Title: <AdminData> {title}</AdminData> </AdminSubTitle>
      </div>
      {/* <div>
        <AdminSubTitle> Email: </AdminSubTitle>
        <AdminData> {email}</AdminData>
      </div> */}
      {/* <div>
        <AdminSubTitle>Phone: </AdminSubTitle>
        <AdminData> {phone}</AdminData>
      </div> */}
      {/* <div>
        <AdminSubTitle> Other: </AdminSubTitle>
        <AdminData> {other}</AdminData>
      </div> */}
      <div>
        <AdminSubTitle>Role: <AdminData>{role} </AdminData></AdminSubTitle>
      </div>
      <br />
      <div>
        <img className='employee_photo' src={image || defaultImage} />
      </div>
      {/* <div>
        <AdminSubTitle> Directors Image: </AdminSubTitle>
        <AdminData> {image}</AdminData>
      </div> */}
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

export default Directors;

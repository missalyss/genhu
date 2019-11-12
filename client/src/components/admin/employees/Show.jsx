import React, { useState } from "react";
import { AdminSubTitle,  } from "../Styles";
import EmployeeForm from "./EmployeeForm";
import EmployeeModal from './EmployeeModal';
const defaultImage = 'http://www.tolmayenterprises.com/images/Person.png';
// import { Trash } from '../../../assets/Icons/TrashIcon.png'

const Show = ({ first_name, last_name, bio, title, email, phone, other, role, image, editEmployee, id, deleteEmployee }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div>
      <div>
        <AdminSubTitle>Name: {first_name} {last_name} </AdminSubTitle>
      </div>
        <div>
        <AdminSubTitle>Title: {title}</AdminSubTitle>
      </div>
        <div>
        <AdminSubTitle>Role: {role}</AdminSubTitle>
      </div>
      <br />
      <div>
        <img className='employee_photo' src={image || defaultImage} />
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
        <EmployeeModal
          show={editToggle}
          onHide={editToggle}
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

export default Show;

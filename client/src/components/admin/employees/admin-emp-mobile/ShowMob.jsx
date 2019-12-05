import React, { useState } from "react";
import { AdminSubTitleMob,  } from "../../Styles";
import EmployeeFormMob from "./EmployeeFormMob";
import EmployeeModalMob from './EmployeeModalMob';
const defaultImage = 'http://www.tolmayenterprises.com/images/Person.png';
// import { Trash } from '../../../assets/Icons/TrashIcon.png'

const ShowMob = ({ first_name, last_name, bio, title, email, phone, other, role, image, editEmployee, id, deleteEmployee }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div>
      <div>
        <AdminSubTitleMob>Name: {first_name} {last_name} </AdminSubTitleMob>
      </div>
        <div>
        <AdminSubTitleMob>Title: {title}</AdminSubTitleMob>
      </div>
        <div>
        <AdminSubTitleMob>Role: {role}</AdminSubTitleMob>
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
        <EmployeeModalMob
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

export default ShowMob;

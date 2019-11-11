import React, { useState } from "react";
import { AdminSubTitle, AdminData } from "../../Styles";
import HomeForm from "../AdminHomeForm";
import HomeModal from './HomeModal';

const Center = ({ show, onHide, editHome, id, deleteHome, addHome, ...orest }) => {
  const [toggleModal, setToggleModal] = useState(false);

  // const editToggle = () => setToggleEdit(!toggleEdit);

  const toggle = () => setToggleModal(!toggleModal);
   

  return (
    <div className="single-stat-home" style={{width: '10em'}}>
      <div className="stat-data">
        <AdminSubTitle>Center Name: </AdminSubTitle>
        <AdminData> {orest.name}</AdminData>
      </div>
      <div className="button-cont-stat">
        <button onClick={toggle}>Edit</button>
        <button
          style={{ backgroundColor: "#863A2A" }}
          onClick={() => deleteHome(id)}
        >
          Delete
        </button>
      </div>
      {toggleModal ? (
        <HomeModal
          addHome={addHome}
          show={show} 
          onHide={ toggle } 
          toggleShow = { toggle }
          editHome={editHome}
          editToggle={toggle}
          {...orest}          
          id={id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Center;

import React, { useState } from "react";
import { AdminSubTitle, AdminData } from "../../Styles";
// import AdminHomeFormMob from "./AdminHomeFormMob";
import './HomesMob.css';
import HomeModal from './HomeModalMob';


const OrphanageMob = ({ show, onHide, editHome, id, deleteHome, ...orest }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggle = () => setToggleModal(!toggleModal);

  return (
   
    <div className="single-stat-home">
      <div className="stat-data">
        <AdminSubTitle>Orphanage Name: </AdminSubTitle>
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

export default OrphanageMob;

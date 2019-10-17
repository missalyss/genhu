import React, { useState } from "react";
import { AdminSubTitle, AdminData } from "../../Styles";
import HomeForm from "../HomeForm";

const Orphanage = ({ editHome, id, deleteHome, ...orest }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div className="single-stat">
      <div className="stat-data">
        <AdminSubTitle>Orphanage Name: </AdminSubTitle>
        <AdminData> {orest.name}</AdminData>
      </div>
      <div className="stat-data">
        <AdminSubTitle> Orphanage Role: </AdminSubTitle>
        <AdminData> {orest.role}</AdminData>
      </div>
      <div className="button-cont-stat">
        <button onClick={editToggle}>Edit</button>
        <button
          style={{ backgroundColor: "#863A2A" }}
          onClick={() => deleteHome(id)}
        >
          Delete
        </button>
      </div>
      {toggleEdit ? (
        <HomeForm
          editHome={editHome}
          editToggle={editToggle}
          {...orest}
          id={id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Orphanage;

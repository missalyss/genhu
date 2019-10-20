import React, { useState } from "react";
import { AdminSubTitle, AdminData } from "../../Styles";
import HomeForm from "../AdminHomeForm";

const Center = ({ editHome, id, deleteHome, ...orest }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div className="single-stat">
      <div className="stat-data">
        <AdminSubTitle>Center Name: </AdminSubTitle>
        <AdminData> {orest.name}</AdminData>
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

export default Center;

import React, { useState } from "react";
import { AdminSubTitle, AdminData } from "../../Styles";
import StatForm from "./AdminStatFormMob";
// import { Trash } from '../../../assets/Icons/TrashIcon.png'

const StatMob = ({ name, value, editStat, id, priority, deleteStat }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div className="single-stat-mob">
      <div className="stat-data-mob">
        <AdminSubTitle>Stat Name: </AdminSubTitle>
        <AdminData> {name}</AdminData>
      </div>
      <div className="stat-data-mob">
        <AdminSubTitle> Stat Value: </AdminSubTitle>
        <AdminData> {value}</AdminData>
      </div>
      <div className="button-cont-stat-mob">
        <button onClick={editToggle}>Edit</button>
        <button
          style={{ backgroundColor: "#863A2A" }}
          onClick={() => deleteStat(id)}
        >
          Delete
        </button>
      </div>
      {toggleEdit ? (
        <StatForm
          editStat={editStat}
          editToggle={editToggle}
          statName={name}
          statValue={value}
          priority={priority}
          id={id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default StatMob;

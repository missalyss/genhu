import React from 'react';
import { AdminSubTitle } from '../Styles';
import StatForm from './StatForm';

const Stat = ({ name, value, toggleEdit, editStat, editing }) => (
  <div>
    <AdminSubTitle>
    Stat Name: {name}
    </AdminSubTitle>
    <AdminSubTitle>
    Stat Value: {value}
    </AdminSubTitle>
    <button onClick={toggleEdit}>Edit</button>
    { editing ? 
    <StatForm editStat={editStat}/> :
    <div>Edit not toggled</div>
    }
  </div>  
)

export default Stat;
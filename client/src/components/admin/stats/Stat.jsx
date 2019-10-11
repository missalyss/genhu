import React from 'react';
import { AdminSubTitle } from '../Styles';

const Stat = ( props ) => (
  <div>
    <AdminSubTitle>
    Stat Name: {props.name}
    </AdminSubTitle>
    <AdminSubTitle>
    Stat Value: {props.value}
    </AdminSubTitle>
  </div>  
)

export default Stat;
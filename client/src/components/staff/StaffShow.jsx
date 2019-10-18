import React, { useState } from 'react';
import StaffModal from './StaffModal';





const StaffShow = ({ first_name, last_name, title }) => {

  const [ showModal, setShowModal ] = useState( false )

  const toggleShow = () => {
    setShowModal(!showModal)
  }

  return(

    <div>
        <div className= 'staff-box' onClick = { toggleShow }>
          <div>{first_name} {last_name}</div>
          <div>{title}</div>
        </div>
        {showModal ?
          <StaffModal toggleShow = { toggleShow }/> : <div> </div>
        }
    </div>
  )
}

export default StaffShow;
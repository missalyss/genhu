import React, { useState } from 'react';
import StaffModal from './StaffModal';





const DirectorShow = ({ first_name, last_name, title }) => {

  const [ showModal, setShowModal ] = useState( false )

  const toggleShow = () => {
    setShowModal(!showModal)
  }

  return(

    <div>
        <div className= 'staff-box' onClick = { toggleShow }>
          <div className='staff-name'><h1>{first_name} {last_name}</h1></div>
          <div className='staff-title'><h3>{title}</h3></div>
        </div>
        {showModal ?
          <StaffModal toggleShow = { toggleShow }/> : <div> </div>
        }
    </div>
  )
}

export default DirectorShow;
import React, { useState } from 'react';
import StaffModal from './StaffModal';





const VolunteerShow = ({ first_name, last_name, title, id, bio, email, phone, other, role }) => {

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
          <StaffModal 
          firstName={first_name} 
          lastName={last_name}
          bio={bio}
          title={title}
          show={showModal} 
          staffId={id} 
          onHide={ toggleShow } 
          toggleShow = { toggleShow }/> : <div> </div>
        }
    </div>
  )
}

export default VolunteerShow;
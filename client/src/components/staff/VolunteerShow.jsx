import React, { useState } from 'react';
import StaffModal from './StaffModal';

const VolunteerShow = ({ first_name, last_name, title, id, bio, email, phone, other, role, image }) => {

  const [ showModal, setShowModal ] = useState( false )

  const toggleShow = () => {
    setShowModal(!showModal)
  }

  return(

    <div>
        <div className= 'staff-box' onClick = { toggleShow } style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} >
          <div className='staff-name'><h3>{first_name} {last_name}</h3></div>
          <div className='staff-title'><h4>{title}</h4></div>
        </div>
        {showModal ?
          <StaffModal 
          firstName={first_name} 
          lastName={last_name}
          bio={bio}
          title={title}
          email={email}
          show={showModal} 
          staffId={id} 
          onHide={ toggleShow } 
          toggleShow = { toggleShow }/> : <div> </div>
        }
    </div>
  )
}

export default VolunteerShow;
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './StaffModal.css';

// const StaffModal = ({toggleShow, staffId}) => {
  class StaffModal extends React.Component {
    constructor(props){
      super(props);
    }
    

    render() {
      return (
        <div >
           <Modal 
          className = 'modal-container'
          center
          autoFocus
            {...this.props}
            size='lg'
          >
            <Modal.Header className = 'modal-header'>
              <Modal.Title >{this.props.firstName} {this.props.lastName}</Modal.Title>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='modal-body-cont'>
              {this.props.bio}
              
              </div>
              </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' className='modal-button' onClick={this.props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
  }
}


export default StaffModal;
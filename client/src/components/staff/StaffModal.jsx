import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// const StaffModal = ({toggleShow, staffId}) => {
  class StaffModal extends React.Component {
    constructor(props){
      super(props);
    }
    

    render() {
      return (
        // <div style={{zIndex:5000, marginTop: '10em'}}>
          <Modal 
          
          center
          autoFocus
            {...this.props}
            size='lg'
          >
            <Modal.Header>
              <Modal.Title >{this.props.firstName} {this.props.lastName}</Modal.Title>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='modal-body-cont'>
              {this.props.bio}
              
              </div>
              </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        // </div>
      );
  }
}


export default StaffModal;
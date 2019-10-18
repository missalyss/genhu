import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class StaffModal extends React.Component {
  state = { toggleForm: false }

  render () {

  return (
    <div>
      <Modal>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.toggleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
}


export default StaffModal;
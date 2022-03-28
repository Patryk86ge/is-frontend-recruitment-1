import React from 'react';
import {Button, Modal} from "react-bootstrap";

const DeleteModal = ({show,onHide,handleClose,deleteUser,userId}) => {

  return (
    <Modal
      show={show}
      onHide={onHide}//handleClose
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() =>  handleClose() }
          variant="secondary">Close</Button>
        <Button onClick={() => {
          deleteUser(userId);
          handleClose()
        }} variant="danger">Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
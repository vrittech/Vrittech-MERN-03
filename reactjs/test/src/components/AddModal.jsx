import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddModal = ({
  show,
  handleAddModalClose,
  handleAddChange,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onHide={handleAddModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="form-control"
          placeholder="Product name"
          name="title"
          onChange={handleAddChange}
        />
        <input
          className="form-control mt-3"
          placeholder="Product description"
          name="description"
          onChange={handleAddChange}
        />
        <input
          className="form-control mt-3"
          placeholder="Product price"
          name="price"
          onChange={handleAddChange}
        />
        <input
          className="form-control mt-3"
          placeholder="Image url"
          name="thumbnail"
          onChange={handleAddChange}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleAddModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;

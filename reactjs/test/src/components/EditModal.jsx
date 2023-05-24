import React from "react";
import { Button, Modal } from "react-bootstrap";

const EditModal = ({
  show,
  handleClose,
  product,
  handleChange,
  handleEditChanges,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="form-control"
          placeholder="Product name"
          value={product.title}
          name="title"
          // onChange={handleTitleChange}
          onChange={handleChange}
        />
        <input
          className="form-control mt-3"
          placeholder="Product description"
          value={product.description}
          name="description"
          // onChange={handleDescriptionChange}
          onChange={handleChange}
        />
        <input
          className="form-control mt-3"
          placeholder="Image url"
          value={product.thumbnail}
          name="thumbnail"
          // onChange={handleThumbnailChange}
          onChange={handleChange}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;

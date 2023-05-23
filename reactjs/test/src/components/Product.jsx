import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const Product = ({ prod, handleDeleteProduct, handleEditProduct }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" className="h-50" src={prod.thumbnail} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
          {prod.description.length > 25
            ? prod.description.slice(0, 25) + "..."
            : prod.description}
        </Card.Text>
        <Button variant="primary" onClick={handleEditProduct}>
          Edit product
        </Button>
        <Button
          variant="danger"
          className="ms-1 "
          onClick={(e) => handleDeleteProduct(e, prod.id)}
        >
          Delete product
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;

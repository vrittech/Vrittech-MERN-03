import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductLister = ({ products }) => {
  return (
    <>
      {products.map((prod) => {
        return (
          <Card key={prod.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.images[0]} />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>{prod.description}</Card.Text>
              <Button variant="primary">View product</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default ProductLister;

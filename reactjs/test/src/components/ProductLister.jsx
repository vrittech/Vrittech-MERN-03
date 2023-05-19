import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const ProductLister = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {products.map((prod) => {
        return (
          <Card key={prod.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-50" src={prod.thumbnail} />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>
                {prod.description.length > 25
                  ? prod.description.slice(0, 25) + "..."
                  : prod.description}
              </Card.Text>
              <Button variant="primary">View product</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductLister;

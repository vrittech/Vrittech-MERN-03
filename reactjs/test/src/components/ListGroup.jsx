import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

const ListGroupComp = ({ student }) => {
  return <ListGroup.Item key={student}>{student}</ListGroup.Item>;
};

export default ListGroupComp;

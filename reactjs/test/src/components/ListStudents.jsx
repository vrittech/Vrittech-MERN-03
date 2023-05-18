import ListGroupComp from "./ListGroup";
import ListGroup from "react-bootstrap/ListGroup";

const ListStudents = (props) => {
  return (
    <ListGroup>
      {props.students.map((student) => {
        return <ListGroupComp key={student} student={student} />;
      })}
    </ListGroup>
  );
};

export default ListStudents;

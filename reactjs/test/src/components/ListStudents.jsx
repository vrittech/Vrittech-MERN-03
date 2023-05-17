const ListStudents = (props) => {
  return (
    <ul>
      <li>{props.students[0]}</li>
      <li>{props.students[1]}</li>
    </ul>
  );
};

export default ListStudents;

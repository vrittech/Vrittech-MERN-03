//normal function component
// function App {
//   return (
//     <h1>Hello react from vrit</h1>
//   )
// }

import ButtonDisplay from "./components/ButtonDisplay";
import ListStudents from "./components/ListStudents";

// component name - PascalCase


//arrow functional component
//JSX - Javascript XML
const AppComponent = () => {

  const test = ['Samrat', 'Roshan'];
  //props data passing from parent to child componet
  return (
    <>
      <h1>Hello react from vrit</h1>
      {/* tags */}
      <ButtonDisplay value="Register" a={test} />
      <ButtonDisplay value="Submit" />
      <ListStudents students={test} />
    </>
  )
}

export default AppComponent;
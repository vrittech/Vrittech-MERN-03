//normal function component
// function App {
//   return (
//     <h1>Hello react from vrit</h1>
//   )
// }
import React from 'react'

import ListStudents from "./components/ListStudents";
import ProductLister from "./components/ProductLister";
import { Routes, Route } from "react-router-dom";
import { PagenotFound } from "./pages/PagenotFound";
import Counter from './components/Counter';
import { editHandler } from './helpers/edit.service';
import axios from 'axios';
import TabComponentExample from './pages/TabComponentExample';

// component name - PascalCase


//arrow functional component
//JSX - Javascript XML
const AppComponent = () => {


  const students = ['Samrat', 'Roshan', 'raaz', 'roshan'];


  //component side effect -> fetch data -> axios ->


  // const handleSubmit = () => {
  //   console.log('clicked')
  // }
  // parent - child
  //props data passing from parent to child component
  // const testHandler = () => {
  //   editHandler(setProds);
  // }

  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<ProductLister />} />
        <Route path="/students" element={<ListStudents students={students} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tabs" element={<TabComponentExample />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
      {/* </BrowserRouter> */}
      {/* <h1>Hello react from vrit</h1> */}
      {/* <ListStudents students={students} /> */}
      {/* tags */}
      {/* <ButtonDisplay value="Register" test={students} />
      <ButtonDisplay value="Submit" /> */}
      {/* <input onChange={handleChange}/> */}

      {/* <ProductLister products={products} /> */}

    </>
  )
}

export default AppComponent;
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  // useEffect

  const [newsFeed, setNewsFeed] = useState("Test");
  const [count, setCount] = useState(0);

  //props / state changes -> empty dependency array
  useEffect(() => {
    // console.log("news feed changed ");
    console.log("first load");
  }, []);

  const incrementCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  };

  const decrementCount = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  const resetCount = (e) => {
    e.preventDefault();
    setCount(0);
  };

  const changeNewsFeed = (e) => {
    e.preventDefault();
    setNewsFeed("kantipur");
  };

  return (
    <div>
      <h1>{count}</h1>
      <h1>{newsFeed}</h1>
      <Button onClick={incrementCount}>Increment</Button>
      <Button variant="secondary" onClick={decrementCount}>
        Decrement
      </Button>
      <Button variant="danger" onClick={resetCount}>
        Reset
      </Button>
      <Button variant="danger" onClick={changeNewsFeed}>
        Change Feed
      </Button>
    </div>
  );
};

export default Counter;

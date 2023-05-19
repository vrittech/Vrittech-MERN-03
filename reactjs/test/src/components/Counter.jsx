import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  // useEffect

  let c = Number(localStorage.getItem("count")) || 0;
  const [newsFeed, setNewsFeed] = useState("Test");
  const [count, setCount] = useState(c);

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

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={incrementCount}>Increment</Button>
      <Button variant="secondary" onClick={decrementCount}>
        Decrement
      </Button>
      <Button variant="danger" onClick={resetCount}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;

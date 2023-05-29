import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByNumber } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const count: number = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Card className="m-auto w-50">
      <Card.Title className="text-center">{count}</Card.Title>
      <Card.Body>
        <input
          className="form-control"
          type="number"
          placeholder="Increment by number here"
          onChange={(e: any) => setNumber(Number(e.target.value))}
        />
      </Card.Body>
      <Card.Footer>
        <Button className="ms-2" onClick={(e) => dispatch(increment())}>
          Increment
        </Button>
        <Button
          variant="secondary"
          className="ms-2"
          onClick={(e) => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          variant="danger"
          className="ms-2"
          onClick={(e) => dispatch(reset())}
        >
          Reset
        </Button>
        <Button
          className="mt-2 ms-5"
          onClick={(e) => dispatch(incrementByNumber(Number(number)))}
        >
          Increment by input number
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Counter;

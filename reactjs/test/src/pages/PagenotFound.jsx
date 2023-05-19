import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const PagenotFound = ({ products }) => {
  // SSR - search crawlers
  const navigate = useNavigate();

  const redirectHandler = (e) => {
    e.preventDefault();
    //history.push('/);
    navigate("/");
  };
  return (
    <>
      <h1 className="text-center dsasd">Page not found</h1>
      <Button variant="primary" onClick={redirectHandler}>
        Redirect to dashboard
      </Button>
      {/* <Navigate to={"/"} /> */}
    </>
  );
};

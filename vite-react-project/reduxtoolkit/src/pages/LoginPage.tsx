import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = { email, password };
    axios
      .post("http://localhost:8080/api/v1/login", data)
      .then((values: any) => {
        console.log(values.data);
        if (values.data.success) {
          dispatch(login(true));
          navigate("/dashboard");
        }
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoginPage;

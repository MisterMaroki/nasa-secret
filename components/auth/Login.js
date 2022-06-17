import React, { useState } from "react";
import { TextField } from "@mui/material";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleChange = (e, label) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [label]: e.target.value,
      };
    });
  };

  return (
    <div className="form">
      <TextField
        fullWidth
        value={inputs.email}
        label="email"
        type="email"
        onChange={(e) => handleChange(e, "email")}
      />

      <TextField
        fullWidth
        value={inputs.password}
        label="password"
        type="password"
        onChange={(e) => handleChange(e, "password")}
      />
    </div>
  );
};

export default Login;

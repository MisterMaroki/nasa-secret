import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TextField, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredential) => {
        console.log(
          "🚀 ~ file: SignUp.js ~ line 30 ~ .then ~ userCredential",
          userCredential
        );
        // Signed in
        const user = userCredential.user;
        console.log("🚀 ~ file: SignUp.js ~ line 33 ~ .then ~ user", user);
        toast.success("Signed in successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(error.message);
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
      <Button variant="contained" onClick={handleSubmit}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;

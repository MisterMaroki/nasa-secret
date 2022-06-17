import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TextField, Button } from "@mui/material";
import { auth } from "../../firebase";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const handleChange = (e, label) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [label]: e.target.value,
      };
    });
  };

  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.email === inputs.password) {
      toast.error("Email and password can't match.");
      return;
    }
    if (inputs.password !== inputs.passwordCheck) {
      toast.error("Passwords must match.");
      return;
    }

    createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
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

      <TextField
        fullWidth
        value={inputs.passwordCheck}
        label="confirm password"
        type="password"
        onChange={(e) => handleChange(e, "passwordCheck")}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;

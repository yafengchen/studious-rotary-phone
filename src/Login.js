import React, { useState } from "react";
import app from "./base";

const Login = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    async function onRegister() {
      await app
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => console.log(error));
      history.push("/");
    }
    onRegister();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

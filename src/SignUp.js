import React, { useState } from "react";
import app, { db } from "./base";

const SignUp = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    async function onRegister() {
      await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((resp) => {
          db.collection("users").doc(resp.user.uid).set({
            firstName: firstName,
            lastName: lastName,
          });
        })
        .catch((error) => console.log(error));
      history.push("/");
    }
    onRegister();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

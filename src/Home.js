import React, { useState, useContext, useEffect } from "react";
import app, { db } from "./base";
import { AuthContext } from "./Auth";
import { Redirect } from "react-router-dom";

function Home({ history }) {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  console.log(currentUser);

  useEffect(() => {
    if (currentUser) {
      let docRef = db.collection("users").doc(currentUser.uid);
      docRef.get().then((doc) => {
        if (doc.exists) {
          setUsername(doc.data().firstName + " " + doc.data().lastName);
        }
      });
    }
  }, [currentUser]);

  const handleClick = () => {
    if (currentUser) {
      app.auth().signOut();
    } else {
      console.log("please login first");
      history.push("/login");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      {currentUser && <p>Welcome, {username}</p>}
      <button onClick={handleClick}>{currentUser ? "Log Out" : "Login"}</button>
    </div>
  );
}

export default Home;

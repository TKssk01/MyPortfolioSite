// src/App.js

import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./firebase"; // firebase.jsファイルをインポート

function App() {
  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, "user@example.com", "password")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in: ", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h1>My App</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;

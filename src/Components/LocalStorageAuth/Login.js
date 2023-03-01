import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Main.css";

const Login = () => {
  const inputRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // validate user's credentials
    if (username === "Jay" && password === "jay18") {
      // store user's information in local storage
      localStorage.setItem("user", JSON.stringify({ username }));
      // redirect to home page
      window.location.href = "/home";
    } 
    
    else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <div className="head">
        <h2 className="font-sm">Test Yourself</h2>
      </div>
      <div className="flex0">
        <div className="flex1">
          <h3>Instructions for taking the test:</h3>
          <br />
          <div className="instruct">
            <li>Maximum Time to answer all questions are 180min.</li>
            <li>+4/-1 Marking Scheme.</li>
            <li>Total number of questions are 10.</li>
            <li>Please Attempt All the Questions.</li>
          </div>
        </div>
        <div className="flex2">
          <br />
          <br />
          <h3>Complete the Information below:</h3>
          <br />
          <div className="usersection">
            <form id="form">
              <label htmlFor="">Username:</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
               <label htmlFor="">Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
          </div>

          <div className="Start">
            
            <button onClick={handleLogin}>Login and Start Test</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../Components/Main.css";

export default function Main() {
  const inputRef = useRef(null);
  return (
    <>
      <div className="head">
        <h2 className="font-sm">Quiz Application</h2>
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
              <input ref={inputRef} type="text" />
              <label htmlFor="">Password:</label>
              <input ref={inputRef} type="text" />
            </form>
          </div>

          <div className="Start">
            <Link to={"quiz"}>
              <button>Login and Start Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

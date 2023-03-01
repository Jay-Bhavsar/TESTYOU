import React from "react";
import withAuth from "../Components/LocalStorageAuth/withAuth";
import "../Components/LocalStorageAuth/Home.css";

export default function Result() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="head">
        <h2 className="font-sm">Test Yourself</h2>
      </div>

      <div>
        <h4>This is the Result of the Test , {user.username}!</h4>
      </div>

      <div className="result">
        <div className="res">
          <span>Total Questions</span>
          <span>Daily Tuition</span>
        </div>

        <div className="res">
          <span>Total Questions</span>
          <span>Daily Tuition</span>
        </div>

        <div className="res">
          <span>Total Questions</span>
          <span>Daily Tuition</span>
        </div>
      </div>
    </>
  );
}

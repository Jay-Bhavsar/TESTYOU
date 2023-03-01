import React from "react";
import Questions from "./Questions";

export default function Quiz() {
  // previous button event handler
  function onPrevious() {
    console.log("on previous click");
  }

  // next button event handler
  function onNext() {
    console.log("on next click");
  }

  return (
    <>
      <div className="container">
        <h1>Quiz application</h1>
      </div>

      <Questions/>

      <div className="grid">
        <button onClick={onPrevious}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Questions from "../Questions";
import withAuth from "./withAuth";
import "../LocalStorageAuth/Home.css";

import { MoveNextQuestion } from "../../hooks/FetchQuestion";
import { MovePrevQuestion } from "../../hooks/FetchQuestion";
import { PushAnswer } from "../../hooks/setResult";
/** redux store import */

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [check, setChecked] = useState(undefined);
  const { trace, queue } = useSelector((state) => state.questions);
  const state = useSelector((state) => state);
  const result = useSelector((state) => state.result.result);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(result);
  });

  // next button event handler
  function onNext() {
    /** update the trace value by 1  */
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());

      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }


    /**reset the value */
    setChecked(undefined)
  }

  // previous button event handler
  function onPrevious() {
    // console.log("on previous click");
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  /**Finished exam after the last question */

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"}></Navigate>;
  }

  return (
    <>
      <div className="head">
        <h2 className="font-sm">Test Yourself</h2>
      </div>

      <br /><br />
      <center>
        <div>
          <h4>All the very Best , {user.username}!</h4>
        </div>
      </center>
      <br /><br />

      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button onClick={onPrevious}>Previous</button>
        ) : (
          <div></div>
        )}
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

export default withAuth(Home);

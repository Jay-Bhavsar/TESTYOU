import React, { useEffect } from "react";
import withAuth from "../Components/LocalStorageAuth/withAuth";
import "../Components/LocalStorageAuth/Home.css";
import { useDispatch,useSelector } from "react-redux";
import { attempts_Number } from "../helper/helper";
import { earnPoints_Number } from "../helper/helper";
// import { flagResult } from "../helper/helper";



export default function Result() {
  const user = JSON.parse(localStorage.getItem("user"));


  const {questions:{queue,answers},result:{result,userId}} = useSelector(state=>state);

  useEffect(() => {
    console.log(earnPoints);
  })

  const totalPoints = queue.length*10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers,10);
  // const flag = flagResult(totalPoints,earnPoints)
  
  return (
    <>
      <div className="head">
        <h2 className="font-sm">Test Yourself</h2>
      </div>

      <center>
        {" "}
        <div>
          <h4>This is the Result of the Test , {user.username}!</h4>
        </div>
      </center>
      <center>
        <div className="result">
          <div className="res">
            <span>Total Quiz Marks:</span>
            <span>{totalPoints || 0}</span>
          </div>

          <div className="res">
            <span>Total Questions</span>
            <span>{queue.length || 0}</span>
          </div>

          <div className="res">
            <span>Total Attempts</span>
            <span>{attempts || 0}</span>
          </div>

          <div className="res">
            <span>Marks</span>
            <span>{earnPoints || 0}</span>
          </div>

        
        </div>
      </center>
    </>
  );
}

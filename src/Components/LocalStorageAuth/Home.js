import React,{useEffect} from "react";
import Questions from "../Questions";
import withAuth from "./withAuth";
import '../LocalStorageAuth/Home.css';


/** redux store import */

import {useSelector} from 'react-redux'

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const state = useSelector(state => state)

  useEffect(() => {
   console.log(state);
  })
  

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
      <div className="head">
        <h2 className="font-sm">Test Yourself</h2>
      </div>
      <div>
        <h4>All the very Best , {user.username}!</h4>
      </div>


      <Questions />

      <div className="grid">
        <button onClick={onPrevious}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

export default withAuth(Home);

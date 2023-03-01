import React, { useEffect, useState } from "react";
import "../Components/LocalStorageAuth/Home.css";
import Data from "../Database/Data";

export default function Questions() {
  const [checked, setChecked] = useState(undefined);

  const question = Data[0];

  useEffect(()=>{
    console.log(question);
  })

  function onSelect() {
    console.log("radio button change");
    setChecked(true);
  }
  return (

    <>
    <div className="question">

    <h4>{question.question}</h4>
   </div>
    <div className="questions">
      <div className="options">
        <ul key={question.id}>
          <h4>
          {
          question.options.map((q,i)=>(
            <li key={i}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect}
            />
            <label htmlFor={`q${i}-option`}>{q}</label>
          </li> 
          ))
         }
          </h4>
        
        </ul>
      </div>
    </div>
    </>
  );
}

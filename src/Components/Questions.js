import React, { useEffect, useState } from "react";
import "../Components/LocalStorageAuth/Home.css";
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { updateResultAction } from "../redux/result_reducer";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const {trace} = useSelector(state => state.questions);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const [selectedValue, setSelectedValue] = useState(null);
  useSelector(state => console.log((state)))
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  

  const dispatch = useDispatch()

  useEffect(() => {
   
    dispatch(updateResult({trace,checked}))
  });

  function onSelect(i) {
    onChecked(i);
    setChecked(i)
  }


  return (
    <>
      <div className="question">
        <h2>{questions?.question}</h2>
      </div>
      <div className="questions">
        <div className="options">
          <ul key={questions?.id}>
            <h4>
              {questions?.options.map((q, i) => (
                <li key={i}>
                  <input
                    type="radio"
                    value={checked}
                    name="options"
                    id={`q${i}-option`}
                    onChange={() => onSelect(i)}
                  />
                  <label htmlFor={`q${i}-option`}>{q}</label>
                </li>
              ))}
            </h4>
          </ul>
        </div>
      </div>
    </>
  );
}

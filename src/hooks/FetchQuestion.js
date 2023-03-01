// fetch question hook to fetch api

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Data from "../Database/Data";

/** Redux actions*/


import * as Action from  '../redux/question_reducer'

export const useFetchQuestion = () => {
  const [getdata, setgetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setgetData((prev) => ({ ...prev, isLoading: true }));
    //  async fuction to fetch data
    (async () => {
      try {
        let question = await Data;

        if(question.length>0){
            setgetData((prev) => ({ ...prev, isLoading: true }));
            setgetData((prev) => ({ ...prev, apiData: question }));

            /**dispatch an action */
            dispatch();
        }
      } 
      catch (error) {
        setgetData((prev) => ({ ...prev, isLoading: false }));
        setgetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  });
};

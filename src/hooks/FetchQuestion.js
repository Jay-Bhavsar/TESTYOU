// fetch question hook to fetch api

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Data,{answers} from "../Database/Data";

/**Custom Hook */



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
            setgetData((prev) => ({ ...prev, apiData: {question,answers} }));

            /**dispatch an action */
            dispatch(Action.startExamAction({question,answers}));
        }else{
          throw new Error("No Questions Available")
        }
      } 
      catch (error) {
        setgetData((prev) => ({ ...prev, isLoading: false }));
        setgetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  },[dispatch]);

  return [getdata,setgetData];
};

/**moveaction function */

export const MoveNextQuestion = ()=> async(dispatch)=>{
  try{
    /**increase trace by 1 */
    dispatch(Action.moveNextAction());
  }catch(error){
    console.log(error);
  }
}

export const MovePrevQuestion = ()=> async(dispatch)=>{
  try{
    /**decrease trace by 1 */
    dispatch(Action.movePrevAction());
  }catch(error){
    console.log(error);
  }
}




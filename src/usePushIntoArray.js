import { useState } from "react";

export const usePushIntoArray = () => {

   const [array,setArray]=useState([])

   const pushIntoArray = (text,time) => {
      console.log("pushing into array")
      console.log("text:",text)
      console.log("time:",time)
      setArray(prevArray => [...prevArray, { text: text, time: time }])
      console.log("ARRAY",array)
   }
   
   

   return {array,pushIntoArray}
}
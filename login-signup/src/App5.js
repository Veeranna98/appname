import React from 'react'
import { useState,useEffect } from 'react';
export default function App5() {
    const [runs,setRuns] = useState(0);
    const [wicket, setWicket] =useState(0);
    console.log("componet loaded");
    useEffect(() =>
    {
      console.log("better luck next time");
    },[wicket]);
  return (
    <div>
        <button onClick={() => setRuns((prevState) => prevState+1)}>runs({runs})</button>
        runs({runs})
        <button onClick={() => setWicket((prevState) =>prevState+1)}>wicket({wicket})</button>
        wicket({wicket})
    </div>
  )
}

import React from 'react'
import { useState } from 'react';
export default function App4() {
    const [count, setCount] =useState(0);
    console.log("componet loaded");
  return (
    < >
        <button onClick={() => setCount((prevState)=> prevState + 1)}>Cilck</button>
        <span>{count}</span>
    </ >
  )
}
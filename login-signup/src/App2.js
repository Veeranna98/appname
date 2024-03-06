import React from 'react'

export default function App2() {
    const handleClick=(msg) =>
    {
        alert(msg);
    }
      return (
        <div>
            <button onClick={()=>handleClick('hello veera')}>here</button>
        </div>
      )
      }   
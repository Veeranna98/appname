import React from 'react'

export default function App1() {
    const handleClick=() =>
{
    alert('hello world')
}
  return (
    <div>
        <button onClick={handleClick}>here</button>
    </div>
  )
}
   
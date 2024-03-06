import React from 'react'

export default function App3(props) {
    App3.defaultProps = {name: "vallibahai", age:20};
  return (
    <div style={{backgroundColor:'blueh'}}>
        hello {props.name}.you are {props.age}
    </div>
  )
}
App3.defaultProps={name:"valli" , age:23};
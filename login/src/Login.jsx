import React, { useState } from 'react'
import './Login.css'

export const Login = () => {
    const[action ,setAction] = useState("SignUp")
    // const[userName, setUserName]=useState('');
    // const[email, setEmail]= useState('');
    // const[password, setPassword]=useState('');
  return (
    <div>
     <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:  <div className='input'>
                <input placeholder='userName' type='text'
                 />
            </div>}
      
            <div className='input'>
                <input placeholder='Email Id' type='email' />
            </div>
            <div className='input'>
                <input placeholder='Password' type='Password'  />
            </div>
        </div>
        <div className='forgot-password'>Lost password? <span>Click here</span></div>
        <div className='submit-container'>
            <div className={action ==="SignUp"?"submit gray":"submit"} onClick={()=>{setAction("SignUp")}}>SignUp</div>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
     </div>
    </div>
  )
}


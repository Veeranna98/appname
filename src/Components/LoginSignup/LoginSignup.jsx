import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import user_icon from '../Assets/email.png'
import user_icon from '../Assets/password.png'
export const LoginSignup = () => {
  return (
    <div className ='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'> </div>
        </div>
        <div className='input'>
            <div className='input'>
                <img src={user_icon} alt='' />
                <input type="text" />
            </div>
            <div className='input'>
                <img src={email_icon} alt='' />
                <input type="email" />
            </div>
            <div className='input'>
                <img src={password_icon} alt='' />
                <input type="password" />
            </div>
        </div>
    </div>
  )
}

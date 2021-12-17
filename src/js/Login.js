import React from 'react'
import '../css/login.css'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import logo from '../images/logopng.png';

import {useState} from 'react';
import { Button, ButtonGroup } from '@mui/material'






function Login() {
    const [loginform,setLoginform] = useState(true);

    return (
        <div className='main'>
            {/* menu */}
            <div className='loginMenu'>
            <img className='logo' src={logo} alt='Logo' />
            </div>
            {/* body */}
            <div className='body'>
                {/* toggel */}
                <div className='toggle'>
                    <label className='name'>ForACause</label>
                    <div className='togglebuttons'>
                        
                        <ButtonGroup variant='text' aria-label="text button group">
                            <Button color={loginform?"success":"primary"} onClick={() =>setLoginform(true)} >Login</Button>
                            <Button color={loginform?"primary":"success"} onClick={() =>setLoginform(false)}>Signup</Button>
                        </ButtonGroup>
                    </div>
                </div>

                {/* login */}
                <div className='login'>

                    {
                        loginform?<LoginForm />:<SignupForm />
                    }

                    {/* <LoginForm /> */}
                    {/* <SignupForm /> */}
                </div>
                
            </div>
            {/* login */}
            {/* signup */}
        </div>
    )
}

export default Login

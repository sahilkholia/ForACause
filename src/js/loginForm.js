import React from 'react'
import { Button, TextField } from '@mui/material'
import '../css/loginForm.css'
import {useState} from 'react';
import {Redirect} from 'react-router-dom';

function LoginForm() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loggedIn,setLoggedIn] = useState(false);

    function changeUname(n){
        setUsername(n.target.value);
    }
    function changePass(p){
        setPassword(p.target.value);
    }
    function login(l){
        console.log(username + "  " + password);
        if(username === "A" && password === "B"){
            localStorage.setItem("token", "clkvjasldnflsadlfemnvlcjve");
            setLoggedIn(true);
        }
    }
    {if(loggedIn){
        return (<Redirect to="/dashboard" />);
    }}
    return (
        
        <div className='loginform'>
            <TextField required  id="username" label = "Username" variant = "outlined" margin="dense" value={username} onChange={changeUname} />
            <TextField required id="password" label = "Password" variant = "outlined" margin="dense" type="password" value={password} onChange={changePass}/>
            <Button size='large' variant='contained' onClick={login} >Login</Button>
            
        </div>
    )
}

export default LoginForm

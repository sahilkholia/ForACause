import React from 'react'
import { Button, TextField } from '@mui/material'
import '../css/loginForm.css'
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios'

function LoginForm() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loggedIn,setLoggedIn] = useState(false);
    let errors = [];
    let valid = true;
    let data =[];

    const getEmailUrl = `http://localhost:8080/user/`

    function changeEmail(n){
        setEmail(n.target.value);
    }
    function changePass(p){
        setPassword(p.target.value);
    }
    function login(){
        Validations();
        if(valid)
        {
            console.log(email + "  " + password);

            axios.get(getEmailUrl+email).then((res) => {
                if(res.data==="")
                {
                    console.log("User not found")
                }
                else if(res.data.password===password)
                {
                    
                    console.log("logging in...");
                    localStorage.setItem("token", "clkvjasldnflsadlfemnvlcjve");
                    localStorage.setItem("email",email);
                    localStorage.setItem("name",res.data.username);
                    localStorage.setItem("id", res.data.id);
                    console.log(res.data);
                    var data = res.data.data;
                    localStorage.setItem("data", JSON.stringify(data));
                    
                    setLoggedIn(true);  
                }
                else{
                    console.log("incorrect password");
                }
            
            })


            // if(email === "A" && password === "B"){
            //     localStorage.setItem("token", "clkvjasldnflsadlfemnvlcjve");
            //     setLoggedIn(true);
            // }
        }
        else{
            console.log(errors);
        }
        
    }

    function Validations(){

        //email
        if(!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
            valid=false;
            errors.push("invalid email");
        }

        //password
        if(password.length<8)
        {
            valid = false;
            errors.push("password should be at least 8 character long");
        }

    }



    {if(loggedIn){
        return (<Redirect to="/dashboard" />);
    }}
    return (
        
        <div className='loginform'>
            <TextField required  id="email" label = "Email" variant = "outlined" margin="dense" value={email} onChange={changeEmail} />
            <TextField required id="password" label = "Password" variant = "outlined" margin="dense" type="password" value={password} onChange={changePass}/>
            <Button size='large' variant='contained' onClick={login} >Login</Button>
            
        </div>
    )
}

export default LoginForm

import React from 'react'
import { Button, TextField } from '@mui/material'
import '../css/signupForm.css'
import Axios from 'axios';
import {useState, useEffect} from 'react'
import axios from 'axios';

const signupUrl = `http://localhost:8080/user/add`
const getEmailUrl = `http://localhost:8080/user/`
function SignupForm() {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confPass,setConfPass] = useState("");
    const data = [];
    let errors = [];
    let valid = true;
    function changeUsername(e){
        setUsername(e.target.value);
    }
    function changeEmail(e){
        setEmail(e.target.value);
    }
    function changePassword(e){
        setPassword(e.target.value);
    }
    function changeConfPass(e){
        setConfPass(e.target.value);
        
    }

    function Validations(){
        
        

        //username
        if(username.length<5)
        {
            valid = false;
            errors.push("short username");
        }
        if(!username.match(/^[a-zA-Z]+$/)){
            valid = false;
            errors.push("username can only contain a-z and A-Z");
        }

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

        //confpass

        if(confPass != password)
        {
            valid = false;
            errors.push("your password does not match");
        }

        return false;
    }

    function signup(){
        
        Validations();
        if(valid)
        {
            axios.get(getEmailUrl+email).then((res) => {
                if(res.data==="")
                {
                    console.log("User Entered...");
                     //Post
                    axios.post(signupUrl, {email,username,password, data}).then((response)=>{
                        console.log(response)
                    })
                    
                }
                else{
                    console.log("User Already Exists");
                    console.log(res);
                }
            })
        }
        else{
            console.log("validation failed");
            console.log(errors);
            console.log(valid);
        }

        //check for email address in DB
        //encode Password
       

    }


    return (
        <div className='signupform'>
            <TextField required  id="username" label = "Username" variant = "outlined" margin="dense" value={username} onChange={changeUsername}/>
            <TextField required  id="email" label = "Email" variant = "outlined" margin="dense" type="email" value={email} onChange={changeEmail}/>
            <TextField required id="password" label = "Password" variant = "outlined" margin="dense" type="password" value={password} onChange={changePassword} />
            <TextField required  id="confirmpass" label = "Confirm Password" variant = "outlined" margin="dense" value={confPass} onChange={changeConfPass}/>
            <Button size='large' variant='contained' onClick={signup} >SignUp</Button>
        </div>
    )
}

export default SignupForm

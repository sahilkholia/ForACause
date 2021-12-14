import React from 'react'
import { Button, TextField } from '@mui/material'
import '../css/signupForm.css'

function signupForm() {
    return (
        <div className='signupform'>
            <TextField required  id="username" label = "Username" variant = "outlined" margin="dense"/>
            <TextField required  id="email" label = "Email" variant = "outlined" margin="dense" type="email" />
            <TextField required id="password" label = "Password" variant = "outlined" margin="dense" type="password" />
            <TextField required  id="confirmpass" label = "Confirm Password" variant = "outlined" margin="dense"/>
            <Button size='large' variant='contained' >SignUp</Button>
        </div>
    )
}

export default signupForm

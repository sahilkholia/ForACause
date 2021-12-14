import React from 'react'
import { Button, TextField } from '@mui/material'
import '../css/loginForm.css'

function loginForm() {
    return (
        <div className='loginform'>
            <TextField required  id="username" label = "Username" variant = "outlined" margin="dense"/>
            <TextField required id="password" label = "Password" variant = "outlined" margin="dense" type="password" />
            <Button size='large' variant='contained' >Login</Button>
            
        </div>
    )
}

export default loginForm

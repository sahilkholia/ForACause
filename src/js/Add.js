import React from 'react'
import '../css/add.css'
import {useState} from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

const postPetitionUrl = `http://localhost:8080/data/add`
const updateUserDataUrl=`http://localhost:8080/user/add/petition`


const username = localStorage.getItem("name"); 
let data = localStorage.getItem("data");

function Add() {
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState("");

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const submitPetition = () =>{
        axios.post(postPetitionUrl,{post: post, ctr: 0}).then((res)=>{
            console.log("petition added!!")
            console.log(res)
            data=[...res.data.pid]
            axios.put(updateUserDataUrl, {id: localStorage.getItem("id"), data: data})
        }).catch((err)=>{console.log("something's not right")})
        setOpen(false);
    };


    return (
        <div className='add'>
            {console.log(data)}
            <Tooltip title="New Petition" placement='top'>
                <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Petition</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Give a short but clear description to your petition:
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="desc"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={post}
                    onChange={(c)=>{setPost(c.target.value)}}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={submitPetition}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Add

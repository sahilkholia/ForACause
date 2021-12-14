import React from 'react'
import '../css/add.css'

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


function Add() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className='add'>
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
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Add

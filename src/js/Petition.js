import React from 'react'
import '../css/petition.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { grey } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';

function Petition(props) {
    return (
        <div className='petition'>
            {console.log(props.entry.count)}
            <div className='petitiontext'>
                <label>{props.entry.text}</label>
            </div>
            <div className='right'>
                <div className='options'>
                    <div className='delete'>
                        <Tooltip title="Delete" placement='top'>
                            <IconButton aria-label="delete" size="large">
                                <DeleteIcon fontSize="large" sx={{color: grey[900]}} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className='share'>
                        <Tooltip title="Share" placement='top'>
                            <IconButton aria-label="share" size="large">
                                <ShareIcon fontSize="large" sx={{color: grey[900]}}  />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className='count'>
                    <ArrowCircleUpIcon />
                    <label>{props.entry.count}</label>
                </div>
            </div>
        </div>
    )
}

export default Petition

import {React,useState} from 'react'
import '../css/vote.css'
import logo from '../images/logopng.png';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Divider from '@mui/material/Divider';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Vote() {

    //tokencheck
    const token = localStorage.getItem("token");
    let loggedIn = true;

    if(token == null)
    {
        loggedIn=false;
    }


    const data = {
        "text":"Legalize Mary Jane. She's a blessing from heaven",
        "count":"50000000",
        "id":"1"
    }


    const creds = {
        "name":"Sahil Kholia"
    }

    //avatar
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    if(loggedIn===false)
    {
        return <Redirect to="/" />
    }

    return (
        <div className='voteDashboard'>
            <div className='menu'>
                <img className='logo' src={logo} alt='Logo' />
                <div className='user'>
                    <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Avatar />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>{creds.name}</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>


            <div className='voteBody'>
                <div className='votePanel'>
                    <div className='text'>
                        <label className='textContent'>{data.text}</label>
                    </div>
                    <Divider variant='middle' />
                    <div className='options'>
                        <div className='vote'>
                            <IconButton aria-label="vote" size="large">
                                <ThumbUpAltRoundedIcon fontSize='large' sx={{color: grey[900]}}/>
                                <label>Vote</label>
                            </IconButton>
                            
                        </div>
                        <Divider orientation='vertical' flexItem />
                        <div className="share">
                            <IconButton aria-label="share" size="large">
                                <ShareIcon fontSize='large' sx={{color: grey[900]}}/>
                                <label> Share</label>
                            </IconButton>
                            
                        </div>
                    </div>
                    <Divider variant='middle' />
                    <div className='count'>
                        <ArrowCircleUpIcon fontSize='large'/>
                        <label className='countText'>{data.count}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vote

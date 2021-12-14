import {React,useState} from 'react'
import '../css/vote.css'
import logo from '../images/logopng.png';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

function Vote() {
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
                    <div className='options'>
                        <div className='vote'>
                            
                        </div>
                        <div className="share">

                        </div>
                    </div>
                    <div className='count'>
                        {data.count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vote

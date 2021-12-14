import {React,useState} from 'react'
import '../css/dashboard.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Petition from './Petition';
import logo from '../images/logopng.png';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const data=[
    {
        "text":"Legalize Mary Jane. She's a blessing from heaven",
        "count":"50000000",
        "id":"1"
    },
    {
        "text":"Ban Tobacco. Big amount of tax is not above human life.",
        "count":"600000",
        "id":"2"
    },
    {
        "text":"Let's cancel summer this year.",
        "count":"90000",
        "id":"3"
    },
]

const creds = {
    "name":"Sahil Kholia"
}


function Dashboard() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
        <div className='dashboard'>
            {/* menu  */}
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
            
            
            {/* body */}
            <div className='dashboardBody'>
                {/* My Petitions  */}
                <div className='myPetitions'>
                    <div className='borderHeading'>
                        My Petitions
                    </div>
                    {/* petition  */}
                    
                    {data.map((entry)=>
                    <Petition key={entry.id} entry={entry}/>
                    )}
 
                </div>
                {/* add  */}
                <div className='addPetition'>
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                </div>
            </div>
            
                
        </div> 
    )
}

export default Dashboard

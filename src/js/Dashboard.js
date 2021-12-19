import {React,useState, useEffect} from 'react'
import '../css/dashboard.css';

import Petition from './Petition';
import logo from '../images/logopng.png';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Add from './Add';
import { Redirect, Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { render } from '@testing-library/react';


const getDataUrl = `http://localhost:8080/data/`


// const data=[
//     {
//         "text":"Legalize Mary Jane. She's a blessing from heaven",
//         "count":"50000000",
//         "id":"1"
//     },
//     {
//         "text":"Ban Tobacco. Big amount of tax is not above human life.",
//         "count":"600000",
//         "id":"2"
//     },
//     {
//         "text":"Let's cancel summer this year.",
//         "count":"90000",
//         "id":"3"
//     },
// ]




function Dashboard(props) {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const pids = JSON.parse(localStorage.getItem("data"));
    const [datast,setDatast] = useState([]);
    const data=[];
    const [dataAvailable,setDataAvailable] = useState(false);
    let requests = [];

    function setData(value){
        if(value.pid!=null)
        { 
            data.push(value);
            setDataAvailable(true);
            
            
        }
        
    }
    //tokencheck
    const token = localStorage.getItem("token");
    let loggedIn = true;

    if(token == null)
    {
        loggedIn=false;
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




    //retrieval 

   useEffect(()=>{

    pids.map((v)=>{
        requests.push(axios.get(getDataUrl+v))
    })


    axios.all(requests).then(axios.spread((...responses)=>{
        setDatast(responses)
        })).catch(errors => {
            console.log(errors)
          })
    
   },[])

    
  
   
    if(loggedIn===false)
    {
        return <Redirect to="/" />
    }

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
                        <MenuItem onClick={handleClose}>{name}</MenuItem>
                        <Link to="/logout">
                            <MenuItem >Logout</MenuItem>
                        </Link>
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
                    {datast.map((d,i)=>{
                        console.log(d.data.pid);
                        if(d.data.pid!=null)
                        return <Petition key={i} pid={d.data.pid} post={d.data.post} ctr={d.data.ctr}/>
                    })}
                      
                    {/* <DisplayPetition x={data} /> */}
                    
 
                </div>
                {/* add  */}
                <div className='addPetition'>
                   <Add />
                  
                </div>
            </div>
            
                
        </div> 
    )
}

export default Dashboard

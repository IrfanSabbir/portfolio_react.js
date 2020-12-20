import React from 'react'
import {Container, Typography, Button, Divider} from '@material-ui/core'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './project/icons.css'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import SocalLinks from './project/socialLinks'
const Contact_info=()=>{
    return(
        <div>
        <Container>
            <Typography color="primary" style={{fontWeight:"bold", fontSize:"40px" }}>Contact Info <ContactMailIcon color="primary" fontSize="large"/></Typography>
            <br/> 
            <p><b style={{color:"#262626", fontSize:"20px"}}>Hire me on <i style={{color:"#04cf3a",fontSize:"30px"}}>!</i></b></p>
                    {/* <br/> */}
                   <Button variant="contained" color="inherit" style={{ background:"#013a4a" ,fontSize:"23px", fontWeight:"bolder", margin:"10px",textTransform: 'none'}}>
                       <a href="https://www.upwork.com/o/profiles/users/~01ea722a1836be1a22/" target="_blank"
                       style={{textDecoration:"none",color:"white", }}><span style={{color:"#04cf3a"}}>Up</span>work</a>
                    </Button>
                    <Button variant="contained" color="inherit" style={{ fontSize:"23px", fontWeight:"bolder", margin:"10px",textTransform: 'none'}}>
                       <a href="https://www.fiverr.com/irfan_uddin_97" target="_blank"
                       style={{textDecoration:"none",color:"#262626"}}>Fiverr<span style={{color:"#04cf3a"}}>.</span></a>
                    </Button>
                    <br/><br/>
                    <Divider/><br/>
            <Typography color="textPrimary" style={{fontWeight:"bold", fontSize:"23px", letterSpacing:"3px" }}><EmailIcon color="primary" fontSize="medium"/>  irfansabbir97@gmail.com </Typography><br/>
            <Typography color="textPrimary" style={{fontWeight:"bold", fontSize:"23px", letterSpacing:"3px" }}><PhoneIcon color="primary" fontSize="medium"/>  01625793437</Typography> <br/> <br/>
             <SocalLinks/>
           
        </Container>
    </div>
    )
}

export default Contact_info
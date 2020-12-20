
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Typography,  ListItem, ListItemText, ListItemIcon, Container, Grid , Divider , Button as Buttoned} from '@material-ui/core'
import './project.css'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CategoryIcon from '@material-ui/icons/Category';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SocalLinks from './socialLinks'
const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(props.showModal);
  const [project, setProject] = useState(props.project)
  const toggle = () => setModal(!modal);
 console.log(project)
  return (
      <div>
          
 
      <Modal isOpen={props.showModal} toggle={props.cancleModal} size="lg" style={{maxWidth: '80%', textAlign:"center", marginLeft:"10%"}}>
        <ModalHeader toggle={props.cancleModal}>
            <p style={{color:"blue", fontSize:"20px"}}> {project.name}</p>
        </ModalHeader>


        <div style={{padding:"20px"}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                   <a href={project.demo} target="_blank">
                    <img src={process.env.REACT_APP_BASE_URL+project.thumb}
                    //  width="90%" height="auto"
                      className="demo_image"
                     /></a><br/><br/>
                     
                     
                        <Button style={{width:"90%", textAlign:"center", backgroundColor:'#013a4a'}}>
                        <a href={project.demo} target="_blank"
                        style={{textDecoration:"none",color:"white",fontSize:"25px" ,color:"#04cf3a",textTransform: 'none', fontWeight:"bold" }}>Demo View</a>
                        </Button>
                        <hr/>
                            
                            <p  style={{ fontSize:"20px", textAlign:"left", marginRight:"10px"}}>  <AlternateEmailIcon/>&nbsp;  : &nbsp;<span style={{ color:"blue"}}>{project.login_email}</span></p>
                            <p  style={{ fontSize:"20px", textAlign:"left",marginRight:"10px"}}>  <VpnKeyIcon/>&nbsp;  : &nbsp;<span style={{ color:"blue"}}>{project.login_password}</span></p>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8}>
                  <p style={{color:"#474747", fontSize:"30px", fontWeight:"bold", textAlign:"left"}}>  {project.name}</p>
                  <p style={{color:"#04cf3a", fontSize:"18px", fontWeight:"bold", textAlign:"left"}}>Technology & Tools </p>
                  <Grid container spacing={1}>
                    {project.categories.map((cat,index)=>{
                        return(
                        <Grid item xs={5} sm={4} md={3} lg={2} key={index} style={{color:"#013a4a", fontSize:"20px", fontWeight:"bold", textAlign:"left"}}>{cat }</Grid>
                        )
                    })}
                </Grid><br/>
                <hr/>
                <p style={{color:"#04cf3a", fontSize:"18px", fontWeight:"bold", textAlign:"left"}}>Project Description </p>
                <p style={{color:"#013a4a", fontSize:"18px", textAlign:"left"}}>{project.descriptions}</p>
                </Grid>

            </Grid><br/>
            <p style={{color:"#04cf3a", fontSize:"25px", fontWeight:"bold", textAlign:"left"}}>Related Images </p>
            <br/>
            <Grid container spacing={3}>
                {project.images.map((image,index)=>{
                    return(
                        <Grid  key={index} xs={12} sm={6} md={4} lg={3}>
                            <img src={process.env.REACT_APP_BASE_URL+image}  alt= {image} className="demo_sub_image" /><br/><br/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
        <Container>
        <p><b style={{color:"#262626", fontSize:"20px"}}>Hire me on <i style={{color:"#04cf3a",fontSize:"30px"}}>!</i></b></p>
                    {/* <br/> */}
                   <Buttoned variant="contained" color="inherit" style={{ background:"#013a4a" ,fontSize:"23px", fontWeight:"bolder", margin:"10px",textTransform: 'none'}}>
                       <a href="https://www.upwork.com/o/profiles/users/~01ea722a1836be1a22/" target="_blank"
                       style={{textDecoration:"none",color:"white", }}><span style={{color:"#04cf3a"}}>Up</span>work</a>
                    </Buttoned>
                    <Buttoned variant="contained" color="inherit" style={{ fontSize:"23px", fontWeight:"bolder", margin:"10px",textTransform: 'none'}}>
                       <a href="https://www.fiverr.com/irfan_uddin_97" target="_blank"
                       style={{textDecoration:"none",color:"#262626"}}>Fiverr<span style={{color:"#04cf3a"}}>.</span></a>
                    </Buttoned><br/><br/>
                    <SocalLinks/>
               
        </Container>
        <ModalFooter>
          <Button color="primary" onClick={props.cancleModal}>Done</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
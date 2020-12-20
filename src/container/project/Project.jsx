import React, { Fragment, useState } from 'react'
import { Typography, Button , Container , Grid} from '@material-ui/core'

import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import {CardContent, CardActionArea} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { projects } from '../../graphql/query'
import { useQuery} from '@apollo/client'
import '../../Style/MainPage.css'
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import Project_Modal  from './Details'
const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 345,
        color:"#04cf3a"
      },
      media: {
        // height: 20,
        paddingTop: '56.25%', // 16:9
      },
     
  }));

const Project =  ()=>{
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false)
    const [project, setProject] = useState()
    
    const {data, loading , error} = useQuery(projects , {
        variables:{type:1}
    })
   const ModalOpenar = (project)=>{
        setProject(project)
        setShowModal(true)
   }
    const modalHandler=()=>{
        setShowModal(false)
        
    }
    if(loading){
        return<p>Loading</p>
    }
   
    
    let allProject = data.getProject.map((project, index)=>{
        return( <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
           
           <Card className={classes.root}>
                <CardHeader
                    title={project.name}
                />
                <CardMedia
                    className={classes.media}
                    image={process.env.REACT_APP_BASE_URL+project.thumb}
                    title={project.name}
                />
               
               <div style={{paddingTop:"10px", color:"black",height:"60px", textAlign:"center"}}>
                   <Typography variant="h6">{project.categories[0]} &nbsp; {project.categories[1]} &nbsp;{project.categories[2]}</Typography>

               </div>
                   
              
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p" style={{textAlign:"left", height:"80px"}}>
                        {project.descriptions.substr(0,100) + '...'}
                    </Typography><br/>
                    <Button size="large" variant="contained" onClick={()=>ModalOpenar(project)} style={{width:"100%", backgroundColor:"#013a4a", color:"#04cf3a",fontSize:"20px",textTransform: 'none', fontWeight:"bold"}}>
                        Details & Demo
                    </Button>
                </CardContent>
            </Card>
         </Grid>
        )
       })
    

    return(
        <div>
            <Container className="container" >
             {showModal && <Project_Modal 
                showModal={showModal}
                cancleModal={modalHandler}
                project={project}
             />}
                <Typography color="primary" style={{fontWeight:"bold", fontSize:"40px" }}>My projects <AccountTreeOutlinedIcon color="primary" fontSize="large" /></Typography><hr/><br/><br/>

                <Grid container spacing={3}>
                {allProject}
                
                </Grid>
              </Container>
        </div>
    )
}

export default Project
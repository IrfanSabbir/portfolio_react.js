
import React, { Fragment, useState } from 'react'
import { Typography, Avatar, Paper ,Button, Container, Divider , Grid, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import '../Style/MainPage.css'

import { categories } from '../graphql/query'
import { useQuery} from '@apollo/client'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ProfileImage from './assets/profilepic.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Link } from 'react-scroll'
import Skills from './project/Skills'
const useStyles = makeStyles((theme) => ({

  root:{
    backgroundColor:"#F2F4F4",
    fontSize:"20px"
  },
  
  avatar: {
    backgroundColor: red[500],
  },
}));

const Overview = (props)=>{
  const [showtext, setShowtext] = useState(false)
  // const { data , loading, error  } =  useQuery(categories , {
  //   variables:{type:1}
  // })

  const changeRead= ()=>{
      setShowtext(!showtext)
      
  }

  const classes = useStyles();

  // if(loading){
  //   return<p>Loading</p>
  // }
   
    // let skills = data.getCategory.map((cat,index)=>{
    //  return( <Grid item xs={6} sm={4} md={3} lg={2} key={index} style={{textAlign:"left"}}>
     
    //    <Typography style={{color:"#013a4a", fontSize:"20px" }}>{ cat.name}</Typography>
    //   </Grid>
    //  )
    // })
   

    return(
        <Fragment>
            <Paper  style={{margin:"0 10%" , backgroundColor:"#283747"}}  >
            <ul style={{backgroundColor:"#FFC300", padding:"10px", position:"relative"}}>
                    <li><Button style={{fontSize:"20px",color:"black", textTransform: 'none', fontFamily:"sans-serif", textAnchor:"none"}}>
                    <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    isDynamic={true}>  Projects </Link>
                    </Button></li>
                    <li><Button style={{fontSize:"20px", color:"black", textTransform: 'none',  fontFamily:"sans-serif", textAnchor:"none"}}>
                    <Link
                    to="service"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    isDynamic={true}>  Services </Link>
                    </Button></li>
                    <li><Button style={{fontSize:"20px", color:"black", textTransform: 'none', fontFamily:"sans-serif", textAnchor:"none"}}>
                    <Link
                    to="quote"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    isDynamic={true}>  Get Quote </Link>
                    </Button></li>
                    <li><Button style={{fontSize:"20px", color:"black", textTransform: 'none', fontFamily:"sans-serif", textAnchor:"none"}}>
                    <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    isDynamic={true}>  Contact Info </Link>
                    </Button></li>
                </ul>
              <div style={{width:"100%", textAlign:"left", paddingTop:"10px"}}>
                <ListItem>
                  <ListItemIcon>
                  <img alt="Remy Sharp" width="100px" src={ProfileImage} />
                  </ListItemIcon>
                  <ListItemText>
                   <Typography style={{color:"#FFC300", fontSize:"30px" }}> Overview <FormatQuoteOutlinedIcon/></Typography><br/>
                {/* <Divider style={{color:"white"}}/> */}
                  </ListItemText>

                </ListItem>
            
              </div>

             <p style={{color:"#F7F9F9", fontSize:"20px", letterSpacing:"1px",textAlign:"left",padding:"0 3vw"}}>
             I am a JavaScript and MERN STACK Developer with 2 years of an intern and more than 2 years of developing experience. I have become experienced in <span style={{color:"#FFC300", fontWeight:"bold", letterSpacing:"2px"}}>react.js, node.js, MongoDB, Express, GraphQL, My SQL, Rest Api, Redux,</span> and also core Java Script.
                      
                     {! showtext && <span>...</span>}  <br/><br/>
                    { showtext && <span> During my time of graduation in Computer science, I have focused on becoming a full-stack web developer. Besides, I am a specialized Graphic designer who has working experience of 5 years on Adobe Photoshop and illustrator on Upwork. I can create the banner, flyer, Logo, Business card, Infographic, Color designer, and manipulation. So over time, I focused on MERN Stack which refers to MongoDB, Express React.js, Node.js.
                      <br/><br/> My program Solving skill took me to a level of understanding a problem, Data structure, Algorithm, and being analytics at the same time.
                      <br/> I have completed the Shop app, Chat app, E-Commerce website for Mobile and laptop, Manufacturing controlling website based on this mentioned Js framework.</span>}
               </p> 
               <Button variant="text" style={{cursor: "pointer", color:"#FFC300", textAlign:"center",fontWeight:"bolder", fontSize:"30px"}}  onClick={changeRead} > {!showtext ? <ExpandMoreIcon style={{fontSize:"40px", fontWeight:"bolder"}}/> :<ExpandLessIcon  style={{fontSize:"40px", fontWeight:"bolder"}}/>}</Button>

              {/* <Typography variant="body1" style={{color:"#F7F9F9", fontSize:"20px",fontFamily:"Didot, serif" ,fontStyle:"oblique" }}>{"\"  "+props.profile.overview + "  \""} </Typography> */}
              <br/><br/><br/>
              
            </Paper>
        
           <br/>
           <Container className="container">
        

           {/* <Typography color="primary" style={{fontWeight:"bold", fontSize:"40px" }}>My Skills <AllInclusiveIcon color="primary" fontSize="large"/></Typography><hr/><br/><br/> */}
           
            {/* <Grid container  spacing={2}>
              {skills}


            </Grid> <br/> */}
            <Skills/>
           </Container>
        </Fragment>
    )
}

export default Overview
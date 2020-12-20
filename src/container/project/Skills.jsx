
import React, { Fragment, useState } from 'react'
import { Typography, Avatar, Paper ,Button, Container, Divider , Grid, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import '../../Style/MainPage.css'

import { categories } from '../../graphql/query'
import { useQuery} from '@apollo/client'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Link } from 'react-scroll'



const Skills = (props)=>{
  const { data , loading, error  } =  useQuery(categories , {
    variables:{type:1}
  })

  

  if(loading){
    return<p>Loading</p>
  }
   
    let skills = data.getCategory.map((cat,index)=>{
     return( <Grid item xs={6} sm={4} md={3} lg={2} key={index} style={{textAlign:"left"}}>
     
       <Typography style={{color:"#013a4a", fontSize:"20px" }}>{ cat.name}</Typography>
      </Grid>
     )
    })
   

    return(
        <Fragment>
           
           <Container className="container">
        

           <Typography color="primary" style={{fontWeight:"bold", fontSize:"40px" }}>My Skills <AllInclusiveIcon color="primary" fontSize="large"/></Typography><hr/><br/><br/>
           
            <Grid container  spacing={2}>
              {skills}


            </Grid> <br/>
           </Container>
        </Fragment>
    )
}

export default Skills
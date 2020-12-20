import React  from 'react'
import { experiences} from '../graphql/query'
import {useQuery} from '@apollo/client'
import { Container , Paper , Typography, Grid, Avatar} from '@material-ui/core'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import '../Style/Experience.css'
import Experience_Card from './project/Experience_card'
const Experience = ()=>{
    const {data , loading , error } = useQuery(experiences)

    if(loading){
        return<p>Loading</p>
    }
     console.log(data)
    return(
        <Container >
              <Typography color="primary" style={{fontWeight:"bold", fontSize:"40px" }}>Work & Experience <WorkOutlineIcon color="primary" fontSize="large"/></Typography><hr/><br/><br/>
            
              <Grid container spacing={3}>
              {data.getExperience.map((exp, index)=>{
                  return(
                      <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                          <Experience_Card
                          title={exp.title}
                          company={exp.company}
                          from ={exp.from}
                          to={exp.to}
                        //   url={exp.url}
                          logo={exp.logo}
                          />
                      </Grid> )
              }
              )}
              </Grid>
        </Container>
    )
}

export default Experience
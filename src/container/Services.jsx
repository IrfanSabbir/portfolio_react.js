import React from 'react'
import  {Grid, Container ,Typography} from  '@material-ui/core'
import EventSeatIcon from '@material-ui/icons/EventSeat';
import Mern from './assets/mern.png'
import Static from './assets/static.png'
import Seo from './assets/seo.png'
import API from './assets/api.png'
import Real from './assets/Socket-io.svg'
import Graphql from './assets/greaphql.png'




const Services = ()=>{
    return(
        <Container>
            <Typography color="primary" style={{fontWeight:"bold", fontSize:"40px", marginBottom:"30px" }}>Services <EventSeatIcon color="primary" fontSize="large"/></Typography>
           
             <Grid container spacing={4} justify="center">
                 <Grid item xs={12} sm={6} md={4} lg={4}>
                 <img src={Mern} alt="Mern" style={{width:"220px",  height:"100px", marginBottom:"26px"}}/><br/>

                    <Typography variant="h5" style={{color:"#013a4a", fontWeight:"bolder", border:"2px solid #04cf3a", padding:"10px 0"}} >MERN Stack website</Typography><br/>
                    <p style={{fontSize:"18px", letterSpacing:"0.0629em", textAlign:"left"}}>
                    So, if you need a <b style={{color:"green", fontSize:"22px"}}>full stack website</b>, with stand alone frontend and backend, I will give you the solution using MERN stack. Mern stack stands for <b style={{color:"green", fontSize:"22px"}}> MongoDB, Express.js, React.js, Node.js</b>. You can choose the database as you need.
                    </p>

                 </Grid>
           
                 <Grid item xs={12} sm={6} md={4} lg={4}>
                 <img src={Static} alt="Static" style={{width:"150px", minHeight:"auto", maxHeight:"100px"}}/><br/><br/>

                    <Typography variant="h5" style={{color:"#013a4a", fontWeight:"bolder", border:"2px solid #04cf3a", padding:"10px 0"}} >Modern Static website</Typography><br/>
                    <p style={{fontSize:"18px", letterSpacing:"0.0629em", textAlign:"left"}}>
                      So, if you need a Modern website with faster experience, I will give you the solution using <b style={{color:"green", fontSize:"22px"}}>React.js</b>. React.js is Modern JavaScript Library developed and used by Facebook, Netflix and many more. 
                    </p>

                 </Grid>

                 <Grid item xs={12} sm={6} md={4} lg={4}>
                 <img src={Seo} alt="Seo" style={{width:"120px", height:"120px", marginBottom:"3px"}}/><br/>

                    <Typography variant="h5" style={{color:"#013a4a", fontWeight:"bolder", border:"2px solid #04cf3a", padding:"10px 0"}} >SEO friendly website</Typography><br/>
                    <p style={{fontSize:"18px", letterSpacing:"0.0629em", textAlign:"left"}}>
                      So, if you planning a Blog or a full stak website or any static website that should be SEO friendly also, I will give you the one of the best solution with <b style={{color:"green", fontSize:"22px"}}>Next.js</b>. Next.js is React.js framework, Its SEO Friendly as it can generate static or server side renders application.
                    </p>

                 </Grid>

                 <Grid item xs={12} sm={6} md={4} lg={4}>
                 <img src={API} alt="API" style={{width:"120px", height:"120px", marginBottom:"10px"}}/><br/>

                    <Typography variant="h5" style={{color:"#013a4a", fontWeight:"bolder", border:"2px solid #04cf3a", padding:"10px 0"}} >API development</Typography><br/>
                    <p style={{fontSize:"18px", letterSpacing:"0.0629em", textAlign:"left"}}>
                      So, if you Need API's ready for your frontend, or to customize any third part API such as Cloudnary/Cloudflare/S3/Google/Payment I have the solution. I will create or customize api's for you Using Node.js and Express. You can have database solutions. I will make it ready with  <b style={{color:"green", fontSize:"22px"}}>Rest APi</b>. Security on mind.
                    </p>

                 </Grid>
                 
                 <Grid item xs={12} sm={6} md={4} lg={4}>
                 <img src={Real} alt="Real" style={{width:"150px", height:"120px", marginBottom:"10px"}}/><br/>

                    <Typography variant="h5" style={{color:"#013a4a", fontWeight:"bolder", border:"2px solid #04cf3a", padding:"10px 0"}} >Real Time Website</Typography><br/>
                    <p style={{fontSize:"18px", letterSpacing:"0.0629em", textAlign:"left"}}>
                      So, if you Need Real time website. I will create one using <b style={{color:"green", fontSize:"22px"}}>Socket.io</b>. Using Socket.io you can have all the data already fetched, when ever new update comes. You can think of a chat app where data comes with out refreshing.
                    </p>

                 </Grid>
                 <Grid item xs={12} sm={6} md={4} lg={4}>
                 <img src={Graphql} alt="Graphql" style={{width:"250px", height:"110px", marginBottom:"20px"}}/><br/>

                    <Typography variant="h5" style={{color:"#013a4a", fontWeight:"bolder", border:"2px solid #04cf3a", padding:"10px 0"}} >Real Time Website</Typography><br/>
                    <p style={{fontSize:"18px", letterSpacing:"0.0629em", textAlign:"left"}}>
                      If you need a website where you only send and recieved the data with fix queries. <b style={{color:"green", fontSize:"22px"}}>GraphQL</b> is the best solution for you. Its a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more.
                    </p>

                 </Grid>
             </Grid>
        </Container>
    )
}

export default Services
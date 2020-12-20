import React , { memo }from 'react'
import '../Style/MainPage.css'
import { user_info, educations, experiences,  quotes, socail_urls } from '../graphql/query'
import { useQuery} from '@apollo/client'
import { Typography,  Button , Grid, Container, Divider } from '@material-ui/core'
import Overview from './Overview'
import Project from './project/Project'
import Experience from './Experience'
import ProfileImage from './assets/profilepic.png'
import Bg1 from './assets/bg1.png'
import Title from './project/Title_slider'
import Subscription from './project/Subscription'
import ContactInfo from './Contact_Info'
import Footer from './footer'
import Services from './Services'
const Main =()=>{
    // const [page, setPage ] = useState(1)
    // const {data:profile , loading} = useQuery(user_info)
    // const {data:edu } = useQuery(educations)
    // const {data:exp } = useQuery(experiences)
    // const {data:qut } = useQuery(quotes)
    // const {data:socials , error } = useQuery(socail_urls)

    // if(loading) return <p>loading</p>
    // if(error) return <p>{JSON.stringify(error)}</p>
    // console.log(profile)
    return(
        <div className="MainPage">
              {/* <div style={{position:"absolute" ,  width:"50vw" ,   textAlign:"right"}}>
                                <img src={Bg1} width="50%" height="auto" alt="Bg"/>
            </div> */}
        <Container className="Top" style={{paddingTop:"20px"}}>
            
            
            
            <Typography variant="h4" color="primary" style={{fontFamily: "Roboto, sans-serif", color:"black"}}> <span> {"{"} </span> Hello<span style={{color:"#04cf3a", fontFamily:"fantasy", letterSpacing:"2px"}}> World!</span> <span> {"}"} </span></Typography>
           
             <Grid container justify="center">
                 <Grid item xs={12} sm={8} md={6} lg={6} style={{ paddingTop:"3vw", textAlign:"left"}}>

                    <p style={{color:"#262626", fontSize:"25px", fontWeight:"bold", fontFamily:"Apple Chancery"}}>I am </p>
                    <Typography variant="h3" style={{color:"#04cf3a"}}><b>Mohammed Irfan Uddin</b></Typography><br/>
                    <Typography variant="h6" style={{color:"#262626"}}> MERN Stack Web Developer <span style={{color:"#04cf3a", fontSize:"25px", fontWeight:"bolder"}}>|</span> Graphic Designer  </Typography>
                    {/* <Title/> */}<br/>
                    <Divider/><br/>
                    
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
               

                 </Grid>
                 <Grid item xs={12} sm={4} md={5} lg={5}>
               
                        
                         <img  width="70%"  alt="ProfileImage" src={ProfileImage}/><br/>
                  </Grid>
            </Grid>
         </Container> <br/>
           
  
     
            <Overview  />
            <Experience/><br/><br/>
            <div id="project"><Project  /></div><br/><br/>
            <div id="service"><Services/></div><br/><br/>
            <div ><Subscription/></div>
            <div id="contact"><ContactInfo/></div><br/>
            <Footer/>
            
        </div>
    )
}

export default memo(Main)


{/* <div itemScope itemType='http://schema.org/Person' className='fiverr-seller-widget' style={{display: "inline-block"}}>
<a itemProp='url' href="https://www.fiverr.com/irfan_uddin_97" rel="nofollow" target="_blank" style={{display: "inline-block"}}>
    <div className='fiverr-seller-content' id='fiverr-seller-widget-content-5ba73594-393a-4b00-91e7-a139c2778f47' itemProp='contentURL' style={{display: "none"}}></div>
    <div id='fiverr-widget-seller-data'  style={{display: "none"}}>
        <div itemProp='name' >irfan_uddin_97</div>
        <div itemScope itemType='http://schema.org/Organization'><span itemProp='name'>Fiverr</span></div>
        <div itemProp='jobtitle'>Seller</div>
        <div itemProp='description'>I am JavaScript and MERN STACK Developer more than 2 years of developing experiencing and graphic designer. I have become experienced in react js, node js, Mongodb, Express, GraphQL, My sql, Rest Api, Redux and also core Java Script. During my time of graduation in Computer science , I have focused on becoming full stack developer. Beside i am specialized Graphic designer have working experience of 5 years on Adobe Photo shop and illustrator on upwork. I can create banner, flyer, Logo, Business card, Info graphic, Color designer and manipulation. So over the time i focused on MERN Stack.</div>
    </div>
</a>
</div> */}
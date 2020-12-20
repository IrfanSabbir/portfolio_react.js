import React, {useState} from 'react'
import {Container,Typography,TextField, Button, Paper, Popover} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscription = (props)=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const classes = useStyles()


  const handleMessage= async (e)=>{
      e.preventDefault()
      let inputData={
        name:name,
        email:email,
        phone:phone,
        message:message,
    }
    console.log(inputData)
    try{
        let headers= {
            "Content-Type": "application/json",
        }
        const areaData = await axios.post(process.env.REACT_APP_BASE_URL + 'subscription', inputData,
        {headers:headers})
        const message = <div>
            <p>{areaData.data.message}</p>
            <p>{areaData.data.status}</p>

        </div>
        const type = {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            }
        if(!areaData.data.error){

            toast.success(message,type )
        }
        else{
            toast.error(message,type )

        }

    }
    catch(error){
        console.log(error)

    }
  }

 



    return(
        <div id="quote">
        <Container fixed><br/>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
          <Paper  style={{margin:"0 10% 3% 10%" , backgroundColor:"#283747"}}  >
          <br/><br/>
             <Typography style={{fontWeight:"bold", fontSize:"40px", color:"#FFC300" }}>Get a Quote </Typography><hr/><br/><br/>


      
                     <p style={{textAlign:"left",marginLeft:"10%", fontSize:"17px", color:"#FFC300" }}>Your Name </p>
            
                      <TextField variant="filled" required type="text" color="primary"
                            className= {classes.input1}
                            onChange={(event)=>setName(event.target.value)}
                                placeholder="please add your name..."
                        /><br/><br/>
                     <p style={{textAlign:"left",marginLeft:"10%", fontSize:"17px", color:"#FFC300" }}>Your Email </p>
                        <TextField variant="filled" required type="email" 
                            className= {classes.input1}
                            onChange={(event)=>setEmail(event.target.value)}
                                placeholder="please add your email..."
                        /><br/><br/>
                     <p style={{textAlign:"left",marginLeft:"10%", fontSize:"17px", color:"#FFC300" }}>Your Pnone number </p>
                        <TextField variant="filled" type="text" 
                            className= {classes.input1}
                            onChange={(event)=>setPhone(event.target.value)}
                                placeholder="Your phone no. here..."
                        /><br/><br/>
                     <p style={{textAlign:"left",marginLeft:"10%", fontSize:"17px", color:"#FFC300" }}>Type Your message </p>
                         <TextField variant="filled" type="text" multiline rows={5}
                            className= {classes.input1}
                            onChange={(event)=>setMessage(event.target.value)}
                                placeholder="type the message..."
                        />  <br/> <br/>
           
            
            <Typography style={{ marginLeft:"10%",  textAlign:"left", fontSize:"15px", color:"white" }}>* I will get back to you shortly.* </Typography><br/>
            <Button  variant="contained" style={{backgroundColor:"#FFC300", width:"200px", padding:"10px", fontSize:"20px" , color:"white", fontWeight:"bold"}}
                        onClick= {(e)=>handleMessage(e)}
            >Send &nbsp; <SendIcon/></Button><br/><br/><br/>

             </Paper> 
        </Container>
       </div> 
    )
}


export default Subscription


const useStyles = makeStyles({
   

    input1: {
        width: '20vw',
        minWidth:"80%",
        textAlign:"center",
        backgroundColor:"white",
        borderRadius:"5px"
    },
 
  })

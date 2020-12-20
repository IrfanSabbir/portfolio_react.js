import React from 'react'
import {Container, Typography, Button, Divider} from '@material-ui/core'
import './icons.css'
import FB from '../assets/fb.png'
import IN from '../assets/in.png'
import SK from '../assets/sk.png'
import WP from '../assets/wp.png'
import GIT from '../assets/git.png'

const SocialLinks=()=>{
    return(
        <div>
        <Container>
         <Divider/><br/>
            <p><b style={{color:"#262626", fontSize:"20px"}}>Find me on <i style={{color:"#04cf3a",fontSize:"30px"}}>!</i></b></p>

        <div align="center" class="socialbtns">
        <ul>
        <li><a href="https://github.com/IrfanSabbir?tab=repositories"  target="_blank"><img src={GIT} alt="GIT" style={{width:"60px", height:"auto"}}></img></a></li>
        <li><a href="https://linkedin.com/in/irfan-sabbir" target="_blank"><img src={IN} alt="IN" style={{width:"60px", height:"auto"}}/></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100009609794349" target="_blank"><img src={FB} alt="fb" style={{width:"60px", height:"auto"}}/></a></li>
        <li><a href="https://join.skype.com/invite/BQcTVRH3QcV4" target="_blank"><img src={SK} alt="SK" style={{width:"60px", height:"auto"}}/></a></li>
        <li><a href="https://wa.me/8801625793437?text=Hi, i wanna ask about something?" target="_blank"><img src={WP} alt="WP" style={{width:"60px", height:"auto"}}/></a></li>
        </ul>
        </div>

           
        </Container>
    </div>
    )
}

export default SocialLinks
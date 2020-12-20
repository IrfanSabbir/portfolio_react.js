import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import { experiences } from '../../graphql/query';

const useStyles = makeStyles({
//   root: {

//   },
  media: {
    height: 140,
    width:200
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card >
        <CardActionArea>

        <img src={process.env.REACT_APP_BASE_URL+props.logo} alt="logo" height="100px" width="auto" style={{padding:"15px"}}/>
        </CardActionArea>
        <Divider/>
        <CardContent>
          <Typography gutterBottom variant="h6" style={{color:"#262626", height:"70px"}}>
          {props.title }  at  <span style={{color:"#04cf3a"}}> { props.company} </span>
          </Typography>
         
          <Typography  variant="body1" color="primary" > {"from : " + props.from }  &nbsp; &nbsp; { " to : " + props.to}   </Typography>
        </CardContent>
   
     
          
        {/* <Button size="small" color="primary">
        <a href={props.url} target="_blank"
            style={{textDecoration:"none",color:"#262626"}}>Details</a>
        </Button> */}
     
    </Card>
  );
}

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Typography,  ListItem, ListItemText, ListItemIcon} from '@material-ui/core'


const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(props.showModal);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={props.showModal} toggle={props.cancleModal} className={className} size="lg" style={{marginTop:"150px", padding:"15px"}}>
        <ModalHeader toggle={props.cancleModal}>
        
                <h4> {props.quote.name}</h4>
          
        </ModalHeader>
            <div style={{padding:"15px"}}>
            <Typography  style={{fontSize:"20px", color:"rgb(124,124,124)"}}><b>{props.quote.email}</b></Typography><br/>
            <Typography  style={{fontSize:"20px", color:"rgb(124,124,124)"}}><b>{props.quote.phone}</b></Typography><br/>
            <div style={{width:"90%", backgroundColor:"#A5CBED", padding:"10px", borderRadius:"10px"}}>
                  <Typography style={{fontSize:"25px", color:"white", fontWeight:"bold"}}>{props.quote.message}</Typography>
               </div><br/>
            </div>
        <ModalFooter>
          <Button color="primary" onClick={props.cancleModal}>Done</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
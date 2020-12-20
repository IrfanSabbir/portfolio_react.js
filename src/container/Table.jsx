import React , {useState, useMemo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';

import ZoomInIcon from '@material-ui/icons/ZoomIn';
import DeleteIcon from '@material-ui/icons/Delete';
import QuoteModal from './project/quoteModal'
import axios from 'axios'


const columns = [
    {id:"key", label:"key", minWidth:12},
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 150 },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'message',
    label: 'Message',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 150,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: "auto",
    },
});




const StickyHeadTable = (props) =>{
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [quotes, setQotes] = useState([])
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [quote, setQuote] = useState()
    const [showModal, setShowModal] = useState(false)

    useMemo(()=>{
        const getQuotes = async ()=>{
            let headers= {
                "Content-Type": "application/json",
            }
            const quotes = await axios.get(process.env.REACT_APP_BASE_URL + 'subscription',
            {headers:headers})
            setQotes(quotes.data.quotes)
        }
        getQuotes()
    }, [])
    const modalOpenHandler=()=>{
        setShowModal(true)

    }
    const cancleModalHandler=()=>{
        setShowModal(false)
        
    }

    const setDetailsValue = (quote)=>{
        setQuote(quote)
        setShowModal(true)
        // console.log(quote)
      }
      const deleteQuote = async (quote_id)=>{
        console.log(quote_id)
        try{
          let headers= {
              "Content-Type": "application/json",
          }
          const areaData = await axios.delete(process.env.REACT_APP_BASE_URL + 'subscription/'+quote_id,
          {headers:headers})
          
          const newQuotes = [...quotes]
          let UpdatedQuote = newQuotes.filter(quote=>  quote._id !== quote_id )
          setQotes(UpdatedQuote)
      }
      catch(error){
          console.log(error)
  
      }
      }

    const  createData= (quote) =>{
        // console.log(quote)
        var key = quote.key
        // var today = new Date(quote.created_at);
        // var year = today.getFullYear();
        // var mes = today.getMonth()+1;
        // var dia = today.getDate();
        // var fecha =dia+"-"+mes+"-"+year;
      
        // const receved_date = fecha
        const name = quote.name
        const email = quote.email
        const phone = quote.phone
        const message = quote.message.substr(0,50)+'....'
        const action = <div>
            <Button variant="contained" color="primary" onClick={()=>setDetailsValue(quote)}><ZoomInIcon/></Button>&nbsp;&nbsp;
            <Button variant="contained" color="secondary" onClick={()=>deleteQuote(quote._id)}><DeleteIcon/></Button>  

        </div>
        return {key, name, email, phone, message, action};
    }
//   console.log([...props.quotes])
// console.log(quotes)
  const rows = []
 
     quotes.map((quote, index)=>{
     return(<div key={index}>
     { quote &&  rows.push(createData({...quote,key: index}))}

     </div>)
    })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
   



  return (
      <Container style={{marginTop:"30px"}}>

     

  {showModal && <QuoteModal 
          showModal={showModal}
          cancleModal={cancleModalHandler}
          quote={quote}

          />}

    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column, index) => {
                    const value = row[column.id];
                
                    return (
                      <TableCell key={index} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    
  </Container>
  );
}


export default StickyHeadTable
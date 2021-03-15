import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AB from '../assets/images/AB.png';
import Container from '@material-ui/core/Container';
import Book from '../assets/images/Book.png';
import './../assets/css/consult.css';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Datepicker from '../components/datepicker'
import Timeselector from '../components/selecttime'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  Btop: {
    
  }
}));



export default function AutoGrid() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  return (
  <div className="book_page">
    <Container>
      <Grid container spacing={2}>
        <Grid item md={1} />
          <Grid component={Box} item md={5} display={{ xs: 'none', sm: 'none', md:'block'}} spacing={10}>
            <img src={Book} className="Bookie" alt="Book"/>
          </Grid>
            <Grid container item xs={12} md={5} style={{textAlign: "center"}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={AB} className="bookie_d_avatar" style={{width: "100px"}} alt="AB"/>
                  <div>
                  <p className="book-dr-name">Dr. Kishan Singh</p>
                   <span className="book-dr-title">General Physician</span>
                  </div>
                </Grid>
                
                
                  <Grid item xs={12}>
                    <div className="date-time">
                    <Datepicker/>
                    <Timeselector/>
                    </div>
                  </Grid>
              
                
                <Grid item xs={12} container direction="row"justify="center" alignItems="center">
                <Button variant="contained" className="book-now-btn">
                    Book Now
                </Button>
                </Grid>
              </Grid>
            </Grid>
          <Grid item md={1} />
        </Grid>
    </Container>
  </div> 
      
  );
}
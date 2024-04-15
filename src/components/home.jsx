import React from 'react';
import logo from './img/logo.jpg'; 
import { Button,Typography } from '@mui/material';
const Home = (props) => {
  return (
    <div>
        <center style={{marginTop:50}}>
        <img src={logo} alt="logo" /> 
       
        <Button variant="contained" size="medium" style={{
        textTransform: 'none',
        backgroundColor:"#6574CF"
      }} onClick={() => props.setPage(1)}>
        <Typography style={{
          fontFamily: 'Open Sans',
          display: 'flex',
          alignItems: 'center' // Align items vertically
        }}>
          <span>Next</span> {/* Include span inside Typography */}
          <ion-icon name="arrow-forward-circle-outline" size="small" style={{marginLeft:4}}></ion-icon>
        </Typography>
      </Button>
      </center>
    </div>
  );
};

export default Home;

import { Button, Typography, Grid, Box } from '@mui/material';
import React from 'react';
import preview2 from './img/preview2.jpg'; 

const Page1 = (props) => {
  return (
    <div >
       <Button variant="text" size="medium" style={{
        marginLeft:"87%",
        marginTop:"3%",
        textTransform: 'none'
       }} onClick={() => window.location="/"}>
        <Typography style={{
          fontFamily:'Open Sans',
          color:"#6574CF",
          fontWeight: 'bold'
        }}>Skip</Typography>
       </Button>

       <div>
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
            <Grid container direction="column" style={{ display: 'flex' , marginLeft:170 ,marginTop:80 }}>
              <Grid item>
                <Typography variant='h2' style={{
                  fontFamily:'Open Sans',
                  color:"#6574CF",
                  fontWeight: 'bold'
                }}>
                  Welcome
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h3' style={{
                  fontFamily:'Open Sans',
                  color:"#222B45",
                  fontWeight: 'medium'
                }}>
                  to Prescribal
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' style={{
                  fontFamily:'Open Sans',
                  color:"#687482",
                  marginTop:10,
                  width:"35vw"
                }}>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={preview2} alt="Doctor" style={{
              width:"60%",
              maxHeight:"90%",
              marginRight:70
            }}/>
          </Grid>
        </Grid>
      </Box>
      </div>
      <Button variant="contained" size="medium" style={{
        marginLeft: "87%",
        marginTop: "3%",
        textTransform: 'none',
        backgroundColor:"#6574CF"
      }} onClick={() => props.setPage(2)}>
        <Typography style={{
          fontFamily: 'Open Sans',
          display: 'flex',
          alignItems: 'center' // Align items vertically
        }}>
          <span>Next</span> {/* Include span inside Typography */}
          <ion-icon name="arrow-forward-circle-outline" size="small" style={{marginLeft:4}}></ion-icon>
        </Typography>
      </Button>
      {/* <div>
      <ion-icon name="square"></ion-icon>
      
      </div> */}
    </div>

  )
}

export default Page1;

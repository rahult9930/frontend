import { Button, Typography, Grid, Box } from '@mui/material';
import React from 'react';
import preview1 from './img/preview1.jpg';
import { useMediaQuery } from 'react-responsive';

const Page3 = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });

  return (
    <div >
      <Button variant="text" size="medium" style={{
        marginLeft: "87%",
        marginTop: "3%",
        textTransform: 'none'
      }} onClick={() => window.location = "/"}>
        <Typography style={{
          fontFamily: 'Open Sans',
          color: "#6574CF",
          fontWeight: 'bold'
        }}>Skip</Typography>
      </Button>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container direction="column" style={{ display: 'flex', marginLeft: isTabletOrMobile ? 48 : 170, marginTop: isTabletOrMobile ? 20 : 80 }}>
              <Grid item>
                <Typography variant={isTabletOrMobile ? 'h3' : 'h2'} style={{
                  fontFamily: 'Open Sans',
                  color: "#6574CF",
                  fontWeight: 'bold'
                }}>
                  Psysician
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant={isTabletOrMobile ? 'h4' : 'h3'} style={{
                  fontFamily: 'Open Sans',
                  color: "#222B45",
                  fontWeight: 'medium'
                }}>
                  on Your Doorstep
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant={isTabletOrMobile ? 'h6' : 'h5'} style={{
                  fontFamily: 'Open Sans',
                  color: "#687482",
                  marginTop: 10,
                  width: isTabletOrMobile ? "90vw" : "35vw",
                  marginRight:isTabletOrMobile ? 20:0
                }}>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={preview1} alt="Doctor" style={{
              width: isTabletOrMobile ? "80%" : "60%",
              maxHeight: "90%",
              marginRight: isTabletOrMobile ? 0 : 70
            }} />
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <div style={{ marginLeft: isTabletOrMobile ? 20 : 170, marginTop: isTabletOrMobile ? 20 : 43 }}>
              <span style={{ fontSize: '12px', marginRight: '4px' }}>
                <ion-icon name="ellipse-sharp" style={{ color: '#6574CF' }}></ion-icon>
              </span>
              <span style={{ fontSize: '12px', marginRight: '4px' }}>
                <ion-icon name="ellipse-sharp" style={{ color: '#6574CF' }}></ion-icon>
              </span>
              <span style={{ fontSize: '12px', color: '#6574CF', width: isTabletOrMobile ? "90%" : "40%", marginRight: "4px" }} >
                <ion-icon name="ellipse-sharp" style={{ marginRight:isTabletOrMobile?"-25%": "-1.5%" }}></ion-icon>
                <ion-icon name="square-sharp"></ion-icon>
                <ion-icon name="ellipse-sharp" style={{ marginLeft:isTabletOrMobile?"-25%": "-1.5%" }}></ion-icon>
              </span>
            </div>
          </Grid>
          <Grid item xs={6} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="contained" size="medium" style={{
              marginLeft: isTabletOrMobile ? "20%" : "20%",
              marginTop: "3%",
              textTransform: 'none',
              backgroundColor: "#6574CF"
            }} onClick={() => props.setPage(0)}>
              <Typography style={{
                fontFamily: 'Open Sans',
                display: 'flex',
                alignItems: 'center' // Align items vertically
              }}>
                <span>Next</span> {/* Include span inside Typography */}
                <ion-icon name="arrow-forward-circle-outline" size="small" style={{ marginLeft: 4 }}></ion-icon>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Page3;

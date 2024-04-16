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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
          <div style={{marginLeft:170,marginTop:43 }}>
     {/* <span style={{ fontSize: '18px',marginRight:4 }}><ion-icon name="laptop-sharp" size="medium" style={{
        color:"#6574CF",
      }}></ion-icon></span>  */}
     {/* <span style={{ width: '20px', height: '40px', borderRadius: '8px', overflow: 'hidden', display: 'inline-block', boxShadow: '0px 0px 0px 4px rgba(101, 116, 207, 0.2)', marginRight: '4px' }}>
    
     </span> */}
     <span  style={{ fontSize: '12px', color: '#6574CF',width:"40%", marginRight:"4px"}} >
     <ion-icon name="ellipse-sharp" style={{marginRight:"-1.5%"}}></ion-icon>
     <ion-icon name="square-sharp"></ion-icon>
     <ion-icon name="ellipse-sharp" style={{marginLeft:"-1.5%"}}></ion-icon>
     </span>
<span style={{ fontSize: '12px', marginRight: '4px' }}>
  <ion-icon name="ellipse-sharp" style={{ color: '#6574CF' }}></ion-icon>
</span>
<span style={{ fontSize: '12px', marginRight: '4px' }}>
  <ion-icon name="ellipse-sharp" style={{ color: '#6574CF' }}></ion-icon>
</span>


      </div>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" size="medium" style={{
        marginLeft: "20%",
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
          </Grid>
        </Grid>
      </Box>
     
    </div>

  )
}

export default Page1;

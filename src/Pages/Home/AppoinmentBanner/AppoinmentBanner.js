import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import appoinmentBg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBg = {
    background: `url(${appoinmentBg})`,
    backgroundColor: 'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppoinmentBanner = () => {
    return (
        <Container style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 500, marginTop: -133 }}
                     src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mt: 5 }} style={{ color: '#5fc7c7'}}>
                            APPOINTMENT
                        </Typography><br />
                        <Typography variant="h4" style={{ color:'white' }}>
                            Make an appoinment <br /> Today
                        </Typography><br />
                        <Typography variant="h6" sx={{ my: 3 }} style={{color:'white', fontSize: 14, fontWeight: 300 }}>
                        To get an appointment contact with us.We provide best experienced doctors.We provide best experienced doctors. <br />
                        We provide best experienced doctors best doctors.
                        </Typography><br />
                        <Button sx={{backgroundColor: '#5fc7c7'}} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
    </Container>
    );
};

export default AppoinmentBanner;
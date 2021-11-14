import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const bannerBg = {
    background: `url(${bg})`,
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 600    
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter,textAlign: 'left'}} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my:3, fontSize: 13, fontWeight: 400, color: 'gray'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aperiam, excepturi deleniti! Recusandae laborum <br /> cum doloremque nesciunt itaque repellat magnam laboriosam.
                        </Typography>
                        <Button sx={{backgroundColor: '#5fc7c7'}} variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item  xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
    </Container>
    );
};

export default Banner;
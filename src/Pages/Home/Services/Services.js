import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';



const services = [

    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit architecto odio, qui nihil laboriosam molestiae corrupti recusandae iusto repellendus nostrum?',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit architecto odio, qui nihil laboriosam molestiae corrupti recusandae iusto repellendus nostrum?',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit architecto odio, qui nihil laboriosam molestiae corrupti recusandae iusto repellendus nostrum?',
        img: whitening
    }

]



const Services = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{ fontWeight: 800, color: '#5fc7c7', m: 2 }} variant="h6" component="div">
                OUR SERVICES
             </Typography>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                Services We Provide 
             </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map( service => <Service
                            key = {service.name}
                            service = {service}
                        ></Service>)
                    }
            </Grid>
        </Container>        
    </Box>
    );
};

export default Services;<h2>This is Services</h2>
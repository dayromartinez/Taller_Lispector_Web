import React from 'react'
import ecosDeResistencia from './../images/Ecos_de_resistencia.jpeg'
import { NuestrasPublicaciones } from '../components/NuestrasPublicaciones';
import { PublicLayout } from '../layouts/PublicLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { Box, Container, Typography } from '@mui/material';
import selloLispector from '../images/Sello_Lispector.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  container_titulo_publicaciones: {
    textAlign: 'center',
    color: '#9FD5D1',
    fontWeight: 'bold',
    fontSize: '4.5rem',
    boxShadow: '-3px 10px 8px rgba(0, 0, 0, 0.603)',
    padding: '2rem 0rem 3rem 0rem',
  },
  postal_Lispector: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  tituloPostales: {
    marginTop: '3rem', 
    color: '#4D4D4D', 
    fontWeight: 'bold',
    fontSize: '3.5rem',
    textAlign: 'center',
  },
}));

export const PublicacionesPage = () => {
  const classes = useStyles();
  return (
    <AuthLayout>
        <Box sx={{ 'marginTop': '6rem'}}>
          <Box className={classes.container_titulo_publicaciones}>
            Nuestras Publicaciones
          </Box>
          <Box>
            <p className={classes.tituloPostales}>
              Postales Abiertas
            </p>
            <Box className={classes.postal_Lispector} >
              <img src={selloLispector} alt="Postal Lispector"/>
            </Box>
            <Box sx={{'backgroundColor': 'orange', 'display': 'flex', 'justifyContent': 'center'}}>
              <Typography sx={{'textAlign': 'justify', 'width': '50%', 'marginTop': '2rem'}}>
                Con objetivo de encotrar un lugar en el mundo del cual podamos sentinos
                parte, con la esperanza de que nuestra voz no sea ese murmullo
                que apaga el viento y determinados a ser ese fulgor que alumbra, así
                sea por un instante, la llana oscuridad de la noche, nacen estas postales,
                acaso un intento de resistencia a una época, una sociedad, que
                amenaza con borrar toda huella del individuo.
              </Typography>
            </Box>
          </Box>
        </Box>
    </AuthLayout>
  )
}

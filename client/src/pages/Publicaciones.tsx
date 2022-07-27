import React from 'react'
import ecosDeResistencia from './../images/Ecos_de_resistencia.jpeg'
import { NuestrasPublicaciones } from '../components/NuestrasPublicaciones';
import { PublicLayout } from '../layouts/PublicLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { Box, Container, Typography } from '@mui/material';
import selloLispector from '../images/Sello_Lispector.jpg';

export const PublicacionesPage = () => {

  let microrelatos: number[] = [1, 2, 3, 4, 5, 6]; 
  return (
    <AuthLayout>
        <Box sx={{ 'marginTop': '6rem'}}>
          <Box className='container_titulo_publicaciones' sx={{padding: '2rem 0rem 3rem 0rem'}}>
            Nuestras Publicaciones
          </Box>
          <Box>
            <Typography sx={{'marginTop': '3rem', 'color': '#4D4D4D', 'fontWeight': 'bold',
            'fontSize': '3.5rem', 'textAlign': 'center'
            }}>
              Postales Abiertas
            </Typography>
            <Box className="postal_Lispector" >
              <img src={selloLispector} alt="Postal Lispector"/>
            </Box>
          </Box>
        </Box>
    </AuthLayout>
  )
}

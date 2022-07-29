import React from 'react'
import colombiaADosMiradas from '../images/Colombia_a_dos_miradas.png'
import ecosDeResistencia from '../images/Ecos_de_resistencia_redimensionado.png'
import lecturasNoAplicadas1 from '../images/Lecturas_no_aplicadas_1.jpeg'
import lecturasNoAplicadas2 from '../images/Lecturas_no_aplicadas_2.jpeg'
import { NuestrasPublicaciones } from '../components/NuestrasPublicaciones';
import { PublicLayout } from '../layouts/PublicLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { Box, Container, Typography } from '@mui/material';
import selloLispector from '../images/Sello_Lispector.jpg';
import { makeStyles } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Colores {
  gris: string;
  blanco: string;
  aguaMarina: string;
} 

export const coloresPaleta : Colores = {
  gris: '#4D4D4D',
  blanco: '#F6EEE9',
  aguaMarina: '#9FD5D1',
}

const useStyles = makeStyles((theme) => ({
  container_general: {
    marginTop: '6rem',
    width: '98.7vw',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      width: '100vw',
    },
  },
  container_titulo_publicaciones: {
    textAlign: 'center',
    color: coloresPaleta.aguaMarina,
    fontWeight: 'bold',
    fontSize: '4.5rem',
    boxShadow: '-3px 10px 8px rgba(0, 0, 0, 0.603)',
    padding: '2rem 0rem 3rem 0rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  postal_Lispector: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  tituloPostales: {
    marginTop: '3rem', 
    color: coloresPaleta.gris, 
    fontWeight: 'bold',
    fontSize: '3.5rem',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  container_descripcion_postales: {
    display: 'flex', 
    justifyContent: 'center',
  },
  descripcion_postales: {
    textAlign: 'center', 
    width: '40%', 
    marginTop: '2rem',
    color: coloresPaleta.gris,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem',
    },
  },
  imagen_postal: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '50%',
      maxHeight: '50%',
    },
  },
  container_publicaciones: {
    marginTop: '2rem',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    backgroundColor: coloresPaleta.aguaMarina,
  },
  imagenes_lecturas_no_aplicadas: {
    display: 'flex', 
    justifyContent: 'center',
    width: 250,
  },
  swiper: {
    width: 300,
    height: 300,
  },
  imagen_ecos_de_resistencia: {
    maxWidth: '80%',
    marginLeft: '4rem',
    right: '2rem',
  },
}));


export const PublicacionesPage = () => {
  const classes = useStyles();
  return (
    <AuthLayout>
        <Box className={classes.container_general}>
          <Box className={classes.container_titulo_publicaciones}>
            Nuestras Publicaciones
          </Box>
          <Box>
            <p className={classes.tituloPostales}>
              Postales Abiertas
            </p>
            <Box className={classes.postal_Lispector} >
              <img className={classes.imagen_postal} src={selloLispector} alt="Postal Lispector"/>
            </Box>
            <Box className={classes.container_descripcion_postales}>
              <p className={classes.descripcion_postales}>
                Con el objetivo de encotrar un lugar en el mundo del cual podamos sentirnos
                parte, con la esperanza de que nuestra voz no sea ese murmullo
                que apaga el viento y determinados a ser ese fulgor que alumbra así
                sea por un instante la llana oscuridad de la noche, nacen estas postales,
                acaso un intento de resistencia a una época, una sociedad, que
                amenaza con borrar toda huella del individuo.
              </p>
            </Box>
          </Box>
          <Box className={classes.container_publicaciones}>
            <Swiper
              spaceBetween={100}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className={classes.swiper}
            >
              <SwiperSlide>
              <img src={selloLispector} alt="Postal Lispector"/>
              </SwiperSlide>
              <SwiperSlide className={classes.imagen_ecos_de_resistencia}>
                <img src={ecosDeResistencia} alt="Ecos de Resistencia"/>
              </SwiperSlide>
              <SwiperSlide> 
                <img src={colombiaADosMiradas} style={{marginTop: '2rem'}} alt="Colombia a dos miradas"/>
              </SwiperSlide>
              <SwiperSlide className={classes.imagenes_lecturas_no_aplicadas}>
                <img src={lecturasNoAplicadas1} alt="Lecturas no aplicadas I"/>
              </SwiperSlide>
              <SwiperSlide className={classes.imagenes_lecturas_no_aplicadas}>
                <img src={lecturasNoAplicadas2} alt="Lecturas no aplicadas II"/>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
    </AuthLayout>
  )
}

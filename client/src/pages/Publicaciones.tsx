import React, { useState, useEffect } from 'react'
import { AuthLayout } from '../layouts/AuthLayout';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { NavLink, useNavigate } from 'react-router-dom';
import { dataState } from '../redux/reducers/index';
import { useSelector } from 'react-redux'


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
    '&:hover': {
      color: coloresPaleta.aguaMarina
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  container_descripcion_postales: {
    display: 'flex', 
    justifyContent: 'center',
  },
  descripcion_postales: {
    textAlign: 'justify', 
    width: '40%', 
    marginTop: '2rem',
    color: coloresPaleta.gris,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      width: '70%',
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
    paddingTop: '5rem',
    paddingBottom: '3rem',
    backgroundColor: coloresPaleta.aguaMarina,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  imagenes_lecturas_no_aplicadas: {
    display: 'flex', 
    justifyContent: 'center',
    width: 250,
  },
  swiper: {
    width: 500,
    height: 500,
    [theme.breakpoints.down('xs')]: {
      width: 300,
      height: 300,
      marginBottom: '3rem',
    },
  },
  imagen_postal_slider: {
    display: 'flex',
  },
  imagen_ecos_de_resistencia: {
    display: 'flex',
    justifyContent: 'center',
  },
  descripcion_publicacion: {
    textAlign: 'justify', 
    width: '70%', 
    color: coloresPaleta.gris,
    fontWeight: 500,
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      width: '80%',
      fontWeight: 600,
    },
  },
  datos_publicacion: {
    width: '50%',
    marginRight: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginRight: '0rem',
      width: '90%'
    },
  },
  titulo_publicacion: {
    color: coloresPaleta.gris, 
    fontWeight: 'bold',
    fontSize: '3.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
    marginTop: '-1rem',
    cursor: 'pointer',
    '&:hover': {
      color: coloresPaleta.blanco
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  publicaciones: {
    backgroundColor: coloresPaleta.aguaMarina,
    padding: '5rem 5rem 5rem 5rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  camuflaje_Colombia_a_dos_miradas: {
    backgroundColor: 'white',
    height: '85%',
    paddingTop: '6rem',
    marginBottom: '2rem',
    boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.603)'
  },
  titulos_publicaciones_finales: {
    color: coloresPaleta.blanco, 
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '2rem',
    textAlign: 'center',
    '&:hover': {
      color: coloresPaleta.gris
    },
  }
}));


export const PublicacionesPage = () => {
  
  const classes = useStyles();
  const [indexSlide, setIndexSlide] = useState(0);
  const navigate = useNavigate();
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  const publicaciones = useSelector( ({publicaciones} : dataState) => publicaciones);


  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    switch(indexSlide) {

      case (0):
        navigate('/');
        break;

      case (1):
        const link = document.createElement('a')
        link.target = '_blank'
        link.href = 'https://view.genial.ly/5e966c2ae948540e05018d81/interactive-content-colombia-a-dos-miradas'
        link.click()
        link.remove()
        break;

      case (2):
        navigate('/');
        break;
      
      case (3):
        navigate('/');
        break;
      
      default:
        navigate('/');
        break;
    }
  }


  
  return (
    <AuthLayout>
        <Box className={classes.container_general}>
          <Box className={classes.container_titulo_publicaciones}>
            Nuestras Publicaciones
          </Box>
          <Box>
            <Box className={classes.tituloPostales}>
              <NavLink to="/">
                {publicaciones[0]?.nombre}
              </NavLink>
            </Box>
            <Box className={classes.postal_Lispector} >
              <img className={classes.imagen_postal} src={publicaciones[0]?.urlImagen} alt="Postal Lispector" onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
            </Box>
            <Box className={classes.container_descripcion_postales}>
              <p className={classes.descripcion_postales}>
                {publicaciones[0]?.descripcion}
              </p>
            </Box>
          </Box>
          <Box className={classes.container_publicaciones}>
            <Swiper
              spaceBetween={100}
              centeredSlides={true}
              autoplay={{
                delay: 30000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className={classes.swiper}
              onActiveIndexChange={(swiper) => setIndexSlide(swiper.activeIndex)}
            >
              {publicaciones.map((publicacion) => (
                publicacion?.nombre === 'Colombia a Dos Miradas' ? (
                  <SwiperSlide key={publicacion?.nombre}> 
                    <a href='https://view.genial.ly/5e966c2ae948540e05018d81/interactive-content-colombia-a-dos-miradas' target='_blank'>
                      <img src={publicacion?.urlImagen} style={{marginTop: '2rem', cursor: 'pointer'}} alt="Colombia a dos miradas"/>
                    </a>
                  </SwiperSlide>
                )
                : publicacion?.nombre !== 'Postales' ? (
                  <SwiperSlide 
                  className={publicacion?.nombre === 'Ecos de Resistencia' ? (classes.imagen_ecos_de_resistencia):(classes.imagenes_lecturas_no_aplicadas)} 
                  onClick={() => navigate('/')}
                  key={publicacion?.nombre}
                  >
                    <img src={publicacion?.urlImagen} style={{cursor: 'pointer'}}/>
                  </SwiperSlide>
                ):(null)
              ))}
            </Swiper>

            <Box className={classes.datos_publicacion}>
              <p className={classes.titulo_publicacion} onClick={onSubmit}>
                {publicaciones[indexSlide + 1]?.nombre}
              </p>
              <p className={classes.descripcion_publicacion}>
                {publicaciones[indexSlide + 1]?.descripcion}
              </p>
            </Box>
          </Box>
          {sizeScreen > 600 ? (
            <Box className={classes.publicaciones}>
              {publicaciones.map((publicacion) => (
                publicacion?.nombre === 'Colombia a Dos Miradas' ? (
                  <Box>
                    <Box className={classes.camuflaje_Colombia_a_dos_miradas}>
                      <a href={publicacion?.urlDocumento} target='_blank'>
                        <img src={publicacion?.urlImagen} width={250} style={{ cursor: 'pointer'}} alt="Colombia a dos miradas"/>
                      </a>
                    </Box>
                    <a className={classes.titulos_publicaciones_finales} href={publicacion?.urlDocumento} target='_blank'>
                      {publicacion?.nombre}
                    </a>
                  </Box>
                ): publicacion?.nombre !== 'Postales' ? (
                  <NavLink to="/">
                    <img src={publicacion?.urlImagen} width={publicacion?.nombre === 'Ecos de Resistencia' ? 300 : 250} style={{cursor: 'pointer', boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.603)'}} alt="Ecos de Resistencia"/>
                    <p className={classes.titulos_publicaciones_finales}>{publicacion?.nombre}</p>
                  </NavLink>
                ):(null)
              ))}
            </Box>
          ) : null}
        </Box>
    </AuthLayout>
  )
}

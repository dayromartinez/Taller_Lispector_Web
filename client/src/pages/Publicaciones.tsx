import React, { useState, useEffect } from 'react'
import { AuthLayout } from '../layouts/AuthLayout';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { NavLink, useNavigate } from 'react-router-dom';
import { dataState } from '../redux/reducers/index';
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from '../styles/stylesPagePublicaciones';
import { getPublication } from '../redux/actions/publicationActions';
import { Markup } from 'interweave';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const PublicacionesPage = () => {
  
  const classes = useStyles();
  const [indexSlide, setIndexSlide] = useState(0);
  const navigate = useNavigate();
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  const publicaciones = useSelector( ({publicaciones} : dataState) => publicaciones);
  const publicacion = useSelector( ({publicacion} : dataState) => publicacion);
  const dispatch = useDispatch();
  //const stringToHTML = publicacion?.contenido[6]?.texto


  useEffect(() => {
    setSizeScreen(window.innerWidth);
    if(publicaciones){
      //dispatch(getPublication(publicaciones[0]['_id']));
    }
  }, [publicacion]);

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
            <Markup content={null} />
          </Box>
          <Box>
            <Box className={classes.tituloPostales}>
              <NavLink to="/postales">
                {publicaciones[0]?.nombre}
              </NavLink>
            </Box>
            <Box className={classes.postal_Lispector} >
              <img className={classes.imagen_postal} src={publicaciones[0]?.urlImagen} alt="Postal Lispector" onClick={() => navigate('/postales')} style={{cursor: 'pointer'}} />
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

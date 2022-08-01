import { Calendario } from '../components/Calendario';
import React, { useState, useEffect } from 'react'
import sesionAsimow from '../images/ciclo-de-ciencia-ficcion.jpeg';
import sesionStanislaw from '../images/stanislaw-lem.jpeg';
import sesionXCienciaFiccion from '../images/sesionxCienciaFiccion.jpeg';
import sesion1MitosYLeyendas from '../images/sesion_2_mitos_y_leyendas.jpeg';
import sesion2MitosYLeyendas from '../images/sesion_3_mitos_y_leyendas.jpeg';
import sesion3MitosYLeyendas from '../images/Las-mil-y-una-noche.jpeg';
import { AuthLayout } from '../layouts/AuthLayout';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { NavLink, useNavigate } from 'react-router-dom'
import { coloresPaleta } from './Publicaciones';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface datosSesiones {
  titulo: string;
  fecha: string;
}

const sesiones : datosSesiones[] = [
  {
    titulo: 'Stanislaw Lem',
    fecha: 'Sábado 23 de julio',
  },
  {
    titulo: 'Isaac Asimow y Ray Bradbury',
    fecha: 'Sábado 9 de julio'
  },
  {
    titulo: 'Ciencia Ficción Latinoamericana',
    fecha: 'Sábado 4 de junio'
  },
  {
    titulo: 'Mitos y leyendas latinoamericanas',
    fecha: 'Sábado 7 de mayo',
  },
  {
    titulo: 'Mitos y leyendas europeas',
    fecha: 'Sábado 21 de mayo'
  },
  {
    titulo: 'Las mil y una noches: un acercamiento al infinito',
    fecha: 'Sábado 4 de junio'
  },
]


const useStyles = makeStyles((theme) => ({
  container_general: {
    marginTop: '6rem',
    width: '98.7vw',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      width: '100vw',
    },
  },
  container_titulo_sesiones: {
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
  titulo_sesiones: {
    marginTop: '3rem', 
    color: coloresPaleta.gris, 
    fontWeight: 'bold',
    fontSize: '3.5rem',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  container_calendario_carrusel: {
    display: 'flex',
    padding: '3rem 3rem 3rem 3rem',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 2rem 2rem 2rem',
      flexDirection: 'column',
    },
  },
  swiper: {
    width: 600,
    height: 600,
    [theme.breakpoints.down('xs')]: {
      marginTop: '3rem',
      width: 400,
      height: 400,
    },
  },
  container_ciclo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  descripcion_ciclo: {
    textAlign: 'justify', 
    width: '60%', 
    marginTop: '2rem',
    color: coloresPaleta.gris,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      width: '70%',
    },
  },
  container_piezas_ciclo: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '3rem 3rem 3rem 3rem',
    width: '98.7vw',
  },
  container_pieza: {
    
  },
  imagen_sesion: {
    height: 'auto',
    width: '95%',
    boxShadow: '11px 10px 8px rgba(0, 0, 0, 0.603)',
  },
  titulo_sesion: {
    color: coloresPaleta.gris, 
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginTop: '2rem',
    marginRight: '2rem',
    textAlign: 'center',
    '&:hover': {
      color: coloresPaleta.blanco,
      cursor: 'pointer',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      fontSize: '1.5rem',
      marginRight: '0rem',
    },
  },
  fecha_sesion: {
    color: coloresPaleta.gris, 
    fontWeight: 600,
    fontSize: '1.5rem',
    marginTop: '0.5rem',
    marginRight: '2rem',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      marginRight: '0rem',
      marginBottom: '2rem',
    },
  },
  container_sesion_actual: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    alignItems: 'center',
  },
  imagen_sesion_actual: {
    marginTop: '3rem',
    height: 'auto',
    width: '70%',
    boxShadow: '11px 10px 8px rgba(0, 0, 0, 0.603)',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1.5rem',
    },
  },
  descripcion_sesion: {
    textAlign: 'justify', 
    width: '80%', 
    margin: '3rem 0rem 6rem 0rem',
    color: coloresPaleta.gris,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      width: '80%',
      margin: '3rem 1rem 3rem 1rem',
    },
  }
}));


export const SesionesPage = () => {
  
  const classes = useStyles();
  const [indexSlideCF, setIndexSlideCF] = useState(0);
  const [indexSlideMIT, setIndexSlideMIT] = useState(0);
  const navigate = useNavigate();
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);


  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  const onSubmitCF = (e) => {
    e.preventDefault();

  }


  
  return (
    <AuthLayout>
        <Box className={classes.container_general}>
          <Box className={classes.container_titulo_sesiones}>
            Sesiones
          </Box>
          <Box>
            <Box className={classes.titulo_sesiones}>
              Próximas Sesiones
            </Box>
            <Box className={classes.container_calendario_carrusel}>
              <Box>
                <Calendario />
              </Box>
              <Box>
                <Swiper
                  spaceBetween={100}
                  centeredSlides={true}
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className={classes.swiper}
                  onActiveIndexChange={(swiper) => setIndexSlideCF(swiper.activeIndex)}
                >
                  <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}>
                    <img src={sesionStanislaw} style={{cursor: 'pointer'}} alt="Sesión Stanislaw Lem"/>
                  </SwiperSlide>
                  <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}> 
                    <img src={sesionAsimow} style={{ cursor: 'pointer'}} alt="Sesión Isaac Asimow y Ray Bradbury"/>
                  </SwiperSlide>
                  <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}>
                    <img src={sesionXCienciaFiccion} style={{cursor: 'pointer'}} alt="Sesión de Las mil y una noches"/>
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Box>
            <Box className={classes.container_ciclo} sx={{ backgroundColor: coloresPaleta.aguaMarina }}>
              <Box className={classes.titulo_sesiones}>
                Ciclo de Ciencia Ficción
              </Box>
              <p className={classes.descripcion_ciclo}>
                Con el objetivo de encontrar un lugar en el mundo del cual podamos sentirnos parte, con la esperanza de que nuestra voz no sea ese murmullo que apaga el viento y determinados a ser ese fulgor que alumbra así sea por un instante la llana oscuridad de la noche, nacen estas postales, acaso un intento de resistencia a una época, una sociedad, que amenaza con borrar toda huella del individuo.
              </p>

              {sizeScreen > 600 ? (
                <Box className={classes.container_piezas_ciclo}>
                  <Box className={classes.container_pieza}>
                    <img src={sesionStanislaw} className={classes.imagen_sesion} onClick={() => alert('Gonorrea ome gonorrea')} style={{ cursor: 'pointer'}} alt="Sesión Stanislaw Lem"/>
                    <p onClick={() => alert('Gonorrea ome gonorrea')} className={classes.titulo_sesion}>
                      {sesiones[0].titulo}
                    </p>
                    <p className={classes.fecha_sesion}>
                      {sesiones[0].fecha}
                    </p>
                  </Box>
                  <Box className={classes.container_pieza}>
                    <img src={sesionAsimow} className={classes.imagen_sesion} onClick={() => alert('Gonorrea ome gonorrea')} style={{ cursor: 'pointer'}} alt="Sesión Isaac Asimow y Ray Bradbury"/>
                    <p onClick={() => alert('Gonorrea ome gonorrea')} className={classes.titulo_sesion}>
                      {sesiones[1].titulo}
                    </p>
                    <p className={classes.fecha_sesion}>
                      {sesiones[1].fecha}
                    </p>
                  </Box>
                  <Box className={classes.container_pieza}>
                    <img src={sesionXCienciaFiccion} className={classes.imagen_sesion} onClick={() => alert('Gonorrea ome gonorrea')} style={{ cursor: 'pointer'}} alt="Sesión Isaac Asimow y Ray Bradbury"/>
                    <p onClick={() => alert('Gonorrea ome gonorrea')} className={classes.titulo_sesion}>
                      {sesiones[2].titulo}
                    </p>
                    <p className={classes.fecha_sesion}>
                      {sesiones[2].fecha}
                    </p>
                  </Box>
                </Box>
              ):(
                <Box>
                  <Swiper
                    spaceBetween={100}
                    centeredSlides={true}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={classes.swiper}
                    onActiveIndexChange={(swiper) => setIndexSlideCF(swiper.activeIndex)}
                  >
                    <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}>
                      <img src={sesionStanislaw} style={{cursor: 'pointer'}} alt="Sesión Stanislaw Lem"/>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}> 
                      <img src={sesionAsimow} style={{ cursor: 'pointer'}} alt="Sesión Isaac Asimow y Ray Bradbury"/>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}>
                      <img src={sesionXCienciaFiccion} style={{cursor: 'pointer'}} alt="Sesión de Las mil y una noches"/>
                    </SwiperSlide>
                  </Swiper>
                  <p onClick={() => alert('Gonorrea ome gonorrea')} className={classes.titulo_sesion}>
                    {sesiones[indexSlideCF].titulo}
                  </p>
                  <p className={classes.fecha_sesion}>
                    {sesiones[indexSlideCF].fecha}
                  </p>
                </Box>
              )}
            </Box>
            <Box className={classes.container_ciclo} sx={{ backgroundColor: 'white' }}>
              <Box className={classes.titulo_sesiones}>
                Ciclo de Mitos y Leyendas
              </Box>
              <p className={classes.descripcion_ciclo}>
                Con el objetivo de encontrar un lugar en el mundo del cual podamos sentirnos parte, con la esperanza de que nuestra voz no sea ese murmullo que apaga el viento y determinados a ser ese fulgor que alumbra así sea por un instante la llana oscuridad de la noche, nacen estas postales, acaso un intento de resistencia a una época, una sociedad, que amenaza con borrar toda huella del individuo.
              </p>

              {sizeScreen > 600 ? (
                <Box className={classes.container_piezas_ciclo}>
                  <Box className={classes.container_pieza}>
                    <img src={sesion2MitosYLeyendas} className={classes.imagen_sesion} onClick={() => alert('Gonorrea ome gonorrea')} style={{ cursor: 'pointer'}} alt="Sesión Mitos y leyendas latinoamericanas"/>
                    <p onClick={() => alert('Gonorrea ome gonorrea')} className={classes.titulo_sesion}>
                      {sesiones[3].titulo}
                    </p>
                    <p className={classes.fecha_sesion}>
                      {sesiones[3].fecha}
                    </p>
                  </Box>
                  <Box className={classes.container_pieza}>
                    <img src={sesion1MitosYLeyendas} className={classes.imagen_sesion} onClick={() => alert('Gonorrea ome gonorrea')} style={{ cursor: 'pointer'}} alt="Sesión Mitos y leyendas europeas"/>
                    <p onClick={() => alert('Gonorrea ome gonorrea')} className={classes.titulo_sesion}>
                      {sesiones[4].titulo}
                    </p>
                    <p className={classes.fecha_sesion}>
                      {sesiones[4].fecha}
                    </p>
                  </Box>
                  <Box className={classes.container_pieza}>
                    <img src={sesion3MitosYLeyendas} className={classes.imagen_sesion} onClick={() => alert('Gonorrea ome gonorrea')} style={{ cursor: 'pointer'}} alt="Sesión Las mil y una noches: un acercamiento al infinito"/>
                    <p onClick={() => alert('Gonorrea ome gonorrea')} className={classes.titulo_sesion}>
                      {sesiones[5].titulo}
                    </p>
                    <p className={classes.fecha_sesion}>
                      {sesiones[5].fecha}
                    </p>
                  </Box>
                </Box>
              ):(
                <Box>
                  <Swiper
                    spaceBetween={100}
                    centeredSlides={true}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={classes.swiper}
                    onActiveIndexChange={(swiper) => setIndexSlideMIT(swiper.activeIndex)}
                  >
                    <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}>
                      <img src={sesion2MitosYLeyendas} style={{cursor: 'pointer'}} alt="Sesión Mitos y leyendas latinoamericanas"/>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}> 
                      <img src={sesion1MitosYLeyendas} style={{ cursor: 'pointer'}} alt="Sesión Mitos y leyendas europeas"/>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => alert('Gonorrea ome gonorrea')}>
                      <img src={sesion3MitosYLeyendas} style={{cursor: 'pointer'}} alt="Sesión de Las mil y una noches"/>
                    </SwiperSlide>
                  </Swiper>
                  <p onClick={() => alert('Gonorrea ome gonorrea')} className={classes.titulo_sesion}>
                    {sesiones[indexSlideMIT + 3].titulo}
                  </p>
                  <p className={classes.fecha_sesion}>
                    {sesiones[indexSlideMIT + 3].fecha}
                  </p>
                </Box>
              )}
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Box className={classes.container_sesion_actual} sx={{backgroundColor: coloresPaleta.aguaMarina}}>
                <p className={classes.titulo_sesiones}>
                  Próxima Sesión: {sesiones[0].titulo}
                </p>
                <img src={sesionStanislaw} className={classes.imagen_sesion_actual} alt="Sesión actual"/>
                <p className={classes.descripcion_sesion}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quibusdam quia at voluptas vitae asperiores expedita, sed quisquam aliquid, ipsa distinctio harum dolor quis dolorem eius aperiam consectetur repellat voluptatem!
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
    </AuthLayout>
  )
}
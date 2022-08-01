import React, { useState, useEffect } from 'react'
import colombiaADosMiradas from '../images/Colombia_a_dos_miradas.png'
import ecosDeResistencia from '../images/Ecos_de_resistencia_redimensionado.png'
import lecturasNoAplicadas1 from '../images/Lecturas_no_aplicadas_1.jpeg'
import lecturasNoAplicadas2 from '../images/Lecturas_no_aplicadas_2.jpeg'
import { AuthLayout } from '../layouts/AuthLayout';
import { Box } from '@mui/material';
import selloLispector from '../images/Sello_Lispector.jpg';
import { makeStyles } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { NavLink, useNavigate } from 'react-router-dom'



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

interface datosPublicaciones {
  titulo: string;
  descripcion: string;
}

const publicaciones : datosPublicaciones[] = [
  {
    titulo: 'Postales Abiertas',
    descripcion: "Con el objetivo de encontrar un lugar en el mundo del cual podamos sentirnos parte, con la esperanza de que nuestra voz no sea ese murmullo que apaga el viento y determinados a ser ese fulgor que alumbra así sea por un instante la llana oscuridad de la noche, nacen estas postales, acaso un intento de resistencia a una época, una sociedad, que amenaza con borrar toda huella del individuo.",
  },
  {
    titulo: 'Ecos de Resistencia',
    descripcion: "Esta publicación nace en un momento de gran tensión en el país. Caldeaba en Colombia un malestar nada nuevo en el 2021, algunos lo atribuían a la precariedad consecuencia de la pandemia, pero aquella raíz estaba arraigada de manera más profunda; al interior de cada uno de nosotros existía (existe) un deseo de cambio en las bases de un país acostumbrado a la violencia. Y nosotros, igual a quijotes que preparan sus armas, afilamos nuestras plumas como posición política ante una sociedad violenta y acorralada."
  },
  {
    titulo: 'Colombia a dos Miradas',
    descripcion: "Este era un lugar en blanco, un espacio que necesitaba ser colmado de vida como las calles de Colombia el 21 de noviembre de 2019. Las consignas que aún claman «¡Viva el Paro Nacional!» Son la razón primordial para hablar de una Colombia donde existen más de dos miradas, partiendo desde la nefasta gestión presidencial hasta el asesinato sistemático de líderes sociales en los territorios. A continuación, usted podrá descubrir una selección de relatos, poemas y piezas gráficas que aún convocan al gobierno a un diálogo nacional sin violencia, abusos, que incluya a todos los sectores sociales y la esperanza que nos han arrebatado."
  },
  {
    titulo: 'Lecturas no aplicadas I',
    descripcion: "Esta publicación nace en un momento de gran tensión en el país. Caldeaba en Colombia un malestar nada nuevo en el 2021, algunos lo atribuían a la precariedad consecuencia de la pandemia, pero aquella raíz estaba arraigada de manera más profunda; al interior de cada uno de nosotros existía (existe) un deseo de cambio en las bases de un país acostumbrado a la violencia. Y nosotros, igual a quijotes que preparan sus armas, afilamos nuestras plumas como posición política ante una sociedad violenta y acorralada."
  },
  {
    titulo: 'Lecturas no aplicadas II',
    descripcion: "Esta publicación nace en un momento de gran tensión en el país. Caldeaba en Colombia un malestar nada nuevo en el 2021, algunos lo atribuían a la precariedad consecuencia de la pandemia, pero aquella raíz estaba arraigada de manera más profunda; al interior de cada uno de nosotros existía (existe) un deseo de cambio en las bases de un país acostumbrado a la violencia. Y nosotros, igual a quijotes que preparan sus armas, afilamos nuestras plumas como posición política ante una sociedad violenta y acorralada."
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
    // margin: '0rem 3rem',
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
                {publicaciones[0].titulo}
              </NavLink>
            </Box>
            <Box className={classes.postal_Lispector} >
              <img className={classes.imagen_postal} src={selloLispector} alt="Postal Lispector" onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
            </Box>
            <Box className={classes.container_descripcion_postales}>
              <p className={classes.descripcion_postales}>
                {publicaciones[0].descripcion}
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
              <SwiperSlide className={classes.imagen_ecos_de_resistencia} onClick={() => navigate('/')}>
                <img src={ecosDeResistencia} style={{cursor: 'pointer'}} alt="Ecos de Resistencia"/>
              </SwiperSlide>
              <SwiperSlide> 
                <a href='https://view.genial.ly/5e966c2ae948540e05018d81/interactive-content-colombia-a-dos-miradas' target='_blank'>
                  <img src={colombiaADosMiradas} style={{marginTop: '2rem', cursor: 'pointer'}} alt="Colombia a dos miradas"/>
                </a>
              </SwiperSlide>
              <SwiperSlide className={classes.imagenes_lecturas_no_aplicadas} onClick={() => navigate('/')}>
                <img src={lecturasNoAplicadas1} style={{cursor: 'pointer'}} alt="Lecturas no aplicadas I"/>
              </SwiperSlide>
              <SwiperSlide className={classes.imagenes_lecturas_no_aplicadas} onClick={() => navigate('/')}>
                <img src={lecturasNoAplicadas2} style={{cursor: 'pointer'}} alt="Lecturas no aplicadas II"/>
              </SwiperSlide>
            </Swiper>

            <Box className={classes.datos_publicacion}>
              <p className={classes.titulo_publicacion} onClick={onSubmit}>
                {publicaciones[indexSlide + 1].titulo}
              </p>
              <p className={classes.descripcion_publicacion}>
                {publicaciones[indexSlide + 1].descripcion}
              </p>
            </Box>
          </Box>
          {sizeScreen > 600 ? (
            <Box className={classes.publicaciones}>
              <NavLink to="/">
                <img src={ecosDeResistencia} width={300} style={{cursor: 'pointer', boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.603)'}} alt="Ecos de Resistencia"/>
                <p className={classes.titulos_publicaciones_finales}>Ecos de Resistencia</p>
              </NavLink>
              <Box>
                <Box className={classes.camuflaje_Colombia_a_dos_miradas}>
                  <a href='https://view.genial.ly/5e966c2ae948540e05018d81/interactive-content-colombia-a-dos-miradas' target='_blank'>
                    <img src={colombiaADosMiradas} width={250} style={{ cursor: 'pointer'}} alt="Colombia a dos miradas"/>
                  </a>
                </Box>
                <a className={classes.titulos_publicaciones_finales} href='https://view.genial.ly/5e966c2ae948540e05018d81/interactive-content-colombia-a-dos-miradas' target='_blank'>
                  Colombia a dos Miradas
                </a>
              </Box>
              <NavLink to="/">
                <img src={lecturasNoAplicadas1} width={250} style={{cursor: 'pointer', boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.603)'}} alt="Lecturas no aplicadas I"/>
                <p className={classes.titulos_publicaciones_finales}>Lecturas no aplicadas I</p>
              </NavLink>
              <NavLink to="/">
                <img src={lecturasNoAplicadas2} width={250} style={{cursor: 'pointer', boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.603)'}} alt="Lecturas no aplicadas II"/>
                <p className={classes.titulos_publicaciones_finales}>Lecturas no aplicadas II</p>
              </NavLink>
            </Box>
          ) : null}
        </Box>
    </AuthLayout>
  )
}

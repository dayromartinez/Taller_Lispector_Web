import React, {useEffect} from 'react'
import '.././index.css'
import { Alert, Box, Snackbar, Typography } from '@mui/material'
import { AuthLayout } from '../layouts/AuthLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import primeraFoto from '../images/primera-foto.jpeg';
import segundaFoto from '../images/segunda-foto.jpeg';
import terceraFoto from '../images/tercera-imagen.jpeg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStyles } from '../styles/stylesPageInicio';
import { useDispatch, useSelector } from 'react-redux';
import { dataState } from '../redux/reducers';


export const InicioPage = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [indexSlide, setIndexSlide] = useState(0);
    const navigate = useNavigate();
    const publicaciones = useSelector( ({publicaciones} : dataState) => publicaciones);
    const ciclos = useSelector(({ciclos} : dataState) => ciclos);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        setOpen(false);
        localStorage.removeItem('login');
        localStorage.removeItem('logOutUser');
    };

    const openAlert = () => {
        if(localStorage.getItem('login') === 'true' || localStorage.getItem('logOutUser') === 'true') {
            setOpen(true);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    
        switch(indexSlide) {
    
          case (0):
            navigate('/postales');
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

        case (4):
            navigate('/');
            break;
          
          default:
            navigate('/');
            break;
        }
      }

    useEffect(() => {
        openAlert();
        //dispatch(getPublication(publicaciones[0]?._id));
    }, [])


    return (
        <AuthLayout>
            <Snackbar open={open} anchorOrigin={{vertical: 'top', horizontal: 'right'}} autoHideDuration={3000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {localStorage.getItem('login') === 'true' ? ('Sesión iniciada exitosamente. ¡Bienvenid@ al parche Taller Lispector!') : ('¡Cesión cerrada exitosamente! Clarice espera que vuelvas pronto.')}
                </Alert>
            </Snackbar>
            <Box>
                <div className='bg-container-home'>

                    {/* THIS IS ONLY TABLETS - DESKTOP */}
                    <Box className='first-container-home'>
                        <Box className='texts-first-container'>
                            <Typography variant='body1' sx={{color: '#fff', fontSize: 22, fontWeight: 600}}>"Escribir es tratar de entender,</Typography>
                            <Typography variant='body1' sx={{color: '#fff', fontSize: 22, fontWeight: 600}}> es tratar de reproducir lo irreproducible".</Typography>
                            <Typography variant='h3' sx={{color: '#9FD5D1', fontWeight: 700}}>Clarice Lispector</Typography>
                        </Box>
                        <Box className='card-slider'>
                            <Link to='/sesiones'>
                              <Swiper 
                                  className="mySwiper" 
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
                                  onActiveIndexChange={(swiper) => setIndexSlide(swiper.activeIndex)}
                              >
                                {
                                    ciclos[0]?.sesiones?.map(sesion => (
                                        <SwiperSlide key={sesion?._id}><img src={sesion?.imagenSesion} alt='Imagen del carrusel.' /></SwiperSlide>
                                    ))
                                }
                              </Swiper>
                              <Typography variant='h4' className='text-card-slider' sx={{fontWeight: 600}}>Proximas Sesiones</Typography>
                            </Link>
                        </Box>                 
                    </Box>


                    {/* THIS IS ONLY MOBILE */}
                    <Box className='first-container-home-mobile'>
                        <Box className='card-slider'>
                            <Link to='/sesiones'>
                              <Swiper 
                                  className="mySwiper" 
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
                                  onActiveIndexChange={(swiper) => setIndexSlide(swiper.activeIndex)}
                              >
                                {
                                    ciclos[0]?.sesiones?.map(sesion => (
                                        <SwiperSlide key={sesion?._id}><img src={sesion?.imagenSesion} alt='Imagen del carrusel.' /></SwiperSlide>
                                    ))
                                }
                              </Swiper>
                              <Typography variant='h4' className='text-card-slider' sx={{fontWeight: 600}}>Proximas Sesiones</Typography>
                            </Link>
                        </Box>
                        <Box className='texts-first-container'>
                            <Typography variant='body1' sx={{color: '#fff', fontSize: 22, fontWeight: 600}}>"Escribir es tratar de entender,</Typography>
                            <Typography variant='body1' sx={{color: '#fff', fontSize: 22, fontWeight: 600}}> es tratar de reproducir lo irreproducible".</Typography>
                            <Typography variant='h3' sx={{color: '#9FD5D1', fontWeight: 700, fontSize: 35, marginTop: 2}}>Clarice Lispector</Typography>
                        </Box>
                    </Box>

                </div>

                <Box className='segundo-container-home'>
                    <Typography variant='h2' sx={{fontWeight: 700, textAlign: 'center', color: '#F6EEE9'}}>¿Quiénes somos?</Typography>
                    <Typography color='#F6EEE9' sx={{ fontSize: 22, textAlign: 'justify', marginTop: 3}}>Somos un proyecto cultural de lectores y escritores emergentes que encontraron un punto de convergencia en su pasión por la literatura y decidieron conjugar sus saberes para construir un espacio de creación literaria alternativo, plural y comunitario, donde la palabra sea una vorágine de historias que resignifiquen nuestro cohabitar y devenir en el mundo.</Typography>
                </Box>

                <Box className='third-container-home'>
                    <Box className='third-card-slider'>
                        <Swiper 
                            className="mySwiper" 
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
                            onActiveIndexChange={(swiper) => setIndexSlide(swiper.activeIndex)}
                        >
                            <SwiperSlide onClick={() => navigate('/')}><img src={primeraFoto} alt='Imagen 1.' /></SwiperSlide>
                            <SwiperSlide onClick={() => navigate('/')}><img src={segundaFoto} alt='Imagen 2.' /></SwiperSlide>
                            <SwiperSlide onClick={() => navigate('/')}><img src={terceraFoto} alt='Imagen 3.' /></SwiperSlide>
                        </Swiper>
                    </Box>

                    <Box>
                        <Typography variant='h3' sx={{color: '#4D4D4D', fontWeight: 700, textAlign: 'center', marginTop: 4}} className='third-title'>Hemos participado</Typography>
                        <Typography color='#4D4D4D' sx={{ fontSize: 22, textAlign: 'justify', marginTop: 2}}>A lo largo de 3 años en diversas activi- dades culturales, literarias y comuni- tarias, como lo son la FILBO (2019 y 2022), Lectura Bajo los Árboles (2019), así como la Feria Local de las Artes de Suba (2021), El primer Festival del Aguante y Festibaguya (2021). En el transcurso del 2022 participamos en un Picnic Literario en el Jardín Botánico de Bogotá.</Typography>
                    </Box>
                </Box>

                <Box className='fourth-container-home'>
                    <Typography color='#9FD5D1' sx={{fontSize: 22, fontWeight: 'bold'}} className='fourth-phrase-home'>“No quiero tener la terrible limitación de quien vive sólo
                    de lo que puede tener un sentido.
                    Yo no:
                    lo que quiero es una verdad inventada”.</Typography>
                </Box>

                <Box className='third-container-home' sx={{bgcolor: '#9FD5D1'}}>
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
                        className='mySwiper'
                        onActiveIndexChange={(swiper) => setIndexSlide(swiper.activeIndex)}
                    >
                        {
                            publicaciones.map((publicacion) => (
                                publicacion?.nombre === 'Colombia a Dos Miradas' ? (
                                  <SwiperSlide key={publicacion?.nombre}> 
                                    <a href={publicacion?.urlDocumento} target='_blank'>
                                      <img src={publicacion?.urlImagen} style={{marginTop: '2rem', cursor: 'pointer'}} alt="Colombia a dos miradas"/>
                                    </a>
                                  </SwiperSlide>
                                )
                                : publicacion?.nombre !== 'El tiempo en que no nos vimos' ? (
                                  <SwiperSlide 
                                    className={publicacion?.nombre === 'Ecos de Resistencia' ? (classes.imagen_ecos_de_resistencia):(classes.imagenes_lecturas_no_aplicadas)} 
                                    onClick={() => navigate('/')}
                                    key={publicacion?.nombre}
                                  >
                                    <img src={publicacion?.urlImagen} style={{cursor: 'pointer'}}/>
                                  </SwiperSlide>
                                ):(
                                    <SwiperSlide 
                                    className={classes.imagen_postal_slider} 
                                    onClick={() => navigate('/postales')}
                                    key={publicacion?.nombre}
                                    >
                                        <img src={publicacion?.urlImagen} style={{cursor: 'pointer'}}/>
                                    </SwiperSlide>
                                )
                            ))
                        }
                        {/* <SwiperSlide className={classes.imagen_ecos_de_resistencia} onClick={() => navigate('/')}>
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
                        <SwiperSlide className={classes.imagenes_lecturas_no_aplicadas} onClick={() => navigate('/')}>
                            <img src={selloLispector} style={{cursor: 'pointer'}} alt="Sello Lispector"/>
                        </SwiperSlide> */}
                    </Swiper>

                    <Box className={classes.datos_publicacion}>
                        <p className={classes.titulo_publicacion} onClick={onSubmit}>
                            {publicaciones[indexSlide]?.nombre}
                        </p>
                        <p className={classes.descripcion_publicacion}>
                            {publicaciones[indexSlide]?.descripcion}
                        </p>
                    </Box>
                </Box>
                    
            </Box>
        </AuthLayout>
    )
}

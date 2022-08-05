import React, {useEffect} from 'react'
import '.././index.css'
import { Alert, Box, Snackbar, Typography } from '@mui/material'
import { AuthLayout } from '../layouts/AuthLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import lasMilYUnaNoche from '../images/Las-mil-y-una-noche.jpeg';
import cicloDeCienciaFiccion from '../images/ciclo-de-ciencia-ficcion.jpeg';
import stanislawLew from '../images/stanislaw-lem.jpeg';
import primeraFoto from '../images/primera-foto.jpeg';
import segundaFoto from '../images/segunda-foto.jpeg';
import terceraFoto from '../images/tercera-imagen.jpeg';
import { publicacionData } from '../interfaces/publicacionData';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import colombiaADosMiradas from '../images/Colombia_a_dos_miradas.png'
import ecosDeResistencia from '../images/Ecos_de_resistencia_redimensionado.png'
import lecturasNoAplicadas1 from '../images/Lecturas_no_aplicadas_1.jpeg'
import lecturasNoAplicadas2 from '../images/Lecturas_no_aplicadas_2.jpeg'
import selloLispector from '../images/Sello_Lispector.jpg';
import { useStyles } from '../styles/stylesPageInicio';
import { useDispatch, useSelector } from 'react-redux';
import { getPublication } from '../redux/actions/publicationActions';
import { dataState } from '../redux/reducers';

const publications: publicacionData[] = [
    {
      nombre: 'Postales Abiertas',
      descripcion: "Con el objetivo de encontrar un lugar en el mundo del cual podamos sentirnos parte, con la esperanza de que nuestra voz no sea ese murmullo que apaga el viento y determinados a ser ese fulgor que alumbra así sea por un instante la llana oscuridad de la noche, nacen estas postales, acaso un intento de resistencia a una época, una sociedad, que amenaza con borrar toda huella del individuo.",
    },
    {
      nombre: 'Ecos de Resistencia',
      descripcion: "Esta publicación nace en un momento de gran tensión en el país. Caldeaba en Colombia un malestar nada nuevo en el 2021, algunos lo atribuían a la precariedad consecuencia de la pandemia, pero aquella raíz estaba arraigada de manera más profunda; al interior de cada uno de nosotros existía (existe) un deseo de cambio en las bases de un país acostumbrado a la violencia. Y nosotros, igual a quijotes que preparan sus armas, afilamos nuestras plumas como posición política ante una sociedad violenta y acorralada."
    },
    {
      nombre: 'Colombia a dos Miradas',
      descripcion: "Este era un lugar en blanco, un espacio que necesitaba ser colmado de vida como las calles de Colombia el 21 de noviembre de 2019. Las consignas que aún claman «¡Viva el Paro Nacional!» Son la razón primordial para hablar de una Colombia donde existen más de dos miradas, partiendo desde la nefasta gestión presidencial hasta el asesinato sistemático de líderes sociales en los territorios. A continuación, usted podrá descubrir una selección de relatos, poemas y piezas gráficas que aún convocan al gobierno a un diálogo nacional sin violencia, abusos, que incluya a todos los sectores sociales y la esperanza que nos han arrebatado."
    },
    {
      nombre: 'Lecturas no aplicadas I',
      descripcion: "Esta publicación nace en un momento de gran tensión en el país. Caldeaba en Colombia un malestar nada nuevo en el 2021, algunos lo atribuían a la precariedad consecuencia de la pandemia, pero aquella raíz estaba arraigada de manera más profunda; al interior de cada uno de nosotros existía (existe) un deseo de cambio en las bases de un país acostumbrado a la violencia. Y nosotros, igual a quijotes que preparan sus armas, afilamos nuestras plumas como posición política ante una sociedad violenta y acorralada."
    },
    {
      nombre: 'Lecturas no aplicadas II',
      descripcion: "Esta publicación nace en un momento de gran tensión en el país. Caldeaba en Colombia un malestar nada nuevo en el 2021, algunos lo atribuían a la precariedad consecuencia de la pandemia, pero aquella raíz estaba arraigada de manera más profunda; al interior de cada uno de nosotros existía (existe) un deseo de cambio en las bases de un país acostumbrado a la violencia. Y nosotros, igual a quijotes que preparan sus armas, afilamos nuestras plumas como posición política ante una sociedad violenta y acorralada."
    },
    {
      nombre: 'Postales Abiertas',
      descripcion: "Con el objetivo de encontrar un lugar en el mundo del cual podamos sentirnos parte, con la esperanza de que nuestra voz no sea ese murmullo que apaga el viento y determinados a ser ese fulgor que alumbra así sea por un instante la llana oscuridad de la noche, nacen estas postales, acaso un intento de resistencia a una época, una sociedad, que amenaza con borrar toda huella del individuo."
    },
];




export const InicioPage = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [indexSlide, setIndexSlide] = useState(0);
    const navigate = useNavigate();
    const publicacion = useSelector( ({publicacion} : dataState) => publicacion);
    const publicaciones = useSelector( ({publicaciones} : dataState) => publicaciones);
    const dispatch = useDispatch();

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
        dispatch(getPublication(publicaciones[0]?._id));
    })

    return (
        <AuthLayout>
            <Snackbar open={open} anchorOrigin={{vertical: 'top', horizontal: 'right'}} autoHideDuration={3000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {localStorage.getItem('login') === 'true' ? ('Sesión iniciada exitosamente. ¡Bienvenid@ al parche Taller Lispector!') : ('¡Cesión cerrada exitosamente! Clarice espera que vuelvas pronto.')}
                </Alert>
            </Snackbar>
            <Box>
                <div className='bg-container-home'>

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
                                  <SwiperSlide><img src={lasMilYUnaNoche} alt='Imagen de las mil y una noche.' /></SwiperSlide>
                                  <SwiperSlide><img src={cicloDeCienciaFiccion} alt='Imagen de ciclo de ciencia ficción.' /></SwiperSlide>
                                  <SwiperSlide><img src={stanislawLew} alt='Imagen de ciclo de stanislaw lem.' /></SwiperSlide>
                              </Swiper>
                              <Typography variant='h4' className='text-card-slider' sx={{fontWeight: 600}}>Proximas Sesiones</Typography>
                            </Link>
                        </Box>
                    </Box>

                </div>

                <Box className='segundo-container-home'>
                    <Typography variant='h2' sx={{fontWeight: 700, textAlign: 'center', color: '#F6EEE9'}}>¿Quiénes somos?</Typography>
                    <Typography color='#F6EEE9' sx={{ fontSize: 22, textAlign: 'justify'}}>Somos un proyecto cultural de lectores y escritores emergentes que encontraron un punto de convergencia en su pasión por la literatura y decidieron conjugar sus saberes para construir un espacio de creación literaria alternativo, plural y comunitario, donde la palabra sea una vorágine de historias que resignifiquen nuestro cohabitar y devenir en el mundo.</Typography>
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
                        <Typography variant='h3' sx={{color: '#4D4D4D', fontWeight: 700, textAlign: 'center', marginTop: 3}} className='third-title'>Hemos participado</Typography>
                        <Typography color='#4D4D4D' sx={{ fontSize: 22, textAlign: 'justify'}}>A lo largo de 3 años en diversas activi- dades culturales, literarias y comuni- tarias, como lo son la FILBO (2019 y 2022), Lectura Bajo los Árboles (2019), así como la Feria Local de las Artes de Suba (2021), El primer Festival del Aguante y Festibaguya (2021). En el transcurso del 2022 participamos en un Picnic Literario en el Jardín Botánico de Bogotá.</Typography>
                    </Box>
                </Box>

                <Box className='fourth-container-home'>
                    <Typography color='#9FD5D1' sx={{fontSize: 22,}} className='fourth-phrase-home'>“No quiero tener la terrible limitación de quien vive sólo
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
                        <SwiperSlide className={classes.imagenes_lecturas_no_aplicadas} onClick={() => navigate('/')}>
                            <img src={selloLispector} style={{cursor: 'pointer'}} alt="Sello Lispector"/>
                        </SwiperSlide>
                    </Swiper>

                    <Box className={classes.datos_publicacion}>
                        <p className={classes.titulo_publicacion} onClick={onSubmit}>
                            {publications[indexSlide + 1].nombre}
                        </p>
                        <p className={classes.descripcion_publicacion}>
                            {publications[indexSlide + 1].descripcion}
                        </p>
                    </Box>
                </Box>
                    
            </Box>
        </AuthLayout>
    )
}

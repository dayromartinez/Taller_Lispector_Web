import React, {useEffect} from 'react'
import '.././index.css'
import { Alert, Box, Snackbar, Typography } from '@mui/material'
import { AuthLayout } from '../layouts/AuthLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import lasMilYUnaNoche from '../images/Las-mil-y-una-noche.jpeg';
import cicloDeCienciaFiccion from '../images/ciclo-de-ciencia-ficcion.jpeg';
import stanislawLew from '../images/stanislaw-lem.jpeg';
import primeraFoto from '../images/primera-foto.jpeg';
import segundaFoto from '../images/segunda-foto.jpeg';
import terceraFoto from '../images/tercera-imagen.jpeg';
import ecosDeResistencia from '../images/Ecos_de_resistencia_redimensionado.png';
import colombiaADosMiradas from '../images/Colombia_a_dos_miradas.png';
import lecturasNoAplicadas2 from '../images/Lecturas_no_aplicadas_2.jpeg';
import lecturasNoAplicadas1 from '../images/Lecturas_no_aplicadas_1.jpeg';

export const InicioPage = () => {

    const [open, setOpen] = React.useState(false);

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

    useEffect(() => {
        openAlert();
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
                            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                <SwiperSlide><img src={lasMilYUnaNoche} alt='Imagen de las mil y una noche.' /></SwiperSlide>
                                <SwiperSlide><img src={cicloDeCienciaFiccion} alt='Imagen de ciclo de ciencia ficción.' /></SwiperSlide>
                                <SwiperSlide><img src={stanislawLew} alt='Imagen de ciclo de stanislaw lem.' /></SwiperSlide>
                            </Swiper>
                            <Typography variant='h4' className='text-card-slider' sx={{fontWeight: 600}}>Proximas Sesiones</Typography>
                        </Box>
                    </Box>

                </div>

                <Box className='segundo-container-home'>
                    <Typography variant='h2' sx={{fontWeight: 700, textAlign: 'center', color: '#F6EEE9'}}>¿Quiénes somos?</Typography>
                    <Typography color='#F6EEE9' sx={{ fontSize: 22, textAlign: 'justify'}}>Somos un proyecto cultural de lectores y escritores emergentes que encontraron un punto de convergencia en su pasión por la literatura y decidieron conjugar sus saberes para construir un espacio de creación literaria alternativo, plural y comunitario, donde la palabra sea una vorágine de historias que resignifiquen nuestro cohabitar y devenir en el mundo.</Typography>
                </Box>

                <Box className='third-container-home'>
                    <Box className='third-card-slider'>
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide><img src={primeraFoto} alt='Imagen 1.' /></SwiperSlide>
                            <SwiperSlide><img src={segundaFoto} alt='Imagen 2.' /></SwiperSlide>
                            <SwiperSlide><img src={terceraFoto} alt='Imagen 3.' /></SwiperSlide>
                        </Swiper>
                    </Box>

                    <Box>
                        <Typography variant='h3' sx={{color: '#4D4D4D', fontWeight: 700, textAlign: 'center'}} className='third-title'>Hemos participado</Typography>
                        <Typography color='#4D4D4D' sx={{ fontSize: 22, textAlign: 'justify'}}>A lo largo de 3 años en diversas activi- dades culturales, literarias y comuni- tarias, como lo son la FILBO (2019 y 2022), Lectura Bajo los Árboles (2019), así como la Feria Local de las Artes de Suba (2021), El primer Festival del Aguante y Festibaguya (2021). En el transcurso del 2022 participamos en un Picnic Literario en el Jardín Botánico de Bogotá.</Typography>
                    </Box>
                </Box>

                <Box className='fourth-container-home'>
                    <Typography color='#9FD5D1' sx={{fontSize: 22,}} className='fourth-phrase-home'>“No quiero tener la terrible limitación de quien vive sólo
                    de lo que puede tener un sentido.
                    Yo no:
                    lo que quiero es una verdad inventada”.</Typography>
                </Box>

                <Box>
                    <Typography variant='h3' sx={{fontWeight: 700, textAlign: 'center'}}>Nuestras publicaciones</Typography>
                    <Box className='fiveth-container-imgs'>
                        <img src={ecosDeResistencia} alt="Imagen de ecos de resistencia" />
                        <img src={colombiaADosMiradas} alt="Imagen Colombia a dos miradas" />
                        <img src={lecturasNoAplicadas2} alt="Imagen de lecturas no aplicadas 2" />
                        <img src={lecturasNoAplicadas1} alt="Imagen de lecturas no aplicadas 1" />
                    </Box>
                </Box>
                    
            </Box>
        </AuthLayout>
    )
}

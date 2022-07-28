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


export const InicioPage = () => {

    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {

        setOpen(false);
    };

    const openAlert = () => {
        if(localStorage.getItem('login') === 'true') {
            setOpen(true);

            localStorage.removeItem('login');
        }
    }

    useEffect(() => {
        openAlert();
    })

    return (
        <AuthLayout>
            <Snackbar open={open} anchorOrigin={{vertical: 'top', horizontal: 'right'}} autoHideDuration={3000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Sesión iniciada exitosamente. ¡Bienvenid@ al parche Taller Lispector!
                </Alert>
            </Snackbar>
            <Box>
                
                <div className='bg-container-home'>

                    <Box className='first-container-home'>
                        <Box className='texts-first-container'>
                            <Typography variant='body1' sx={{color: '#fff', fontSize: 20, fontWeight: 600}}>"Escribir es tratar de entender,</Typography>
                            <Typography variant='body1' sx={{color: '#fff', fontSize: 20, fontWeight: 600}}> es tratar de reproducir lo irreproducible".</Typography>
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

                    <Box>
                        
                    </Box>
                </div>
                    
            </Box>
        </AuthLayout>
    )
}

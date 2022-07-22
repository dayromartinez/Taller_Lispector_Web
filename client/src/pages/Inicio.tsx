import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import imagenClarice from './../images/Clarice1.jpg'
import '.././index.css'
import { NuestrasPublicaciones } from '../components/NuestrasPublicaciones'
import { dataState } from '../redux/reducers'
import { PublicLayout } from '../layouts/PublicLayout';
import { Alert, Snackbar } from '@mui/material'


export const InicioPage = () => {
    const usuario = useSelector((state : dataState) => state.usuario);

    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setTimeout(() => {
            setOpen(false);
        }, 4000)
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
        <PublicLayout>
            <Snackbar open={open} anchorOrigin={{vertical: 'top', horizontal: 'right'}} autoHideDuration={3000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Sesión iniciada exitosamente. ¡Bienvenid@ de nuevo al parche Taller Lispector!
                </Alert>
            </Snackbar>
            <div className='contenedor_frase_lispector'>
                <img src={imagenClarice} className="imgClarice"/>
                <div className='nombre_frase_lispector'>
                    <h5 className='text-2xl my-7 mr-2 italic'>«Nací dura, heróica, solitaria y de pié».</h5>
                    <h5 className='libro_frase'>Agua Viva (1975)</h5>
                </div>
            </div>
            {/* <h3 className='text-3xl font-bold' id='nombre_clarice_lispector'>Clarice Lispector</h3>
            <div className='bg-slate-500 my-10 py-7 w-full'>
                <h2 className='text-3xl font-bold'>Quiénes somos?</h2>
                <h2 className='text-3xl font-bold'>Qué hacemos?</h2>
            </div>
            <div className='flex justify-between'>
                <h2 className='text-3xl font-bold mx-10'>Hemos estado en:</h2>
                <div className='mx-10'>
                    (Acá va el carrusel de imgs)
                </div>
            </div>
            <div className='bg-slate-500 my-6 py-5 w-full'>
                <h1 className='text-3xl font-bold'>Frase Lispector</h1>
            </div>
            <div className='mb-10'>
                <NuestrasPublicaciones />
                <div className='flex justify-between mt-10'>
                    <div className='mx-10'>Espacio de CARRUSEL</div>
                    <h1 className='text-2xl font-bold mx-10'>Frase Lispector</h1>
                </div>
            </div> */}
        </PublicLayout>
    )
}

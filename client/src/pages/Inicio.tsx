import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import imagenClarice from './../images/Clarice1.jpg'
import '.././index.css'
import { dataState } from '../redux/reducers'
import { PublicLayout } from '../layouts/PublicLayout';
import { Alert, Snackbar } from '@mui/material'


export const InicioPage = () => {
    const usuario = useSelector((state : dataState) => state.usuario);

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
            
        </PublicLayout>
    )
}

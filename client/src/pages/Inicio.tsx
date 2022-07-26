import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import imagenClarice from './../images/Clarice1.jpg'
import '.././index.css'
import { dataState } from '../redux/reducers'
import { PublicLayout } from '../layouts/PublicLayout';
import { Alert, Box, Container, Snackbar } from '@mui/material'
import { AuthLayout } from '../layouts/AuthLayout';
import imagenEncabezado from '../images/Clarice_Pagina_Inicio_Encabezado_Final.png';


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
                <Box >
                    
                </Box>

                <div className='bg-container-home' />
                    

            </Box>

            {/* <img src={imagenEncabezado} />  */}
            
        </AuthLayout>
    )
}

import { makeStyles } from '@material-ui/core';
import { coloresPaleta } from './coloresPaleta';


export const useStyles = makeStyles((theme) => ({
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
    titulo_sesiones_swiper: {
        marginTop: '3rem', 
        color: coloresPaleta.gris, 
        fontWeight: 'bold',
        fontSize: '3.5rem',
        textAlign: 'center',
        width: '90%',
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
        width: 350,
        height: 350,
        },
    },
    container_ciclo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
    },
    descripcion_ciclo: {
        textAlign: 'justify', 
        width: '60%', 
        marginTop: '2rem',
        color: coloresPaleta.gris,
        fontWeight: 500,
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
        width: '70%',
        },
    },
    container_piezas_ciclo: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        padding: '3rem 0rem 3rem 0rem',
        width: '95%',
    },
    container_img_data_sesion: {
        display: 'flex', 
        flexDirection: 'column',
    },
    imagen_sesion: {
        boxShadow: '11px 10px 8px rgba(0, 0, 0, 0.603)',
    },
    container_sesion_data: {
        display: 'flex',
        justifyContent: 'center'
    },
    container_data_sesion_mobile: {
        width: '90%'
    },
    titulo_sesion: {
        color: coloresPaleta.gris, 
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginTop: '2rem',
        textAlign: 'center',
        '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem',
            fontSize: '1.5rem',
        },
    },
    fecha_sesion: {
        color: coloresPaleta.gris, 
        fontWeight: 600,
        fontSize: '1rem',
        marginTop: '0.5rem',
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
        marginTop: '3rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1.5rem',
        },
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
        fontWeight: 500,
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
            width: '80%',
            margin: '3rem 1rem 3rem 1rem',
        },
    }
}));
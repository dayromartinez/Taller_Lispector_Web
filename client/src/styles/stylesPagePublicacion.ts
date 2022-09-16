import { makeStyles } from '@material-ui/core';
import { coloresPaleta } from './coloresPaleta';


export const useStyles = makeStyles((theme) => ({

    container_general: {
        marginTop: '6rem',
        width: '98.7vw',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0rem',
            width: '100vw',
        },
    },

    container_titulo_publicacion: {
        textAlign: 'center',
        color: coloresPaleta.aguaMarina,
        fontWeight: 'bold',
        fontSize: '3.5rem',
        boxShadow: '-3px 5px 8px rgba(0, 0, 0, 0.503)',
        padding: '2rem 0rem 3rem 0rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
        },
    },

    first_container_publicacion: {
        backgroundColor: coloresPaleta.blanco,
        margin: '5px 0px',
        padding: '1rem 50px',
        justifyContent: 'center',
    },

    imagen_publicacion: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
        width: 350,
        height: 450,
    },

    contenedor_imagen: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
    },

    tituloPublicacion: {
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

    container_descripcion_publicacion: {
        display: 'flex', 
        justifyContent: 'center',
    },

    descripcion_publicacion: {
        textAlign: 'justify', 
        width: '70%', 
        marginTop: '2rem',
        marginBottom: '3rem',
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            width: '90%',
        },
    },

    containerPdf: {
        display: 'flex',
        justifyContent: 'center',
    },

    pdfDocument: {
        width: '70%',
        height: '850px',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            height: '500px'
        },
    },

    titulo_comentarios: {
        textAlign: 'center',
        color: coloresPaleta.aguaMarina,
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginTop: '5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.7rem',
        }
    },

    titulo_documento: {
        margin: '2rem 0', 
        color: coloresPaleta.gris, 
        fontWeight: 'bold',
        fontSize: '2.5rem',
        textAlign: 'center',
        '&:hover': {
        color: coloresPaleta.gris
        },
        [theme.breakpoints.down('xs')]: {
        margin: '0rem 0 2rem 0', 
        fontSize: '1.5rem',
        },
    }

}));
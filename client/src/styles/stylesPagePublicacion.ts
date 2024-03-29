import { makeStyles } from '@material-ui/core';
import { coloresPaleta } from './coloresPaleta';
import { width } from '@mui/system';


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
        margin: '3rem 0', 
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
    },
    
    textoAccesoPublicacion: {
        textAlign: 'center',
        margin: '3rem 11rem',
        fontWeight: 'bold',
        color: coloresPaleta.gris,
        fontSize: '1.3rem',
        [theme.breakpoints.down('xs')]: {
            margin: '2rem 1rem',
            fontSize: '.8rem',
        },
    },

    bannerEcos: {
        margin: '1rem auto',
        width: '70%',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            margin: '0.5rem auto',
        }
    },

    containerImgsFlex: {
        display: 'flex',
        margin: '0 auto',
        gap: '1rem',
        width: '70%',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            gap: '0.5rem',
        }
    },

    img_flex: {
        width: '32.5%',
        [theme.breakpoints.down('xs')]: {
            width: '32%'
        },
        [theme.breakpoints.down('lg')]: {
            width: '32.1%'
        }
    },

    ilustradora_link: {
        color: coloresPaleta.aguaMarina,
        fontWeight: 700,
        fontSize: '1.5rem',
        textAlign: 'center',
        marginBottom: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            marginBottom: '1rem',
        }
    },

    hipervinculo: {
        '&:hover': {
            color: coloresPaleta.gris
        },
    }

}));
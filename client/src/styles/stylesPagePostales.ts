import { makeStyles } from '@material-ui/core';
import { coloresPaleta } from './coloresPaleta';


export const useStylesPostales = makeStyles((theme) => ({

    container_general: {
        marginTop: '6rem',
        width: '98.7vw',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0rem',
            width: '100vw',
        },
    },

    container_titulo_postales: {
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

    first_container_postales: {
        backgroundColor: coloresPaleta.blanco,
        margin: '5px 0px',
        padding: '1rem 50px',
        justifyContent: 'center',
    },

    postal_Lispector: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
    },
    tituloPostales: {
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
    container_descripcion_postales: {
        display: 'flex', 
        justifyContent: 'center',
    },
    descripcion_postales: {
        textAlign: 'justify', 
        width: '70%', 
        marginTop: '2rem',
        marginBottom: '3rem',
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            width: '70%',
        },
    },
    imagen_postal: {
        [theme.breakpoints.down('xs')]: {
        maxWidth: '50%',
        maxHeight: '50%',
        },
    },

    container_texto_postales: {
        padding: '35px 100px',
        [theme.breakpoints.down('xs')]: {
            padding: '35px 25px',
        }
    },

    titulo_postales: {
        textAlign: 'center',
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        fontSize: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
        }
    },

    textos_postales: {
        color: '#4D4D4D',
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },

    titulo_otras_postales : {
        textAlign: 'center',
        color: coloresPaleta.aguaMarina,
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginTop: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.7rem',
        }
    },

    imagenes_catalogo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        cursor: 'pointer',
    },

    nombre_postal_catalogo: {
        width: 300,
        textAlign: 'center',
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginTop: '0.7rem',
        cursor: 'pointer',
        '&:hover': {
            color: coloresPaleta.aguaMarina
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }
    },

    nombre_autor_postal_catalogo: {
        width: 300,
        textAlign: 'center',
        color: coloresPaleta.gris,
        fontSize: '1rem',
        marginTop: '0.3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.5rem',
        }
    }

}));
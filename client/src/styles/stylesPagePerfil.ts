import { makeStyles } from '@material-ui/core';
import { coloresPaleta } from './coloresPaleta';


export const useStylesPerfil = makeStyles((theme) => ({

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

    container_general_page: {
        textAlign: 'justify', 
        width: '70%', 
        margin: '0 auto',
        marginTop: '5rem',
        marginBottom: '3rem',
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            width: '70%',
        },
    },

    container_content: {
        display: 'flex',
        alignItems: 'center'
    },

    name_and_email: {
        marginLeft: 20,
        lineHeight: '20px'
    },

    container_mis_publicaciones: {
        textAlign: 'justify', 
        width: '70%', 
        margin: '0 auto',
        marginTop: '10rem',
        marginBottom: '3rem',
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            width: '70%',
        },
    },

    titulo_mis_publicaciones: {
        textAlign: 'center', 
        fontSize: '2.5rem', 
        color: coloresPaleta.aguaMarina,
    },

    container_grilla: {
        marginTop: '3rem',
        display: 'block',
    },

    imgPublicacion: {
        width: 300,
        height: 'auto',
        alignSelf: 'center',
        cursor: 'pointer',
        marginRight: 25
    }

}));
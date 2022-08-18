import { coloresPaleta } from "./coloresPaleta";
import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles((theme) => ({
    titulo_textArea: {
        color: coloresPaleta.gris,
        fontWeight: 'bold', 
        fontSize: '1.7rem',
        [theme.breakpoints.down("xs")]: {
            margin: '1rem 2rem',
            fontSize: '1.3rem',
        }
    },
    textArea: {
        width: '50vw', 
        borderRadius: 10, 
        margin: '1rem 0rem 0rem 6rem',
        [theme.breakpoints.down("xs")]: {
            margin: '0rem 2rem',
            width: '85vw',
            heigth: '20rem',
            fontSize: '.9rem',
        }
    },
    container_comentarios: {
        margin: '3rem 0rem 0rem 6rem',
        [theme.breakpoints.down("xs")]: {
            margin: '1rem 2rem',
        } 
    },
    nombre_usuario: {
        fontWeight: 'bold',
        margin: '0rem 1rem',
        fontSize: '1.3rem',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem',
            lineHeight: '3rem',
        }
    },
    info_usuario : {
        display: 'flex',
        lineHeight: '3rem',
    },
    container_info_raiting: {
        display: 'flex', 
        justifyContent: 'space-between',
        width: '50vw',
        [theme.breakpoints.down("xs")]: {
            width: '85vw',
        }
    },
    fecha_comentario: {
        color: coloresPaleta.gris,
        fontSize: '1rem',
        margin: '.5rem 0rem',
        fontStyle: 'italic',
    },
    comentario: {
        margin: '1rem 0rem',
    },
    container_comentario: {
        marginBottom: 5, 
        borderBottom: `1px solid ${coloresPaleta.gris}`, 
        width: '50vw',
        [theme.breakpoints.down("xs")]: {
            width: '85vw',
            marginTop: '1.5rem',
        }
    },
    raiting: {
        marginTop: '.8rem',
        [theme.breakpoints.down("xs")]: {
            marginTop: '.6rem',
        }
    },
    contenedor_nuevo_comentario: {
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '50vw',
        margin: '3rem 0rem 0rem 6rem',
        [theme.breakpoints.down("xs")]: {
            margin: '1rem 0rem 0rem 0rem',
            width: '93vw',
        } 
    },
    raiting_nuevo_comentario: {
        [theme.breakpoints.down("xs")]: {
            margin: '1.2rem 0rem 0rem 0rem',
        } 
    },
    sin_comentarios: {
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        margin: '3rem 6rem',
        fontSize: '1.3rem',
        [theme.breakpoints.down("xs")]: {
            margin: '3rem 1rem 2rem 3rem',
            fontSize: '.9rem',
        } 
    },
    mensaje_error: {
        color: 'rgb(239 68 68)',
        fontSize: '1rem',
        fontWeight: 600,
        margin: '.5rem 3rem',
        [theme.breakpoints.down("xs")]: {
            margin: '.5rem 0rem 2rem 1rem',
            fontSize: '.8rem',
        } 
    },
    container_boton: {
        display: 'flex', 
        justifyContent: 'right',
        width: '50vw',
        margin: '0rem 6rem',
        [theme.breakpoints.down("xs")]: {
            width: '93vw',
            margin: '-1rem 0rem 3rem 0rem',
        } 
    },
    container_fecha_opciones_comentario: {
        display: 'flex', 
        justifyContent: 'space-between'
    }
}));
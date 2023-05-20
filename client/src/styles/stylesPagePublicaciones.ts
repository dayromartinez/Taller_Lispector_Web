import { makeStyles } from '@material-ui/core';
import { coloresPaleta } from './coloresPaleta';

export const useStyles = makeStyles((theme) => ({
    container_general: {
        marginTop: '6rem',
        width: '99.7vw',
        [theme.breakpoints.down('xs')]: {
        marginTop: '0rem',
        width: '100vw',
        },
    },
    container_titulo_publicaciones: {
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
    postal_Lispector: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
    },
    creditosIlustracion: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '1.5rem',
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8rem',
        },
    },
    textoCreditosPostal1: {
        color: coloresPaleta.aguaMarina,
        fontWeight: 'bold'
    },
    textoCreditosPostal2: {
        color: coloresPaleta.gris,
        fontWeight: 'bold'
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
        width: '40%', 
        marginTop: '2rem',
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
        width: '70%',
        },
    },
    imagen_postal: {
        maxWidth: '40%',
        maxHeight: '40%',
        [theme.breakpoints.down('xs')]: {
        maxWidth: '70%',
        maxHeight: '70%',
        },
    },
    container_publicaciones: {
        marginTop: '2rem',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        backgroundColor: coloresPaleta.aguaMarina,
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
        paddingTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        },
    },
    imagenes_lecturas_no_aplicadas: {
        display: 'flex', 
        justifyContent: 'center',
        width: 250,
    },
    swiper: {
        width: 500,
        height: 500,
        [theme.breakpoints.down('xs')]: {
        width: 300,
        height: 300,
        marginBottom: '3rem',
        },
    },
    imagen_postal_slider: {
        display: 'flex',
    },
    imagen_ecos_de_resistencia: {
        display: 'flex',
        justifyContent: 'center',
    },
    descripcion_publicacion: {
        textAlign: 'justify', 
        width: '70%', 
        color: coloresPaleta.gris,
        fontWeight: 500,
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
        width: '80%',
        fontWeight: 600,
        },
    },
    datos_publicacion: {
        width: '50%',
        marginRight: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
        marginRight: '0rem',
        width: '90%'
        },
    },
    titulo_publicacion: {
        color: coloresPaleta.gris, 
        fontWeight: 'bold',
        fontSize: '3.5rem',
        marginBottom: '1rem',
        textAlign: 'center',
        marginTop: '-1rem',
        cursor: 'pointer',
        '&:hover': {
        color: coloresPaleta.blanco
        },
        [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
        },
    },
    publicaciones: {
        backgroundColor: coloresPaleta.aguaMarina,
        paddingTop: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '.5rem'
    },
    camuflaje_Colombia_a_dos_miradas: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        padding: '5.5rem 1rem 5.5rem 1rem',
        marginBottom: '0rem',
        boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.603)'
    },
    titulos_publicaciones_finales: {
        color: coloresPaleta.blanco, 
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        textAlign: 'center',
        '&:hover': {
        color: coloresPaleta.gris,
        cursor: 'pointer',
        },
    },
    container_alerta: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: coloresPaleta.blanco,
        boxShadow: '24',
        padding: 25,
        borderRadius: '7px',
        [theme.breakpoints.down('xs')]: {
            width: 300,
        },
    },
    titulo_alerta: {
        textAlign: 'center', 
        color: coloresPaleta.aguaMarina, 
        fontWeight: 'bold',
        fontSize: '4rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem',
        },
    },
    boton_alerta_activado: {
        backgroundColor: coloresPaleta.aguaMarina,
        width: '50%',
        borderRadius: '7px',
        fontSize: '1.5rem',
        padding: 7,
        fontWeight: 'bold',
        color: coloresPaleta.gris,
        '&:hover': {
            color: 'white',
            backgroundColor: '#1d4ed8'
        },
    },
    boton_alerta_desactivado: {
        backgroundColor: coloresPaleta.gris,
        width: '50%',
        borderRadius: '7px',
        fontSize: '1.5rem',
        padding: 7,
        fontWeight: 'bold',
        color: coloresPaleta.blanco,
    },
    inputsCodigoPublicacion: {
        borderRadius: '7px', 
        border: 'none', 
        marginBottom: '2rem', 
        width: '4.5rem', 
        textAlign: 'center', 
        color: coloresPaleta.gris, 
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            width: '3.4rem',
            fontSize: '.9rem',
            marginBottom: '1rem',
            textAlign: 'left',
            paddingLeft: '.4rem',
            paddingRight: '.3rem',
            paddintTop: '.3rem',
            paddingBottom: '.4rem',
        }
    },
    guionCodigoPublicacion: {
        marginTop: '.4rem', 
        marginLeft: '.5rem', 
        marginRight: '.5rem',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '.2rem', 
            marginRight: '.2rem',
        }
    }
}));
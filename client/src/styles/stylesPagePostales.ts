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
    creditosIlustracion: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '1.5rem',
        fontSize: '1.3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.9rem',
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
        maxWidth: '40%',
        maxHeight: '40%',
        [theme.breakpoints.down('xs')]: {
        maxWidth: '70%',
        maxHeight: '70%',
        },
    },

    container_texto_postales: {
        padding: '5rem 8rem 10rem 8rem',
        [theme.breakpoints.down('xs')]: {
            padding: '2.5rem 4rem 8rem 4rem',
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

    titulo_dimension_postales: {
        textAlign: 'center',
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        fontSize: '5rem',
        paddingBottom: '3rem',
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
        fontSize: '3.5rem',
        marginTop: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
        }
    },

    titulo_dimension_otras_postales : {
        textAlign: 'center',
        color: coloresPaleta.aguaMarina,
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginTop: '4rem',
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
            fontSize: '1.2rem',
        }
    },

    nombre_autor_postal_catalogo: {
        width: 300,
        textAlign: 'center',
        color: coloresPaleta.gris,
        fontSize: '1rem',
        marginTop: '0.3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem',
        }
    },

    container_catalogo_postales: {
        margin: '0 auto',
        padding: '0 0rem 0 6rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gridGap: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0 0',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }
    },

    swiper_postales: {
        width: '800px',
        height: '885px',
    },

    titulo_textArea: {
        color: coloresPaleta.gris,
        fontWeight: 'bold', 
        fontSize: '1.7rem',
        margin: '3rem 2rem 2rem 4rem',
        [theme.breakpoints.down("xs")]: {
            margin: '1rem 2rem',
            fontSize: '1.2rem',
        }
    },

    contenedor_imagen_aliados: {
        display: 'grid',
        placeItems: 'center',
        fontWeight: 'bold',
        fontSize: '3rem',
        marginTop: '5rem',
        marginBottom: '10rem',
        color: coloresPaleta.gris,
        [theme.breakpoints.down('xs')]: {
            margin: '3rem 2rem',
            fontSize: '1.5rem',
        },
    },

    imagen_aliados_agua_viva: {
        marginTop: '3rem',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem',
        },
    },

    swiper_horizontal_postales: {
        width: 800,
        height: 400,
        [theme.breakpoints.down('xs')]: {
            width: 300,
            height: 200,
        }
    },
}));
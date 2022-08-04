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
container_titulo_publicaciones: {
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
    [theme.breakpoints.down('xs')]: {
    maxWidth: '50%',
    maxHeight: '50%',
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
    padding: '5rem 5rem 5rem 5rem',
    display: 'flex',
    justifyContent: 'space-between',
},
camuflaje_Colombia_a_dos_miradas: {
    backgroundColor: 'white',
    height: '85%',
    paddingTop: '6rem',
    marginBottom: '2rem',
    boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.603)'
},
titulos_publicaciones_finales: {
    color: coloresPaleta.blanco, 
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '2rem',
    textAlign: 'center',
    '&:hover': {
    color: coloresPaleta.gris
    },
}
}));
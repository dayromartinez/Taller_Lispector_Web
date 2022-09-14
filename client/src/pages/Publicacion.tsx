import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../components/Footer';
import NavBarDesktop from '../components/NavBarDesktop';
import { getPublication } from '../redux/actions/publicationActions';
import { dataState } from '../redux/reducers';
import { useStyles } from '../styles/stylesPagePublicacion';
import { publicacionData } from '../interfaces/publicacionData';
import { Commentaries } from '../components/Commentaries';
import { AuthLayout } from '../layouts/AuthLayout';



export const Publicacion = ({nombrePublicacion}) => {

    const classes = useStyles();
    const [sizeScreen, setSizeScreen] = useState(window.innerWidth); 
    const publicaciones = useSelector(({publicaciones} : dataState) => publicaciones);
    const publicacion = useSelector( ({publicacion} : dataState) => publicacion);
    const dispatch = useDispatch();

    
    
    const getPublicacion = () => {

        const publication = publicaciones.filter((publicacion) => {
            return publicacion.nombre === nombrePublicacion
        })

        if(publication.length > 0) {
            dispatch(getPublication(publication[0]?._id))
        }
    }

    useEffect(() => {
        setSizeScreen(window.innerWidth);
        getPublicacion();
    }, [publicaciones]);
    
    return (
        <AuthLayout>
            <Box className={classes.container_general}>
                <Box className={classes.container_titulo_publicacion}>
                    {publicacion?.nombre}
                </Box>
                <Box>
                    <Box className={classes.contenedor_imagen} >
                        <img className={classes.imagen_publicacion} src={publicacion?.urlImagen} alt="Publicacion Lispector" />
                    </Box>
                    
                    <Box className={classes.container_descripcion_publicacion}>
                        <p className={classes.descripcion_publicacion}>
                            {publicacion?.descripcion}
                        </p>
                    </Box>
                    <Box className={classes.containerPdf}>
                        <iframe src={publicacion?.urlDocumento} className={classes.pdfDocument}></iframe>
                    </Box>
                </Box>
                <Box>
                    <Box className={classes.titulo_comentarios}>Comentarios para esta publicación</Box>
                    <Commentaries comentarios={publicacion?.comentarios?.reverse()} publicacion={publicacion} />
                </Box>
            </Box>
        </AuthLayout>
    )
}

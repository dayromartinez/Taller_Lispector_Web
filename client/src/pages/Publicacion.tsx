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
import { Documento } from '../components/Documento';

import ecos1 from '../images/Ecos1.png';
import ecos2 from '../images/Ecos2.png';
import ecos3 from '../images/Ecos3.png';
import ecos4 from '../images/Ecos4.png';
import ecos5 from '../images/Ecos5.png';
import ecos6 from '../images/Ecos6.png';
import ecos7 from '../images/Ecos7.png';
import ecos8 from '../images/Ecos8.png';
import ecos9 from '../images/Ecos9.png';
import ecos10 from '../images/Ecos10.png';



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

                    <Box>
                        <p className={classes.titulo_documento}>Publicación</p>
                    </Box>
                    { nombrePublicacion !== 'Ecos de Resistencia' 
                        ? (<Documento nombrePublicacion={nombrePublicacion}/>) 
                        : ( <Box>
                            <p className={classes.ilustradora_link}>Ilustraciones y fotografías de esta publicación por: <a className={classes.hipervinculo} href='https://www.behance.net/gallery/135575365/Proyecto-Editorial-Fanzine-Ecos-de-Resistencia' target='_blank'>Luisa Burgos</a></p>
                            <img src={ ecos2 } alt="Ecos de resistencia" className={classes.bannerEcos} />
                            <img src={ ecos1 } alt="Ecos de resistencia" className={classes.bannerEcos} />
                            <Box className={classes.containerImgsFlex}>
                                <img src={ ecos4 } alt="Ecos de resistencia" className={classes.img_flex} />
                                <img src={ ecos5 } alt="Ecos de resistencia" className={classes.img_flex} />
                                <img src={ ecos6 } alt="Ecos de resistencia" className={classes.img_flex} />
                            </Box>
                            <img src={ ecos3 } alt="Ecos de resistencia" className={classes.bannerEcos} />
                            <Box className={classes.containerImgsFlex}>
                                <img src={ ecos7 } alt="Ecos de resistencia" className={classes.img_flex} />
                                <img src={ ecos8 } alt="Ecos de resistencia" className={classes.img_flex} />
                                <img src={ ecos9 } alt="Ecos de resistencia" className={classes.img_flex} />
                            </Box>
                            <img src={ ecos10 } alt="Ecos de resistencia" className={classes.bannerEcos} />
                        </Box>
                    )}
                    <Box>
                        <p className={classes.textoAccesoPublicacion}>Para acceder a la publicación completa, puedes contactarnos a través de nuestras redes sociales. Encontrarás nuestras redes en la sección inferior de esta página. ¡Gracias por apoyar la literatura independiente!</p>
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

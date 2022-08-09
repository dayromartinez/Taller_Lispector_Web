import React, { useState, useEffect } from 'react';
import { AuthLayout } from '../layouts/AuthLayout';
import { Box, Typography } from '@mui/material';
import { coloresPaleta } from '../styles/coloresPaleta';
import { useStylesPostales } from '../styles/stylesPagePostales';
import { useSelector, useDispatch } from 'react-redux';
import { dataState } from '../redux/reducers/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { getPublication } from '../redux/actions/publicationActions';
import { Markup } from 'interweave';


export const PostalesPage = () => {

    const classes = useStylesPostales();
    const [indexSlide, setIndexSlide] = useState(0);
    const [textPostal, setTextPostal] = useState(''); 
    const publicaciones = useSelector(({publicaciones} : dataState) => publicaciones);
    const publicacion = useSelector( ({publicacion} : dataState) => publicacion);
    const dispatch = useDispatch();
    //var listImages = [];
    const [listImages, setListImages] = useState([]); 

    //console.log('publicacion', publicacion);

    const onChangeSlide = (swiper) => {
        setIndexSlide(swiper.activeIndex);
        console.log('swiper active index', swiper.activeIndex)
        setTextPostal(publicacion?.contenido?.[swiper.activeIndex]['texto']);
        console.log('indexSlide', indexSlide)
    }

    useEffect(() => {
        if(publicaciones.length > 0){
            dispatch(getPublication(publicaciones[0]?._id));
        }

        if(publicacion?.contenido?.length > 0 && textPostal === ''){
            setTextPostal(publicacion.contenido[0]['texto']);
            setListImages(publicacion?.contenido[7]['urlImagen'].split(' '));
            console.log(listImages[0]);
        }
    }, [publicaciones, publicacion])

    return (
        <AuthLayout>
            <Box className={classes.container_general}>
                <Box className={classes.container_titulo_postales}>
                    Postales Abiertas 📚
                </Box>
                {/* <Box className={ classes.first_container_postales }>
                    <Typography variant='h4' fontWeight='bold' color={coloresPaleta.gris} textAlign='center'>Postales Abiertas</Typography>
                    <img className={ classes.img_first_container } src={publicacion?.urlImagen} />
                    <p className={ classes.description_first_container_postales }>
                        {publicacion?.descripcion}
                    </p>
                </Box> */}
                <Box>
                {/* <Box className={classes.tituloPostales}>
                    {publicaciones[0]?.nombre}
                </Box> */}
                <Box className={classes.postal_Lispector} >
                <img className={classes.imagen_postal} src={publicaciones[0]?.urlImagen} alt="Postal Lispector" />
                </Box>
                <Box className={classes.container_descripcion_postales}>
                <p className={classes.descripcion_postales}>
                    {publicaciones[0]?.descripcion}
                </p>
                </Box>
            </Box>
                <Box bgcolor={coloresPaleta.aguaMarina} padding='50px 0'>
                    {

                    }
                    <Box className={ classes.titulo_postales }>{ publicacion?.contenido?.[indexSlide]['nombre'] }</Box> {/*TODO: Revisar si es un objeto o arreglo.*/}
                    <Typography variant='body1' fontSize='1.2rem' color={coloresPaleta.gris} textAlign='center' marginBottom={3}>Por, { publicacion?.contenido?.[indexSlide]['autores'][0] }</Typography>
                    <Swiper 
                        className="mySwiper" 
                        spaceBetween={100}
                        centeredSlides={true}
                        autoplay={{
                            delay: 120000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onActiveIndexChange={(swiper) => onChangeSlide(swiper)}
                    >
                    {
                        publicacion?.contenido?.map(postal => (
                            ( postal['nombre'] === 'El Galto' ) ? (
                                <SwiperSlide 
                                    key={postal['nombre']}
                                >
                                    <img className='imgs-carrusel' src="https://drive.google.com/uc?export=view&id=1zT0T_xgrtQnCmjQA-PcixfVNxQud_htH" alt="" />
                                </SwiperSlide>
                            ) : (
                                <SwiperSlide 
                                    key={postal['nombre']}
                                >
                                    <img className='imgs-carrusel' src={postal['urlImagen']} style={{cursor: 'pointer'}}/>
                                </SwiperSlide>
                            ) 
                        ))
                    }
                    </Swiper>
                    {
                        publicacion?.contenido?.length > 0 
                        ? (<Box className={classes.container_texto_postales}>
                            <Markup className={ classes.textos_postales } content={textPostal} />
                            {
                                ( indexSlide === 7 ) ? (
                                    <Box className='grid-imgs-postales-galto'>
                                        {
                                            listImages.map(imagen => (
                                                <img src={imagen} alt='Imagen del Galto' />
                                            ))
                                        }
                                    </Box>
                                ) : (
                                    null
                                )
                            }
                        </Box>) 
                        : null
                    }
                </Box>
            </Box>
            
        </AuthLayout>
    )
}

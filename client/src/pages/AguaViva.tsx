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
import { Commentaries } from '../components/Commentaries';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AguaVivaAliados from '../utils/Agua_viva_aliados.png';


import { datosAlerta } from '../interfaces/datosAlerta';
import { WidgetSoundCloud } from '../components/WidgetSoundCloud';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ mt: 1, fontWeight: 800, fontSize: '1.5rem', lineHeight: 1.1, textAlign: 'center' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 5,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};


export const AguaVivaPage = () => {

    const classes = useStylesPostales();
    const [indexHorizontalSlide, setIndexHorizontalSlide] = useState(0);
    const [indexVerticalSlide, setIndexVerticalSlide] = useState(0);
    const [textHorizontalPostal, setTextHorizontalPostal] = useState('');
    const [textVerticalPostal, setTextVerticalPostal] = useState('');  
    const publicaciones = useSelector(({publicaciones} : dataState) => publicaciones);
    const publicacion = useSelector( ({publicacion} : dataState) => publicacion);
    const dispatch = useDispatch();
    const [listImages, setListImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [datosAlerta, setDatosAlerta] = useState<datosAlerta>({
        title: "",
        imagen: "", 
        autor: "",
        ilustrador: "",
    });
    const [horizontalPostalList, setHorizontalPostalList] = useState([]);
    const [verticalPostalList, setVerticalPostalList] = useState([]);

    const onChangeHorizontalSlide = (swiper) => {
        setIndexHorizontalSlide(swiper.activeIndex);
        setTextHorizontalPostal(horizontalPostalList?.[swiper.activeIndex]['texto']);
    }
    
    const onChangeVerticalSlide = (swiper) => {
        setIndexVerticalSlide(swiper.activeIndex);
        setTextVerticalPostal(verticalPostalList?.[swiper.activeIndex]['texto']);
    }

    const onClickHorizontalImage = (index) => {
        const swiper_postales = document.querySelector('#swiper_postales_horizontales')['swiper'];
        setIndexHorizontalSlide(index);
        swiper_postales.slideTo(index);
        setTextVerticalPostal(horizontalPostalList?.[index]['texto']);
        document.getElementById('container_catalogo_postales_horizontales').scrollIntoView();
    }

    const onClickVerticalImage = (index) => {
        const swiper_postales = document.querySelector('#swiper_postales_verticales')['swiper'];
        setIndexVerticalSlide(index);
        swiper_postales.slideTo(index);
        setTextVerticalPostal(verticalPostalList?.[index]['texto']);
        document.getElementById('container_catalogo_postales_verticales').scrollIntoView();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const invoqueModal = (titulo : string, autor: string, ilustrador: string, imagen : string) => {
        setOpen(true);
        setDatosAlerta({
            title: titulo, 
            autor,
            imagen,
            ilustrador
        })
    }

    useEffect(() => {
        if(publicaciones.length > 0){
            dispatch(getPublication(publicaciones[0]?._id));
        }

        if(publicacion?.contenido?.length > 0 && textHorizontalPostal === '' && textVerticalPostal === ''){
            setHorizontalPostalList(publicacion.contenido.filter(postal => postal?.['tendencia'] === "horizontal"));
            setVerticalPostalList(publicacion.contenido.filter(postal => postal?.['tendencia'] === "vertical"));
        }
    }, [publicaciones, publicacion])

    useEffect(() => {
        
        if(horizontalPostalList?.length > 0 && verticalPostalList?.length > 0){
            setTextHorizontalPostal(horizontalPostalList[0]['texto']);
            setTextVerticalPostal(verticalPostalList[0]['texto']);
            console.log(horizontalPostalList);
            console.log(verticalPostalList);
            console.log(publicacion);
        }
    }, [horizontalPostalList, verticalPostalList])
    

    return (
        <AuthLayout>
            <Box className={classes.container_general}>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{bgcolor: 'rgba(0,0,0, 0.7)'}}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {datosAlerta.title}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <img src={datosAlerta.imagen} alt="Sesion" />
                    <Typography gutterBottom sx={{textAlign: 'center', mb: 1, mt: 3, color: coloresPaleta.gris, fontWeight: 600}}>
                        {datosAlerta.ilustrador == "Clarice Lispector" ? `Fotografía por ${datosAlerta.autor}` : `Escrito y fotografía por ${datosAlerta.autor}`}
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
                <Box className={classes.container_titulo_postales}>
                    Agua Viva 🌊
                </Box>
                
                <Box>
                    <Box className={classes.postal_Lispector} >
                        <img className={classes.imagen_postal} src={publicaciones[0]?.urlImagen} alt="Agua Viva" />
                    </Box>
                    <Box className={classes.creditosIlustracion}>
                        <p className={classes.textoCreditosPostal1}>Diseño de portada:</p>
                        &nbsp;
                        <p className={classes.textoCreditosPostal2}>Mauricio Londoño</p>
                    </Box>
                    <Box className={classes.container_descripcion_postales}>
                        <p className={classes.descripcion_postales}>
                            {publicaciones[0]?.descripcion}
                        </p>
                    </Box>
                </Box>
                <div id='container_catalogo_postales_horizontales'>
                    {/*NO BORRAR, ES PARA EL TOTOP*/}
                </div>
                <Box bgcolor={coloresPaleta.aguaMarina} padding='50px 0' className='container_postales'>
                    <Box className={ classes.titulo_dimension_postales }>Postales Horizontales</Box>
                    {
                        horizontalPostalList.length > 0 ? (
                            <Box>
                                <Box className={ classes.titulo_postales }>{ horizontalPostalList?.[indexHorizontalSlide]['nombre'] }</Box>
                                    <Typography variant='body1' fontSize='1.2rem' color={coloresPaleta.gris} textAlign='center' marginBottom={3}>Por { horizontalPostalList?.[indexHorizontalSlide]['autores'][0] }</Typography>
                                    <Swiper
                                        id='swiper_postales_horizontales' 
                                        className={classes.swiper_horizontal_postales}
                                        spaceBetween={100}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 660000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        onActiveIndexChange={(swiper) => onChangeHorizontalSlide(swiper)}
                                    >
                                    {
                                        horizontalPostalList?.map(postal => (
                                            <SwiperSlide 
                                                key={postal['nombre']}
                                                onClick={() => invoqueModal(postal['nombre'], postal['autores'][0], postal['autores'][1], postal['urlImagen'])}
                                            >
                                                <img className='imgs-carrusel' src={postal['urlImagen']} style={{cursor: 'pointer'}}/>
                                            </SwiperSlide>
                                        ))
                                    }
                                    </Swiper>
                                {
                                    horizontalPostalList?.length > 0 
                                    ? (
                                        <Box className={classes.container_texto_postales}>
                                            <Markup className={ classes.textos_postales } content={textHorizontalPostal} />
                                        </Box>
                                    ) : null
                                }
                            </Box>
                        ):(null)
                    }
                    <div id='container_catalogo_postales_verticales'>
                        {/*NO BORRAR, ES PARA EL TOTOP*/}
                    </div>
                    <Box className={ classes.titulo_dimension_postales }>Postales Verticales</Box>
                    {
                        verticalPostalList.length > 0 ? (
                            <Box>
                                <Box className={ classes.titulo_postales }>{ verticalPostalList?.[indexVerticalSlide]['nombre'] }</Box>
                                    <Typography variant='body1' fontSize='1.2rem' color={coloresPaleta.gris} textAlign='center' marginBottom={3}>Por { verticalPostalList?.[indexVerticalSlide]['autores'][0] }</Typography>
                                    <Swiper
                                        id='swiper_postales_verticales' 
                                        className='mySwiper'
                                        spaceBetween={100}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 660000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        onActiveIndexChange={(swiper) => onChangeVerticalSlide(swiper)}
                                    >
                                    {
                                        verticalPostalList?.map(postal => (
                                            <SwiperSlide 
                                                key={postal['nombre']}
                                                onClick={() => invoqueModal(postal['nombre'], postal['autores'][0], postal['autores'][1], postal['urlImagen'])}
                                            >
                                                <img className='imgs-carrusel' src={postal['urlImagen']} style={{cursor: 'pointer'}}/>
                                            </SwiperSlide>
                                        ))
                                    }
                                    </Swiper>
                                {
                                    verticalPostalList?.length > 0 
                                    ? (
                                        <Box className={classes.container_texto_postales}>
                                            <Markup className={ classes.textos_postales } content={textVerticalPostal} />
                                        </Box>
                                    ) : null
                                }
                            </Box>
                        ):(null)
                    }
                    <Box>
                        <Box className={classes.titulo_textArea}>Haz click aquí para escuchar un paisaje sonoro creado a partir de grabaciones hechas en nuestros recorridos por los cuerpos de agua de la cuenca del río Arzobispo:</Box>
                        {<WidgetSoundCloud />}
                    </Box>
                    <Box className={classes.contenedor_imagen_aliados}>
                        <Box>Sin su apoyo, nada de esto habría sido posible:</Box>
                        {<img src={AguaVivaAliados} className={classes.imagen_aliados_agua_viva} alt="Aliados Agua Viva"/>}
                    </Box>
                </Box>
                <Box>
                    <Box className={classes.titulo_otras_postales}>Otras Postales</Box>
                    <Box className={classes.titulo_dimension_otras_postales}>Horizontales</Box>
                    <Box className={classes.container_catalogo_postales}>
                        {horizontalPostalList?.map((postal, index) => (
                            <Box>
                                <img onClick={() => onClickHorizontalImage(index)} className={classes.imagenes_catalogo} src={postal['urlImagen']} alt="Catalogo postales"/>
                                <p onClick={() => onClickHorizontalImage(index)} className={classes.nombre_postal_catalogo}>{postal['nombre']}</p>
                                <p className={classes.nombre_autor_postal_catalogo}>Por {postal['autores'][0]}</p>
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.titulo_dimension_otras_postales}>Verticales</Box>
                    <Box className={classes.container_catalogo_postales}>
                        {verticalPostalList?.map((postal, index) => (
                            <Box>
                                <img onClick={() => onClickVerticalImage(index)} className={classes.imagenes_catalogo} src={postal['urlImagen']} alt="Catalogo postales"/>
                                <p onClick={() => onClickVerticalImage(index)} className={classes.nombre_postal_catalogo}>{postal['nombre']}</p>
                                <p className={classes.nombre_autor_postal_catalogo}>Por {postal['autores'][0]}</p>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Box className={classes.titulo_otras_postales}>Comentarios para esta publicación</Box>
                    <Commentaries comentarios={publicacion?.comentarios?.reverse()} publicacion={publicacion} />
                </Box>
            </Box>
            
        </AuthLayout>
    )
}
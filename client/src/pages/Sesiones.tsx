import { Calendario } from '../components/Calendario';
import React, { useState, useEffect } from 'react'
import { AuthLayout } from '../layouts/AuthLayout';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { NavLink, useNavigate } from 'react-router-dom'
import { coloresPaleta } from '../styles/coloresPaleta';
import { useDispatch, useSelector } from 'react-redux';
import { dataState } from '../redux/reducers';
import { useStyles } from '../styles/stylesPageSesiones'
import { Modal } from '../components/Modal';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { datosAlerta } from '../interfaces/datosAlerta';

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

export const SesionesPage = () => {
  
  const classes = useStyles();
  const [indexSlide, setIndexSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const [datosAlerta, setDatosAlerta] = useState<datosAlerta>({
    title: "", 
    description: "", 
    date: "", 
    time: "", 
    address: "", 
    imagen: "",
  });
  const navigate = useNavigate();
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  const sesiones = useSelector( ({sesiones} : dataState) => sesiones);
  const ciclos = useSelector( ({ciclos} : dataState) => ciclos);
  const [indexSlideCicles, setIndexSlideCicles] = useState({
    "Ciencia y Ficción": 0,
    "Mitos y leyendas": 0,
    "Poesía Colombiana": 0,
    //CADA QUE SE INICIE UN NUEVO CICLO, DEBE AGREGARSE SU TITULO AQUI TAL CUAL COMO ESTA REGISTRADO EN EL BACKEND
  });

  const setIndexCarrusel = (swiper) => {
    setIndexSlideCicles({
      ...indexSlideCicles,
      [swiper.el.id]: swiper.activeIndex
    })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const invoqueModal = (titulo : string, descripcion: string, fecha: string, hora: string,
    direccionSesion: string, imagen : string) => {
    setOpen(true);
    setDatosAlerta({
      title: titulo, 
      description: descripcion, 
      date: fecha, 
      time: hora, 
      address: direccionSesion, 
      imagen: imagen,
    })
  }

  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);
  
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
                <Typography sx={{ mt: 1.5, mb: 2, color: '#5c5b5b', fontSize: '1rem', textDecoration: 'underline', textAlign: 'center', textUnderlineOffset: 2 }}>{datosAlerta.date} de {datosAlerta.time} en la dirección {datosAlerta.address}</Typography>
                <Typography gutterBottom sx={{textAlign: 'justify', mb: 1}}>
                    {datosAlerta.description}
                </Typography>
              </DialogContent>
          </BootstrapDialog>
          <Box className={classes.container_titulo_sesiones}>
            Sesiones
          </Box>
          <Box>
            <Box className={classes.titulo_sesiones}>
              Próximas Sesiones
            </Box>
            <Box className={classes.container_calendario_carrusel}>
              <Box>
                <Calendario />
              </Box>
              <Box>
                <Swiper
                  spaceBetween={100}
                  centeredSlides={true}
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className={classes.swiper}
                  onActiveIndexChange={(swiper) => setIndexSlide(swiper.activeIndex)}
                >
                  {ciclos[0]?.sesiones.map((sesion) => (
                    <SwiperSlide onClick={() => invoqueModal(sesion?.titulo, sesion?.descripcion, sesion?.fecha, sesion?.hora, sesion?.direccionSesion, sesion?.imagenSesion)}>
                      <img src={sesion?.imagenSesion} style={{cursor: 'pointer'}} alt="Sesión Stanislaw Lem"/>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
            {ciclos.map((ciclo, index) => (
              <Box className={classes.container_ciclo} sx={{ backgroundColor: index % 2 === 0 ? coloresPaleta.aguaMarina : coloresPaleta.blanco }}>
                <Box className={classes.titulo_sesiones}>
                  {ciclo?.titulo}
                </Box>
                <p className={classes.descripcion_ciclo}>
                  {ciclo?.descripcion}
                </p>
                {sizeScreen > 600 ? (
                  <Box className={classes.container_piezas_ciclo}>
                    {ciclo.sesiones.map((sesion) => (
                      <Box className={classes.container_img_data_sesion}>
                        <img src={sesion?.imagenSesion} className={classes.imagen_sesion} onClick={() => invoqueModal(sesion?.titulo, sesion?.descripcion, sesion?.fecha, sesion?.hora, sesion?.direccionSesion, sesion?.imagenSesion)} style={{ cursor: 'pointer'}} alt="Sesión Stanislaw Lem"/>
                        <Box>
                          <p onClick={() => invoqueModal(sesion?.titulo, sesion?.descripcion, sesion?.fecha, sesion?.hora, sesion?.direccionSesion, sesion?.imagenSesion)} className={classes.titulo_sesion}>
                            {sesion?.titulo}
                          </p>
                          <p className={classes.fecha_sesion}>
                            {sesion?.fecha}
                          </p>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ):(
                  <Box>
                    <Swiper
                      spaceBetween={100}
                      centeredSlides={true}
                      autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className={classes.swiper}
                      id={ciclo?.titulo}
                      onActiveIndexChange={(swiper) => setIndexCarrusel(swiper)}
                    >
                      {ciclo.sesiones.map((sesion) => (
                        <SwiperSlide onClick={() => invoqueModal(sesion?.titulo, sesion?.descripcion, sesion?.fecha, sesion?.hora, sesion?.direccionSesion, sesion?.imagenSesion)}>
                          <img src={sesion?.imagenSesion} style={{cursor: 'pointer'}} alt="Sesión Stanislaw Lem"/>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Box className={classes.container_sesion_data}>
                      <Box className={classes.container_data_sesion_mobile}>
                        <p onClick={() => invoqueModal(ciclo.sesiones[indexSlideCicles[ciclo?.titulo]]?.titulo, ciclo.sesiones[indexSlideCicles[ciclo?.titulo]]?.descripcion, ciclo.sesiones[indexSlideCicles[ciclo?.titulo]]?.fecha, ciclo.sesiones[indexSlideCicles[ciclo?.titulo]]?.hora, ciclo.sesiones[indexSlideCicles[ciclo?.titulo]]?.direccionSesion, ciclo.sesiones[indexSlideCicles[ciclo?.titulo]]?.imagenSesion)} className={classes.titulo_sesion}>
                          {ciclo.sesiones[indexSlideCicles[ciclo?.titulo]]?.titulo}
                        </p>
                        <p className={classes.fecha_sesion}>
                          {ciclo.sesiones[indexSlideCicles[ciclo?.titulo]]?.fecha}
                        </p>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Box className={classes.container_sesion_actual} sx={{backgroundColor: coloresPaleta.aguaMarina}}>
                <p className={classes.titulo_sesiones}>
                  Próxima Sesión 
                  <br/>
                  <br/>
                  <em>{sesiones[0]?.titulo}</em>
                </p>
                <img src={sesiones[0]?.imagenSesion} className={classes.imagen_sesion_actual} alt="Sesión actual"/>
                <p className={classes.descripcion_sesion}>
                  {sesiones[0]?.descripcion}
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
    </AuthLayout>
  )
}
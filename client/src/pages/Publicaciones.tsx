import React, { useState, useEffect } from 'react'
import { AuthLayout } from '../layouts/AuthLayout';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { NavLink, useNavigate } from 'react-router-dom';
import { dataState } from '../redux/reducers/index';
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from '../styles/stylesPagePublicaciones';
import { coloresPaleta } from '../styles/coloresPaleta';
import { reserveCodePublication } from '../redux/actions/publicationActions';
import CloseIcon from '@mui/icons-material/Close';
import iconoError from '../images/cancelar.png';
import iconoPregunta from '../images/conversation.png';
import iconoSuccess from '../images/checked.png';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const PublicacionesPage = () => {
  
  const classes = useStyles();
  const [indexSlide, setIndexSlide] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertOk, setOpenAlertOk] = useState(false);
  const [openAlertInput, setOpenAlertInput] = useState(false);
  const [inputCodigoPublicacion, setinputCodigoPublicacion] = useState('');
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [contador, setContador] = useState(0);
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  const publicaciones = useSelector( ({publicaciones} : dataState) => publicaciones);
  const publicacion = useSelector( ({publicacion} : dataState) => publicacion);
  const usuario = useSelector( ({usuario} : dataState) => usuario);
  const mensajeError = useSelector( ({message} : dataState) => message);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSubmit = (index) => {
    
    console.log('INDEX Publicaciones: ', index);
    
    switch(index) {
      
      case (1):
        navigate('/ecos_de_resistencia');
        break;

      case (2):
        const link = document.createElement('a')
        link.target = '_blank'
        link.href = 'https://view.genial.ly/5e966c2ae948540e05018d81/interactive-content-colombia-a-dos-miradas'
        link.click()
        link.remove()
        break;

      case (3):
        navigate('/lecturas_no_aplicadas_II');
        break;
      
      case (4):
        navigate('/lecturas_no_aplicadas_I');
        break;
      
      default:
        navigate('/');
        break;
      }
  }
  
  const handleClose = () => {
    setOpenAlert(false);
    if(mensajeAlerta === "Para acceder a esta publicación, debes iniciar sesión previamente"){
      navigate('/inicio_sesion');
    }
  };

  const handleCloseAlertInput = () => {
    setOpenAlertInput(false);
  };
  
  const handleCloseAlertOk = () => {
    setOpenAlertOk(false);
    navigate('/postales');
    localStorage.removeItem('reservaPublicacion');
  }

  const onClickPostales = () => {

    if( !usuario?.['publicationsCode']?.includes("El tiempo en que no nos vimos") && usuario?.['role'] !== 'admin' ){
      
      if(!usuario?.['uid']){
        setMensajeAlerta("Para acceder a esta publicación, debes iniciar sesión previamente");
        return setOpenAlert(true);
      }
      return setOpenAlertInput(true);
      
    }else{
      return navigate('/postales');
    }
  }
  
  const sendCodePublication = () => {
    handleCloseAlertInput();
    dispatch(reserveCodePublication(publicaciones[0]?.['_id'], usuario?.['uid'], "El tiempo en que no nos vimos", inputCodigoPublicacion));
    setinputCodigoPublicacion("");
    setContador(contador + 1);
  }
  
  
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, [publicacion]);

  useEffect(() => { 
      if(localStorage.getItem('reservaPublicacion') === null && !usuario?.['publicationsCode']?.includes("El tiempo en que no nos vimos") && usuario?.['uid'] && usuario?.['role'] !== 'admin' && contador > 0){
        setMensajeAlerta(mensajeError);
        setOpenAlert(true);
      }
  }, [mensajeError, contador])

  useEffect(() => {
    if(localStorage.getItem('reservaPublicacion') === "ok"){
      setOpenAlertOk(true);
    }
  }, [localStorage.getItem('reservaPublicacion')])

  
  return (
    <AuthLayout>
        <Box className={classes.container_general}>
          <Modal
            open={openAlert}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.container_alerta}>
              <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
              }}
              >
                <CloseIcon />
              </IconButton>
              <Typography id="modal-modal-title" variant="h4" component="h2" sx={{textAlign: 'center', color: 'red'}}>
                ¡Error!
              </Typography>
              <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '1.5rem', marginBottom: '2rem'}}>
                <img src={iconoError} alt="Error" style={{width: '25%'}}/>
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                {mensajeAlerta}.
              </Typography>
            </Box>
          </Modal>

          <Modal
            open={openAlertInput}
            onClose={handleCloseAlertInput}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.container_alerta}>
              <IconButton
              aria-label="close"
              onClick={handleCloseAlertInput}
              sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
              }}
              >
                <CloseIcon />
              </IconButton>
              <Box id="modal-modal-title" className={classes.titulo_alerta}>
                Acceder
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '1.5rem', marginBottom: '2rem'}}>
                <img src={iconoPregunta} alt="Error" style={{width: '25%'}}/>
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'justify', mb: 4}}>
                Esta cuenta no posee un código de acceso para visualizar esta publicación. Para poder adquirirla, por favor, digite un código de <b>16 dígitos</b> el cual debe tener la siguiente estructura: <b><i>AAAA-BBBB-CCCC-DDDD</i></b>. 
              </Typography>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <input type='text' onChange={(e) => setinputCodigoPublicacion(e.target.value.toUpperCase())} value={inputCodigoPublicacion} style={{borderRadius: '7px', border: 'none', marginBottom: '2rem'}} placeholder="AAAA-BBBB-CCCC-DDDD" maxLength={19}/>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                  <button type='button' onClick={sendCodePublication} className={inputCodigoPublicacion.length === 19 ? classes.boton_alerta_activado : classes.boton_alerta_desactivado} disabled={!(inputCodigoPublicacion.length === 19)}>Enviar</button>
                </Box>
              </Box>
            </Box>
          </Modal>

          <Box className={classes.container_general}>
            <Modal
              open={openAlertOk}
              onClose={handleCloseAlertOk}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={classes.container_alerta}>
                <IconButton
                aria-label="close"
                onClick={handleCloseAlertOk}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography id="modal-modal-title" variant="h4" component="h2" sx={{textAlign: 'center', color: 'green'}}>
                  ¡Felicitaciones!
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '1.5rem', marginBottom: '2rem'}}>
                  <img src={iconoSuccess} alt="Error" style={{width: '25%'}}/>
                </Box>
                <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'justify' }}>
                <b>¡Enhorabuena!</b> Deseamos que puedas disfrutar de la lectura de estas bellas postales tanto como nosotros disfrutamos haciéndolas. <i>¡Gracias por apoyar publicaciones independientes!</i> <br/><br/> <b style={{textAlign: 'center'}}>Clarice Lispector está orgullosa de ti :)</b> 
                </Typography>
              </Box>
            </Modal>
          </Box>

          <Box className={classes.container_titulo_publicaciones}>
            Nuestras Publicaciones
          </Box>
          <Box>
            <Box sx={{textAlign: 'center'}}>
              <button className={classes.tituloPostales} type='button' onClick={onClickPostales}>
                {publicaciones[0]?.nombre}
              </button>
            </Box>
            <Box className={classes.postal_Lispector} >
              <img className={classes.imagen_postal} src={publicaciones[0]?.urlImagen} alt="Postal Lispector" onClick={onClickPostales} style={{cursor: 'pointer'}} />
            </Box>
            <Box className={classes.container_descripcion_postales}>
              <p className={classes.descripcion_postales}>
                {publicaciones[0]?.descripcion}
              </p>
            </Box>
          </Box>
          <Box className={classes.container_publicaciones}>
            <Swiper
              spaceBetween={100}
              centeredSlides={true}
              autoplay={{
                delay: 30000,
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
              {publicaciones.map((publicacion, index) => (
                publicacion?.nombre === 'Colombia a Dos Miradas' ? (
                  <SwiperSlide key={publicacion?.nombre}> 
                    <a href='https://view.genial.ly/5e966c2ae948540e05018d81/interactive-content-colombia-a-dos-miradas' target='_blank'>
                      <img src={publicacion?.urlImagen} style={{marginTop: '2rem', cursor: 'pointer'}} alt="Colombia a dos miradas"/>
                    </a>
                  </SwiperSlide>
                )
                : publicacion?.nombre !== 'El tiempo en que no nos vimos' ? (
                  <SwiperSlide 
                    className={publicacion?.nombre === 'Ecos de Resistencia' ? (classes.imagen_ecos_de_resistencia):(classes.imagenes_lecturas_no_aplicadas)} 
                    onClick={() => onSubmit(index)}
                    key={publicacion?.nombre}
                  >
                    <img src={publicacion?.urlImagen} style={{cursor: 'pointer'}}/>
                  </SwiperSlide>
                ):(null)
              ))}
            </Swiper>

            <Box className={classes.datos_publicacion}>
              <p className={classes.titulo_publicacion} onClick={() => onSubmit(indexSlide + 1)}>
                {publicaciones[indexSlide + 1]?.nombre}
              </p>
              <p className={classes.descripcion_publicacion}>
                {publicaciones[indexSlide + 1]?.descripcion}
              </p>
            </Box>
          </Box>
          {sizeScreen > 600 ? (
            <Box className={classes.publicaciones}>
              {publicaciones.map((publicacion, index) => (
                publicacion?.nombre === 'Colombia a Dos Miradas' ? (
                  <Box>
                    <Box className={classes.camuflaje_Colombia_a_dos_miradas}>
                      <a href={publicacion?.urlDocumento} target='_blank'>
                        <img src={publicacion?.urlImagen} width={250} style={{ cursor: 'pointer'}} alt="Colombia a dos miradas"/>
                      </a>
                    </Box>
                    <a className={classes.titulos_publicaciones_finales} href={publicacion?.urlDocumento} target='_blank'>
                      {publicacion?.nombre}
                    </a>
                  </Box>
                ): publicacion?.nombre !== 'El tiempo en que no nos vimos' ? (
                  <Box onClick={() => onSubmit(index)}>
                    <img src={publicacion?.urlImagen} width={publicacion?.nombre === 'Ecos de Resistencia' ? 300 : 250} style={{cursor: 'pointer', boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.603)'}} alt="Ecos de Resistencia"/>
                    <p className={classes.titulos_publicaciones_finales}>{publicacion?.nombre}</p>
                  </Box>
                ):(null)
              ))}
            </Box>
          ) : null}
        </Box>
    </AuthLayout>
  )
}

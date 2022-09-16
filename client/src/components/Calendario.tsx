import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/ReactCalendario.css';
import clarice from '../images/Clarice1.jpg';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';
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


export function Calendario() {
  
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = React.useState(false);
  const sesiones = useSelector(({sesiones} : dataState) => sesiones);
  const [datosAlerta, setDatosAlerta] = useState<datosAlerta>({
    title: "", 
    description: "", 
    date: "", 
    time: "", 
    address: "", 
    imagen: "",
  });

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

  const onClick = (value: Date, event: any) => {

    let fechaSesion : Date = new Date(sesiones[0]?.date)
    if(value.getDate() === fechaSesion.getDate()){
      setOpen(true);
      setDatosAlerta({
        title: sesiones[0]?.titulo, 
        description: sesiones[0]?.descripcion, 
        date: sesiones[0]?.fecha, 
        time: sesiones[0]?.hora, 
        address: sesiones[0]?.direccionSesion, 
        imagen: sesiones[0]?.imagenSesion,
      })
    }
  }
  

  return (
    <>
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
      <Calendar onChange={onChange} value={new Date(localStorage.getItem('fechaUltimaSesion'))} next2Label={null} prev2Label={null} onClickDay={onClick}/>
    </>
  );
}
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

interface Props {
    open?: boolean;
    title?: string, 
    description?: string, 
    date?: string, 
    time?: string, 
    address?: string, 
    ciclo?: string, 
    imagen?: string,
}

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
        <DialogTitle sx={{ m: 0, pl: 2, fontWeight: 'bold', textAlign: 'center' }} {...other}>
            {children}
        {onClose ? (
            <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
                <CloseIcon />
            </IconButton>
        ) : null}
        </DialogTitle>
    );
};

export const Modal = (props : Props) => {

    const handleClickOpen = () => {
        props.open = true;
    };

    const handleClose = () => {
        props.open = false;
    };
    
    console.log(props);
    console.log('Abrite ome', props.open);

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={true}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                {props.title}
            </BootstrapDialogTitle>
            <Typography sx={{ ml: 2, mt: -3, color: '#757575', fontSize: '1rem' }}>{props.date} de {props.time} en la dirección {props.address}</Typography>
            <DialogContent dividers>
                <img src={props.imagen} alt="Sesion" />
            <Typography gutterBottom>
                {props.description}
            </Typography>
            </DialogContent>
        </BootstrapDialog>
    );
}
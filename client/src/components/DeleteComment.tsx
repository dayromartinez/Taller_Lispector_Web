import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteComment } from '../redux/actions/commentActions';
import { useDispatch } from 'react-redux';

export default function DeleteComment({idCommentary, idPublicacion, open, setOpen}) {

    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const eliminarComentario = () => {
        dispatch(deleteComment(idCommentary, idPublicacion));
        handleClose();
    }


    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold'}}>Eliminar Comentario</DialogTitle>
                <hr/>
                <DialogContentText sx={{ p: 3 }}>
                    ¿Está segur@ de que desea eliminar este comentario?
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose} color="success">Cancelar</Button>
                    <Button onClick={eliminarComentario} color="error">Eliminar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
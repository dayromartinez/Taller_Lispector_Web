import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Rating, Tooltip } from '@mui/material';
import { updateComment } from '../redux/actions/commentActions';
import { useDispatch } from 'react-redux';

export default function UpdateComment({userId, publicacionId, idCommentary, comment, raiting, open, setOpen}) {

    const [commentary, setCommentary] = useState(comment);
    const [raitingComment, setRaitingComment] = useState(raiting);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const setComment = (e) => {
        setCommentary(e.target.value);
    }

    const updateComment = (userId, publicacionId, idCommentary, commentary, raitingComment) => {
        console.log(userId, publicacionId, idCommentary, commentary, raitingComment);
        //dispatch(updateComment(userId, publicacionId, idCommentary, commentary, raitingComment));
        setOpen(false);
    }   


    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Actualizar Comentario</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Edita tu comentario y la valoración que le das a la publicación:
                </DialogContentText>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, marginBottom: 2}}>
                    <Tooltip title="Editar Valoración">
                        <Rating name="update-valoration" value={raitingComment} onChange={(e) => setRaitingComment(0)}/>
                    </Tooltip>
                </Box>
                <TextField
                    autoFocus
                    margin="dense"
                    id="updateComment"
                    label="Editar comentario"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setComment(e.target.value)}
                    value={commentary}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={() => updateComment(userId, publicacionId, idCommentary, commentary, raitingComment)}>Actualizar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
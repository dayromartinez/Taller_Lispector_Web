import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CreateSession() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear Sesión</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Rellena los siguientes campos para crear una nueva sesión.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nameOfSession"
            label="Nombre de la sesión"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Crear</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
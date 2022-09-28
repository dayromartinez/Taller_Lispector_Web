import { Avatar, Box, IconButton } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { colors } from '../components/NavbarDesktopAdmin';
import { AuthLayout } from '../layouts/AuthLayout';
import { dataState } from '../redux/reducers/index';
import { useStylesPerfil } from '../styles/stylesPagePerfil';
import Typography from '@mui/material/Typography';
import { coloresPaleta } from '../styles/coloresPaleta';

export const Perfil = () => {

    const classes = useStylesPerfil();

    const user = useSelector( ({usuario} : dataState) => usuario);
    console.log('user', user)
    const publicaciones = useSelector( ({publicaciones} : dataState) => publicaciones);

    console.log(publicaciones?.filter(publicacion => user?.['publicationsCode']?.includes(publicacion.nombre)))

    return (
        <AuthLayout>
            <Box className={classes.container_general}>
                <Box className={classes.container_titulo_postales}>
                    Mi perfil
                </Box>
            </Box>

            <Box className={classes.container_general_page}>
                <Box className={classes.container_content}>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt={user?.['name']?.toUpperCase()} src={user?.['name']?.toUpperCase()} sx={{ bgcolor: `${colors[user?.['colorProfile']]}`, width: 70, height: 70, fontSize: 45 }} />
                    </IconButton>
                    <Box className={classes.name_and_email}>
                        <Typography variant='h5' fontWeight={600}>{user?.['name']}</Typography>
                        <Typography>{user?.['email']}</Typography>
                    </Box>
                </Box>
                <Box className={classes.name_and_email}>
                    <Typography>Mi rol es:</Typography>
                    <h6>{user?.['role']}</h6>
                </Box>
            </Box>

            <Box className={classes.container_mis_publicaciones}>
                <h2 className={classes.titulo_mis_publicaciones}>Mis publicaciones</h2>

                <Box className={classes.container_grilla}>
                    {
                        publicaciones?.filter(publicacion => user?.['publicationsCode']?.includes(publicacion.nombre)).map(publicacion => (
                            <Box key={publicacion._id} className={classes.card_publicacion}>
                                <img 
                                    src={publicacion?.urlImagen}
                                    width={200}
                                    className={classes.imgPublicacion}  
                                />
                                <Box>
                                    <p style={{ textAlign: 'center', marginBottom: 20 }}>{publicacion?.['nombre']}</p>
                                    <Typography variant='body1'>{publicacion?.['descripcion']}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </AuthLayout>
    )
}

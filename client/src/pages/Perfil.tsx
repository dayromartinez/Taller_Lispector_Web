import React from 'react'
import { Avatar, Box, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { colors } from '../components/NavbarDesktopAdmin';
import { AuthLayout } from '../layouts/AuthLayout';
import { dataState } from '../redux/reducers/index';
import { useStylesPerfil } from '../styles/stylesPagePerfil';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Perfil = () => {

    const classes = useStylesPerfil();

    const user = useSelector( ({usuario} : dataState) => usuario);
    console.log('user', user)
    const publicaciones = useSelector( ({publicaciones} : dataState) => publicaciones);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const renderMisPublicaciones = () => {
        return (
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
        )
    }

    const onLogout = () => {
        navigate('/')
        
        dispatch(logout())
    }

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
                        <Typography variant='h5' fontWeight={600}>{user?.['name']?.toUpperCase()}</Typography>
                        <Typography>{user?.['email']}</Typography>
                    </Box>
                </Box>
                <Box className={classes.name_and_email}>
                    <button style={{ marginTop: 10, color: 'red' }} onClick={ onLogout }>
                        <LogoutIcon /> {' '}
                        <span style={{ fontSize: 20 }}>Salir</span>
                    </button>
                </Box>
            </Box>
            <Box className={classes.container_content_rol}>
                <p style={{ fontWeight: 600, fontSize: '18px', paddingRight: 5 }}>Mi rol es:</p>
                <h6>{user?.['role']}</h6>
            </Box>

            <Box className={classes.container_mis_publicaciones}>
                <h2 className={classes.titulo_mis_publicaciones}>{ user?.['publicationsCode']?.length > 0 ? 'Mis publicaciones' : 'Esta cuenta aún no ha adquirido ningúna publicación.' }</h2>

                <Box className={classes.container_grilla}>
                    {                    
                        renderMisPublicaciones()
                    }
                </Box>
            </Box>
        </AuthLayout>
    )
}

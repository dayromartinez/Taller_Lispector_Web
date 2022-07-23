import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { dataState } from '../redux/reducers';
import { useState, useEffect } from 'react';
import logoLispector from '../images/Logo_Lispector_Completo.png';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import photoUser from '../images/image_perfil_defecto.png';
import { CardMedia } from '@mui/material';
import { logout } from '../redux/actions/userActions';
import CreateSession from './CreateSesion';

const pages = ['Inicio', 'Sesiones', 'Publicaciones', 'Crear Sesión', 'Crear Publicación'];
export const settings = ['Perfil', 'Publicaciones', 'Cerrar Sesión'];

export const colors = ['#42a5f5', '#ab47bc', '#d32f2f', '#f57c00', '#0288d1', '#388e3c', '#ffa726'];
//const randomColor = Math.floor(Math.random() * colors.length);

const NavbarDesktopAdmin = () => {
    const usuario = useSelector((state : dataState) => state.usuario);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log('EN EL NAVBAR DESKTOP: ', window.innerWidth)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
        setOpenMenu(true)
        localStorage.setItem('open_menu', 'true')
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        localStorage.setItem('close_menu', 'false')
    };

    const onSubmit = (event: React.MouseEvent<HTMLElement>) => {

        event.preventDefault()
        const nombreBoton = event.currentTarget["name"]

        switch (nombreBoton) {

            case "Sesiones":
                navigate('/sesiones');
                break;

            case "Publicaciones":
                navigate('/publicaciones');
                break;
            
            case "Inicio":
                navigate('/');
                break;
            
            case "Crear Sesión":
                return <CreateSession />
            
            case "Crear Publicación":
                return <CreateSession />

            default:
                break;
        }
    }

    const onLogout = () => {
        dispatch(logout());
    }

    const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(null);
        const option = event.target?.['id']
        switch (option) {

            case "Perfil":
                navigate('/');
                break;

            case "Publicaciones":
                navigate('/publicaciones');
                break;

            case "Cerrar Sesión":
                navigate('/');
                onLogout();
                break;
            
            default:
                break;
        }
    };


    return (
        
        <AppBar style={{'backgroundColor': '#9FD5D1'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Tooltip title='Inicio'>
                        <Box 
                            component="img"
                            sx={{ display: { xs: 'flex', md: 'flex', width: '15%', height: '15%', padding:  10, cursor: 'pointer' } }}
                            alt="logo"
                            onClick={() => {
                                navigate('/');
                            }}
                            src={logoLispector}
                        />
                    </Tooltip>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', }, marginLeft: { md: '10%', lg: '6%' }}}>
                        {pages.map((page) => (
                        <Button
                            name={page}
                            onClick={onSubmit}
                            sx={{ my: 2, color: '#F6EEE9', display: 'flex', marginLeft: '5%', fontFamily: 'League Spartan, arial', fontWeight: 'bold', fontSize: '1.1rem', ":hover": { color: '#4D4D4D', backgroundColor: '#9FD5D1' } }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    <Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={usuario?.['name'].toUpperCase()} src={usuario?.['name'].toUpperCase()} sx={{ bgcolor: `${colors[usuario?.['colorProfile']]}` }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} id={setting} onClick={handleCloseUserMenu}>
                                        <Typography id={setting} textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavbarDesktopAdmin;
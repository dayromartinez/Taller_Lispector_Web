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
import { useSelector } from 'react-redux';
import { dataState } from '../redux/reducers';
import { useState, useEffect } from 'react';
import logoLispector from '../images/Logo_Lispector_Completo.png';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import photoUser from '../images/image_perfil_defecto.png';
import { CardMedia } from '@mui/material';

const pages = ['Sesiones', 'Publicaciones', 'Contacto'];
const settings = ['Perfil', 'Cerrar Sesión'];

const NavBarDesktop = () => {
    const usuario = useSelector((state : dataState) => state.usuario);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

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
            
            case "Contacto":
                navigate('/');
                break;
            
            case "Iniciar Sesión":
                navigate('/inicio_sesion');
                break;
            
            default:
                break;
        }
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    console.log("Usuario: ", usuario)

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

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', }, marginLeft: { md: '10%', lg: '18%' }}}>
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
                        {usuario['name'] === undefined ? (
                            <Button
                                name="Iniciar Sesión"
                                onClick={onSubmit}
                                sx={{ my: 2, color: '#F6EEE9', display: 'flex', marginLeft: '5%', fontFamily: 'League Spartan, arial', fontWeight: 'bold', fontSize: '1.1rem', ":hover": { color: '#4D4D4D', backgroundColor: '#9FD5D1' } }}
                                className="botonesNavBar"
                            >
                                <Tooltip title='Iniciar Sesión'>
                                    <LoginIcon sx={{ mr: '0.5rem' }}/>
                                </Tooltip>
                            </Button>
                            ) : (
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Foto de perfil" src={usuario['name']!} />
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
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBarDesktop;
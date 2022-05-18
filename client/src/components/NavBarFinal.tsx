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

const pages = ['Inicio', 'Sesiones', 'Publicaciones', 'Contacto'];
const settings = ['Perfil', 'Cerrar Sesión'];

const NavBarFinal = () => {
    const usuario = useSelector((state : dataState) => state.usuario);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const onSubmit = (event: React.MouseEvent<HTMLElement>) => {

        event.preventDefault()
        const nombreBoton = event.currentTarget["name"]

        switch (nombreBoton) {

            case "Inicio":
                navigate('/');
                break;

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

    console.log("Usuario: ",usuario)

    return (
        
        <AppBar style={{'backgroundColor': '#9FD5D1'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Box 
                    component="img"
                    sx={{ display: { xs: 'none', md: 'flex', width: '15%', height: '15%', padding:  10, cursor: 'pointer' } }}
                    alt="logo"
                    src={logoLispector}
                    onClick={() => {
                        navigate('/');
                    }}
                />

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu} >
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>

                <Box 
                    component="img"
                    sx={{ display: { xs: 'flex', md: 'none', width: '15%', height: '15%', padding: 10, cursor: 'pointer' } }}
                    alt="logo"
                    src={logoLispector}
                    onClick={() => {
                        navigate('/');
                    }}
                />
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', paddingLeft: '10%' }}}>
                    {pages.map((page) => (
                    <Button
                        name={page}
                        onClick={onSubmit}
                        sx={{ my: 2, color: '#F6EEE9', display: 'flex', marginLeft: '5%', fontFamily: 'League Spartan, arial', fontWeight: 'bold', fontSize: '1.1rem', ":hover": { color: '#4D4D4D', backgroundColor: '#9FD5D1' } }}
                    >
                        {page}
                    </Button>
                    ))}
                    {usuario['nombre'] !== null ? (
                        <Button
                        name="Iniciar Sesión"
                        onClick={onSubmit}
                        sx={{ my: 2, color: '#F6EEE9', display: 'flex', marginLeft: '5%', fontFamily: 'League Spartan, arial', fontWeight: 'bold', fontSize: '1.1rem', ":hover": { color: '#4D4D4D', backgroundColor: '#9FD5D1' } }}
                        className="botonesNavBar"
                    >
                        <LoginIcon sx={{ mr: '0.5rem' }}/> Iniciar Sesión
                    </Button>
                    ):null}
                </Box>

                {usuario["nombre"] ==! null ? (
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                ) : null}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBarFinal;
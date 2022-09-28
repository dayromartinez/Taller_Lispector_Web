import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import logoLispector from '../images/Logo_Lispector_Solo.png';
import logoLispectorCompleto from '../images/Logo_Lispector_Completo.png';
import { Tooltip } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HouseIcon from '@mui/icons-material/House';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useSelector, useDispatch } from 'react-redux';
import { dataState } from '../redux/reducers';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { colors, settings } from './NavBarDesktop';
import MenuItem from '@mui/material/MenuItem';
import { logout } from '../redux/actions/userActions';



const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#9FD5D1',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function NavbarMobile({ children }) {
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const usuario = useSelector((state : dataState) => state.usuario);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onLogout = () => {
    dispatch(logout());
  }

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(null);
      const option = event.target?.['id']
      switch (option) {

          case "Perfil":
            navigate('/perfil');
              break;

          case "Cerrar Sesión":
              navigate('/');
              onLogout();
              break;
          
          default:
              break;
      }
  };

  const onClickLink = (id) => {
    switch( id ) {

      case 'Sesiones': 
        navigate('/sesiones')
        break;
      case 'Publicaciones': 
        navigate('/publicaciones')
        break;
      case 'Inicio':
        navigate('/');
        break;

    }
  }

  const listIcon = (text) => {

    switch( text ) {

      case 'Sesiones': 
        return (<AutoStoriesIcon />)
      case 'Publicaciones': 
        return (<CalendarMonthIcon />)
      case 'Inicio':
        return (<HouseIcon />)

    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ml: 1, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <Box 
            component="img"
            sx={{ display: { xs: 'flex', md: 'flex', width: '100px', height: '50px', padding: 10, cursor: 'pointer' } }}
            alt="logo"
            src={logoLispectorCompleto}
            onClick={() => {
                navigate('/');
            }}
          />

            <Box>
              {usuario['name'] === undefined ? (
                  <Button
                    name="Iniciar Sesión"
                    onClick={() => navigate('/inicio_sesion')}
                    sx={{ color: '#F6EEE9', display: 'flex', fontFamily: 'League Spartan, arial', fontWeight: 'bold', fontSize: '1.1rem', ":hover": { color: '#4D4D4D', backgroundColor: '#9FD5D1' } }}
                    className="botonesNavBar"
                  >
                    <Tooltip title='Iniciar Sesión'>
                        <LoginIcon sx={{ mr: '0.5rem' }}/>
                    </Tooltip>
                  </Button>
                  ) : (
                  <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Abrir Menú">
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
              )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Tooltip title='Inicio'>
            <Box 
                component="img"
                sx={{ display: { width: '90px', height: '90px', padding:  10, cursor: 'pointer', margin: '0 auto' } }}
                alt="logo"
                onClick={() => {
                    navigate('/');
                }}
                src={logoLispector}
            />
        </Tooltip>
        <List>
          {['Inicio', 'Sesiones', 'Publicaciones'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton id={text} onClick={ () => onClickLink(text) }>
                <ListItemIcon>
                  {listIcon(text)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        { children }
      </Main>
    </Box>
  );
}
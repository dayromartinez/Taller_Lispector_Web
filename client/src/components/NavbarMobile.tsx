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
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const drawerWidth = 240;

console.log(window.innerWidth)

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
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
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onClickLink = (id) => {
    switch( id ) {

      case 'Sesiones': 
        navigate('/sesiones')
        break;
      case 'Publicaciones': 
        navigate('/publicaciones')
        break;
      case 'Contacto':
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
      case 'Contacto':
        return (<QuestionAnswerIcon />)

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
            sx={{ display: { xs: 'flex', md: 'none', width: '100px', height: '50px', padding: 10, cursor: 'pointer' } }}
            alt="logo"
            src={logoLispectorCompleto}
            onClick={() => {
                navigate('/');
            }}
          />

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
          {['Sesiones', 'Publicaciones', 'Contacto'].map((text, index) => (
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
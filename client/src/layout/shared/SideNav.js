import * as React from 'react';
import NavLink from "react-router-dom/NavLink";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

///ICONOS///
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Perfil from '../../pages/Perfil';
import SitioEnConstruccion from'../../pages/SitioEnConstruccion';


export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink to='miPerfil'>
          <ListItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Mi Perfil
          </ListItemText>
            
        </ListItem></NavLink>
        <NavLink to='mensajes'>
        <ListItem>
          <ListItemIcon>
            <ChatBubbleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Mensajes
          </ListItemText>
        </ListItem></NavLink>
        <NavLink to='misEventos'>
        <ListItem>
          <ListItemIcon>
            <LocalActivityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Mis Eventos
          </ListItemText>
        </ListItem></NavLink>
        <NavLink to='misOfertas'><ListItem>
          <ListItemIcon>
            <CurrencyExchangeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Mis Ofertas
          </ListItemText>
        </ListItem></NavLink>
      </List>
      <Divider />
      <List>
        <NavLink to='configuracion'><ListItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Configuración
          </ListItemText>
        </ListItem></NavLink>
        <NavLink to='soporte'><ListItem>
          <ListItemIcon>
            <SupportAgentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Soporte
          </ListItemText>
        </ListItem></NavLink>
      </List>
    </Box>
  );

  return (
    <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0,backgroundColor:'darkred'}}>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Paper>
  );
}
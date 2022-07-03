import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Paper from '@mui/material/Paper';
import NavLink from "react-router-dom/NavLink";
import Home from '../../pages/Home';
import Eventos from '../../pages/Eventos';
import SitioEnConstruccion from '../../pages/SitioEnConstruccion';



export default function BottomNav(props) {


  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels
          sx={{
            backgroundColor:'darkred'
                    }}
        >
          <NavLink to="/enDais/home"><BottomNavigationAction label="Home" icon={<HomeIcon />}/></NavLink>
          <NavLink to="/enDais/buscar"><BottomNavigationAction label="Buscar" icon={<SearchIcon />}/></NavLink>
          <NavLink to="/enDais/eventos"><BottomNavigationAction label="Eventos" icon={<CalendarMonthIcon />}/></NavLink>
          <NavLink to="/enDais/ofertas"><BottomNavigationAction label="Ofertas" icon={<LocalOfferIcon />}/></NavLink>

        </BottomNavigation>
    </Paper>
  );}
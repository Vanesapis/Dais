import * as React from 'react';
import TemporaryDrawer from "./layout/shared/SideNav";
import BottomNav from "./layout/shared/BottomNav";
import Route from 'react-router-dom/Route';
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import CrearEvento from "./pages/CrearEvento";
import CrearOferta from "./pages/CrearOfertas";
import Container from "@mui/material/Container";
import Eventos from "./pages/Eventos";
import Evento from "./pages/Evento";
import SitioEnConstruccion from './pages/SitioEnConstruccion';
import Sala from './pages/Sala';
import Ofertas from './pages/Ofertas'



function Inicio() {
  return (
    <React.Fragment>
        <Container sx={{
          paddingTop:5,
          paddingBottom:5
        }}>
          <Route path="/enDais/home">
            <Home/>
          </Route>
          <Route path="/enDais/buscar">
            <SitioEnConstruccion/>
          </Route>
          <Route path="/enDais/eventos">
            <Eventos/>
          </Route>
          <Route path="/enDais/ofertas">
            <Ofertas/>
          </Route>
          <Route path="/enDais/miPerfil">
            <Perfil/>
          </Route>
          <Route path="/enDais/Mensajes">
            <Sala/>
          </Route>
          <Route path="/enDais/misOfertas">
            <Ofertas/>
          </Route>
          <Route path="/enDais/misEventos">
            <Eventos/>
          </Route>
          <Route path="/enDais/configuracion">
            <SitioEnConstruccion/>
          </Route>
          <Route path="/enDais/soporte">
            <SitioEnConstruccion/>
          </Route>
          <Route path="/enDais/evento">
            <Evento/>
          </Route>
          <Route path="/enDais/crearEvento">
            <CrearEvento/>
          </Route>
          <Route path="/enDais/crearOferta">
            <CrearOferta/>
          </Route>
          </Container>
          <BottomNav/>
          <TemporaryDrawer/>

    </React.Fragment>
  )}

export default Inicio;
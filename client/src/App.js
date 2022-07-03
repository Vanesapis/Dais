import * as React from 'react';
import Container from '@mui/material/Container';
import Login from'./pages/Login';
import Signup from './pages/Signup';
import Inicio from './Inicio';
import Route from 'react-router-dom/Route';



function App() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
      <Route path="/" exact>
        <Login/>
      </Route>
      <Route path="/signUp">
        <Signup/>
      </Route>
      <Route path="/enDais">
        <Inicio/>
      </Route>
      </Container>
    </React.Fragment>
  )}

export default App;
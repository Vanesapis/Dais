import * as React from 'react';
import Container from '@mui/material/Container';
import Login from'./pages/Login';
import Signup from './pages/Signup';
import Inicio from './Inicio';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/signUp" component={Signup}></Route>
            <Route path="/enDais" component={Inicio}></Route>
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  )}

export default App;
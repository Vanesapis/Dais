import React, { useEffect } from "react";
import { Avatar,  Grid, TextField,Button, Typography, Link } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LinkRouter from "react-router-dom/Link";
import Axios from 'axios';


function Login(props){ 
  const [loginStatus, setLoginStatus]=React.useState(false);
  const [userNameInput,setUserNameInput]=React.useState();
  const [claveInput,setclaveInput]=React.useState();

  Axios.defaults.withCredentials = true;

  const loggear =()=>{
    Axios.post('http://localhost:3001/login',{
            userName: userNameInput,
            clave: claveInput,
            }
        ).then((response)=>{
          if(response){    
          setLoginStatus(true);}
          console.log(loginStatus)
          console.log(response)
          window.location='/enDais/home'
        });
  }
  useEffect(()=>{
    Axios.get("http://localhost:5000/login").then((response)=>{
      if(response.data.loggedIn === true){
        setLoginStatus(response.data.user[0]);
        console.log(response.data.user[0])
      }
    })
  },[]);

  return (
    <Grid>
        <Grid align="center">
          <Avatar className="avatarStyle">
            <LoginOutlinedIcon></LoginOutlinedIcon>
          </Avatar>
          <h2>Iniciar Sesion</h2>
        </Grid>

        <TextField
          id="filled-basic"
          label="Nombre de usuario"
          variant="filled"
          placeholder="Enter Username"
          fullWidth
          requiered
          onChange={(e)=>{
            setUserNameInput(e.target.value);
          }}
        />

        <TextField
          id="filled-basic"
          label="Constraseña"
          variant="filled"
          placeholder="Enter Username"
          fullWidth
          requiered
          type="password"
          onChange={(e)=>{
            setclaveInput(e.target.value);
          }}
        />
        {/* <LinkRouter to='/enDais/home'> */}
        <Button className="btn-style" onClick={loggear} fullWidth variant="contained"
          sx={{backgroundColor:'darkred'}}
        >Iniciar Sesión</Button>
        {/* </LinkRouter> */}
        <Typography>
          <LinkRouter to='/signUp'>
            <Link>Registrate!</Link>
          </LinkRouter>
        </Typography>

        <Typography>
            <Link href="#" >¿Olvidaste tu contraseña?</Link>
        </Typography>
    </Grid>
  );
};

export default Login;

import {Grid, Avatar, Typography, TextField, Button,FormGroup,FormControlLabel,Checkbox, Link} from "@mui/material"
import InputFecha from '../layout/components/InputFecha';
import LinkRouter from'react-router-dom/Link';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import React from "react";
import Axios from 'axios';


const Signup = () =>{
    const [newNombre,setNewNombre]=React.useState();
    const [newApellido,setNewApellido]=React.useState();
    const [newCorreo,setNewCorreo]=React.useState();
    const [newUserName,setNewUserName]=React.useState();
    const [newClave,setNewClave]=React.useState();
    const [newFechaNac,setNewFechaNac]=React.useState();
    
    Axios.defaults.withCredentials = true;

    const registro = () =>{
        Axios.post('http://localhost:3001/signUp',{
            nombre: newNombre,
            apellido: newApellido,
            correo: newCorreo,
            userName: newUserName,
            clave: newClave,
            fechaNac: newFechaNac}
        ).then((response)=>{
            console.log(response);
        });
    }

    return(
        <Grid align="center">
            <Grid align="center">
                <Avatar className="avatar-style">
                    <AddCircleOutlinedIcon />
                </Avatar>
                
                <h2 className="headerStyle">Nuevo usuario</h2>
                <Typography variant="caption">Para crear cuenta rellene el formulario</Typography>
                <div><Typography variant="caption">Todos los campos son requeridos</Typography></div>
            </Grid>

            <form>
            <TextField fullWidth id="filled-basic" label="Nombre" variant="filled" 
            onChange={(e)=>{
                setNewNombre(e.target.value);
            }}/>
            <TextField fullWidth id="filled-basic" label="Apellido" variant="filled" 
            onChange={(e)=>{
                setNewApellido(e.target.value);
            }}/>
            <TextField fullWidth id="filled-basic" label="Email" variant="filled" 
            onChange={(e)=>{
                setNewCorreo(e.target.value);
            }}/>
            <TextField fullWidth id="filled-basic" label="UserName" variant="filled" 
            onChange={(e)=>{
                setNewUserName(e.target.value);
            }}/>
            <TextField fullWidth id="filled-basic" label="Contraseña" variant="filled" 
            onChange={(e)=>{
                setNewClave(e.target.value);
            }}/>
            <TextField fullWidth id="filled-basic" label="Repetir contraseña" variant="filled" />
            <InputFecha
            onChange={(e)=>{
                setNewFechaNac(e.target.value);
            }}/>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Aceptar terminos y condiciones" />
             </FormGroup>
            <LinkRouter to='/'>
            <Button onClick={registro} variant="contained" color="primary" fullWidth sx={{backgroundColor:'darkred'}}
            >¡Registrarme!</Button>
            </LinkRouter>
            </form>
            <Typography>
          <LinkRouter to='/'>
            <Link>Volver a "Iniciar sesión"</Link>
          </LinkRouter>
        </Typography>
    </Grid>   
    )
    
}

export default Signup;
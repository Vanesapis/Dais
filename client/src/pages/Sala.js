import { Paper, TextField, Box } from "@mui/material";
import Mensajes from "../layout/components/Mensajes";
import * as React from "react";
import Typography from "@mui/joy/Typography";

export default function Sala(){
      return(
        <React.Fragment>
          <Paper sx={{top:100}}>
            
              Holipis
            
          </Paper>
          <Paper sx={
            {
            overflow: 'auto',
            height: 400,
            backgroundColor:'whitesmoke'
            }}>
            <Mensajes/>
            <Mensajes/>
            <Mensajes/>
            </Paper>
            <TextField fullWidth label="Envía un mensaje" variant='filled'></TextField>
        </React.Fragment>
    )}


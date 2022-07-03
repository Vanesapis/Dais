import {Box, Typography} from '@mui/material';
import * as React from 'react';

export default function Mensajes(){
    return(
        <Box
            sx={{
            widht:'fit content',
            my: 2,
            p: 1,
            border: '1px solid',
            borderRadius: 3,
            backgroundColor:'white'
            }}
        >
        <Typography>Contenido</Typography>
        </Box>
        )}
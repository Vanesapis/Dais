import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import { Box } from '@mui/material';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from '@mui/joy/styles/CssVarsProvider';
import AvatarItem from './AvatarItem';
import TituloItem from './TituloItem';

export default function SimplesItem(props) {
    return (
    <CssVarsProvider>
    <Card
      row
      variant="outlined"
      sx={{
        margin: 1,
        gap: 2,
        bgcolor: 'background.body',
      }}
    ><Box component="div" sx={{ display: 'inline' , minWidth:0.3, marginY:5}}>
        <AvatarItem obj_img={props.obj_img} /></Box>
      <CardContent>
      <TituloItem obj_titulo={props.obj_titulo}/>
        <Typography level="body2">
            {props.obj_fecha}
        </Typography>
        <Typography level="body2">
            {props.obj_descripcion}
        </Typography>
      </CardContent>
    </Card>
    </CssVarsProvider>
  );
}

import { Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LinkRouter from "react-router-dom/Link";
import Fab from '@mui/material/Fab';
import * as React from 'react';
import SimplesItem from '../layout/components/SimplesItem';

export default function Ofertas() {
    const obj_eventos = [
        //AQUI SE PASA EL OBJETO, UNA VEZ HECHA LA CONEXION A BD
        {
        obj_titulo: 'Holi',
        obj_img: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
        obj_fecha: new Date(Date.now()).toString(),
        obj_descripcion: 'JIJI'
        },
        {
        obj_titulo: 'Segundo',
        obj_img: 'https://previews.123rf.com/images/objowl/objowl1302/objowl130200021/17929440-explosi%C3%B3n-floral-imagen-abstracta-digital-con-un-dise%C3%B1o-de-flores-psicod%C3%A9licas-en-amarillo-azul-verd.jpg',
        obj_fecha: new Date(Date.now()-50).toString(),
        obj_descripcion: 'Otra descripcion'
        }
    ];
    return (
    <Container>    
        <LinkRouter to='evento'><SimplesItem
        obj_titulo={obj_eventos[0].obj_titulo}
        obj_img={obj_eventos[0].obj_img}
        obj_fecha={obj_eventos[0].obj_fecha}
        obj_descripcion={obj_eventos[0].obj_descripcion}
        /></LinkRouter>
        <SimplesItem
        obj_titulo={obj_eventos[1].obj_titulo}
        obj_img={obj_eventos[1].obj_img}
        obj_fecha={obj_eventos[1].obj_fecha}
        obj_descripcion={obj_eventos[1].obj_descripcion}
        />
        <LinkRouter to='crearOferta'>
        <Fab color="success" label="add" sx={{
              position: 'absolute',
              bottom: 70,
              right: 16,
        }}>
        <AddIcon/>
        </Fab>
        </LinkRouter>
    </Container>
    )}
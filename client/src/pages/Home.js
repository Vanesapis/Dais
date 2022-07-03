import { Container } from '@mui/material';
import * as React from 'react';
import FeedItem from '../layout/components/FeedItem';
import Axios from 'axios';


export default function Home() {
  var contenido=[];
  React.useEffect(()=>{
    Axios.get("http://localhost:5000/enDais/home").then((response)=>{
      contenido = response;
      console.log(contenido);
      
    })
  },[]);
    const objs_feed = [
        //AQUI SE PASA EL OBJETO, UNA VEZ HECHA LA CONEXION A BD
        {
        obj_tipo: 'Amistoso',
        obj_titulo: 'Holi',
        obj_img: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
        obj_fecha: new Date(Date.now()).toString(),
        obj_botonDetalles: 'Detallitos',
        obj_botonParticipar: 'Quiero ir',
        },
        {
          obj_tipo: 'Torneo',
          obj_titulo: 'jelou',
          obj_img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/04/parchis-1913493.jpg',
          obj_fecha: new Date(Date.now()).toString(),
          obj_botonDetalles: 'Detallitos',
          obj_botonParticipar: 'Quiero ir',
          },
        {
        obj_tipo: 'Feria',
        obj_titulo: 'Wasa',
        obj_img: 'https://cdnm.westwing.com/image/upload/v1/contenthub/app/uploads/es/2020/04/01132257/jenga-juego-de-mesa.jpg',
        obj_fecha: new Date(Date.now()).toString(),
        obj_botonDetalles: 'Detallitos',
        obj_botonParticipar: 'Quiero ir',
        }
    ];

  return (
    <Container>
      


      {objs_feed.map((obj_feed) =>{
        return(
          <FeedItem
          obj_tipo={obj_feed.obj_tipo}
          obj_titulo={obj_feed.obj_titulo}
          obj_img={obj_feed.obj_img}
          obj_fecha={obj_feed.obj_fecha}
          obj_botonDetalles={obj_feed.obj_botonDetalles}
          obj_botonParticipar={obj_feed.obj_botonParticipar}
      />)
    })}
    </Container>

  );
}
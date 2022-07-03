import * as React from 'react';

import { Button, Card, Container, Rating} from "@mui/material";
import AvatarItem from "../layout/components/AvatarItem";
import TituloItem from "../layout/components/TituloItem";



function Perfil() {
  
  
  const obj_user={
    obj_id:"",
    obj_userName:"Michi Moscu",
    obj_img:"https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg",
    obj_lema:"ratones juju",
    obj_valoracion: 2,
    obj_descripcion:"Soy un michi moscu  muy bellaco jejejeje"
  };
  return(
    <Container maxWidth="sm">
          <TituloItem obj_titulo={obj_user.obj_userName}/>
          <AvatarItem obj_img={obj_user.obj_img}/>
          <h3>{obj_user.obj_lema}</h3>
          <Rating name="read_only" value={obj_user.obj_valoracion}/>
          <h5>{obj_user.obj_descripcion}</h5>
          <div>
          <Button variant="outlined">Eventos</Button>
          <Button variant="outlined">Etiquetas</Button>            
          </div>
          <div>
          <Button variant="outlined">Enviar Mensaje</Button>
          </div>
          <div>
          <Button variant="outlined">Agregar/Eliminar</Button>
          </div>

    </Container>
  );
}

export default Perfil;
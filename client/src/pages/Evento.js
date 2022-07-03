import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Card, Container, Rating} from "@mui/material";
import AvatarItem from "../layout/components/AvatarItem";
import TituloItem from "../layout/components/TituloItem";

//iconos
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';



function Evento() {
    const [b_participar,setB_participar]= React.useState('Participar');
    const participarHandler = (event) =>{
        if(b_participar=='Participar'){
        setB_participar("Estoy participando");}
        else{
            setB_participar("Participar");}
        
    }
    const obj_evento={
    obj_id:"",
    obj_tipo: 'Amistoso',
    obj_titulo:"Cumple Gatuno",
    obj_img:"https://media.istockphoto.com/photos/surprised-fold-cat-in-a-party-birthday-hat-copy-space-picture-id1346787021?b=1&k=20&m=1346787021&s=170667a&w=0&h=K7g7Wv_eydYZeGjlIt3EVyQNeeQlhp0n3Cd0vKnC1uA=",
    obj_fecha: new Date(Date.now()).toString(),
    obj_direccion:"Su casa 123, santiago, chile",
    obj_autor:"Michimoscú",
    obj_descripcion:"Un evento super cool"
  };
  return(
    <Container maxWidth="xs">
        <Card variant="elevation">
          <Container>
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          <h5>{obj_evento.obj_tipo}</h5>
          </Typography>
          <AvatarItem obj_img={obj_evento.obj_img}/>
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <TituloItem obj_titulo={obj_evento.obj_titulo}/>
          </Typography>
          <p>
            <EventIcon fontSize="small"></EventIcon>  {obj_evento.obj_fecha}
          </p>
          <p>
            <LocationOnIcon fontSize="small"></LocationOnIcon>  {obj_evento.obj_direccion}
          </p>
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          <h5><DescriptionIcon fontSize="small"></DescriptionIcon>  {obj_evento.obj_descripcion}</h5>
          </Typography>
          <div>
          <Button variant="outlined" onClick={participarHandler}>{b_participar}</Button>
          </div><div>
          <Button variant="outlined">Ver Participantes</Button>            
          </div>
          </Container>
        </Card>
    </Container>
  );
}

export default Evento;
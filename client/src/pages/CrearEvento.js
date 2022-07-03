import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import InputFecha from '../layout/components/InputFecha';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';


function CrearEvento(){
    const [tipoEvento, setTipoEvento] = React.useState('');

    const handleChange = (event) => {
        setTipoEvento(event.target.value);
    };
    const submitHandler = (event) =>{
        event.preventDefault();
    }

    return(
        <Container>
            <h1>Crear Eventos</h1>
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <InputLabel id="label_tipoEvento">Tipo de Evento</InputLabel>
                    <Select
                    label="label_tipoEvento"
                    id="input_tipoEvento"
                    value={tipoEvento}
                    onChange={handleChange}
                    variant="standard"
                    fullWidth
                    >
                    <MenuItem value={"Amistoso"}>Amistoso</MenuItem>
                    <MenuItem value={"Torneo"}>Torneo</MenuItem>
                    <MenuItem value={"Feria"}>Feria</MenuItem>
                    </Select>
                
                <div><TextField id="input_tituloEvento" label="Título" variant="standard" margin="normal"fullWidth/></div>
                <div><InputFecha/></div>
                <div><TextField id="input_ubicación_calle_num_res" label="Dirección" variant="standard" margin="normal" fullWidth/></div>
                <div>
                    <TextField id="input_ubicación_comuna" label="Comuna" variant="standard" margin="normal"/>
                    <TextField id="input_ubicación_Region" label="Región" variant="standard" margin="normal"/>
                </div>
                <div>
                    <TextField
                        variant="standard"
                        id="input_descripcion"
                        label="Describe tu evento"
                        multiline
                        fullWidth
                        rows={4}
                    />
                </div>
                <div>
                <TextField
                    variant="standard"
                    id='input_img'
                    label="Sube una imagen"
                    fullWidth/>                
                <IconButton color="primary" aria-label="upload picture">
                    <AttachFileIcon />
                </IconButton>
                </div>

</div>
<Button type="submit" sx={{margin:2}}>Crear Evento</Button>
            </form>
        </div>
        </Container>
    );
}

export default CrearEvento;
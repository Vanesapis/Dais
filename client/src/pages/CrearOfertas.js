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
            <h1>Crear Oferta</h1>
        <div>
            <form onSubmit={submitHandler}>
                <div>
                
                <div><TextField id="input_tituloEvento" label="Título" variant="standard" margin="normal"fullWidth/></div>
                <div><TextField id="input_ubicación_calle_num_res" label="Dirección" variant="standard" margin="normal" fullWidth/></div>
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
<Button type="submit" sx={{margin:2}}>Crear Oferta</Button>
            </form>
        </div>
        </Container>
    );
}

export default CrearEvento;
import Typography from '@mui/joy/Typography';

function TituloItem(props){
    return(
    <Typography level="h1" sx={{ fontSize: 'md', mt: 2 }}>
        {props.obj_titulo}
    </Typography>);
}

export default TituloItem;
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import AvatarItem from './AvatarItem';
import TituloItem from './TituloItem'
import { CssVarsProvider } from'@mui/joy/styles/CssVarsProvider';
import { CardHeader } from '@mui/material';

export default function FeedItem(props) {
  return (
    <CssVarsProvider>
    <Card variant="outlined">
      <CardHeader title={props.obj_tipo}/>
      <AvatarItem obj_img={props.obj_img} />
      <TituloItem obj_titulo={props.obj_titulo}/>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        {props.obj_fecha}
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          borderTop: '1px solid',
          borderColor: 'neutral.outlinedBorder',
          bgcolor: 'background.level1',
        }}
      >
        <Typography
          level="body3"
          sx={{ fontWeight: 'md', color: 'text.secondary' }}
        >
          {props.obj_botonDetalles}
        </Typography>
        <Box sx={{ width: 2, bgcolor: 'divider' }} />
        <Typography
          level="body3"
          sx={{ fontWeight: 'md', color: 'text.secondary' }}
        >
          {props.obj_botonParticipar}
        </Typography>
      </CardOverflow>
    </Card>
    </CssVarsProvider>
  );
}

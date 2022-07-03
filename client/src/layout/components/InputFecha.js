import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function InputFecha() {
  return (
    <div>
    <Stack component="form" noValidate spacing={3}>
      <TextField
        fullWidth
        id="datetime-local"
        label="Fecha y Hora"
        type="datetime-local"
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack></div>
  );
}
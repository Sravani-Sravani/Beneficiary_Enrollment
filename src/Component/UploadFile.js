import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function UploadFile() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button sx={{backgroundColor:'white',text:'black',color:'black',border:'1px solid black',height:'50%'}} variant="contained" component="label">
        choose file
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
  );
}
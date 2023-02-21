import React from 'react'
import Button from '@mui/material/Button';
const SubmitButton = (props) => {
  return (
    <div>
       <Button variant="contained" sx={{ m: 1, minWidth: 100 }} size="small">
          {props.title}
        </Button>
    </div>
  )
}

export default SubmitButton

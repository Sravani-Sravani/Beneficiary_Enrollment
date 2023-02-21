import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const RadioButton = (props) => {
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value={props.title1} control={<Radio />} label={props.title1} />
        <FormControlLabel value={props.title2} control={<Radio />} label={props.title2} />
      </RadioGroup>
    </div>
  )
}
export default RadioButton

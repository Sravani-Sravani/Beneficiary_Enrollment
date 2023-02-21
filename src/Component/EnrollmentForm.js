import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GridBreak from '@mui/material/Grid';
import Texts from './Texts';
import RadioButton from './RadioButton';
import ControlledCheckbox from './ControlledCheckBox';
import SubmitButton from './SubmitButton';
import UploadFile from './UploadFile';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Date from './Date'
import SelectButton from './SelectButton';
import SelectButton2 from './SelectButton2';
const EnrollmentForm = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#2196f3',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    border: '1px solid #2196f3',
    justify: 'flex-start',
  }));
  return (
    <div>
      <Box sx={{ flexGrow: 1, height: '100%', width: '100%', }}>

        <Grid container spacing={1}>
          
            <Grid item xs={6} sx={{ justifyContent: 'flex-start', backgroundColor: 'white', border: 'white' }}>
                  <Item sx={{ backgroundColor: '#dbefff', color: '#2196f3', border: 'white', display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '60%', fontWeight: 'bold' }}>Date of Birth</Item>
              </Grid>
              <Grid item xs={6}>
              <Item sx={{
                backgroundColor: 'white', color: 'black', borderColor: 'white',
                display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '60%'
              }}>
                <Date />
              </Item>
            </Grid>
          
          <GridBreak></GridBreak>

          <Grid item xs={12}>
            <Item sx={{ fontWeight: 'bold' }}>Beneficiary Details</Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ backgroundColor: '#dbefff', color: '#2196f3', border: 'white', display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}><b>Name</b></Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: '#dbefff', color: '#2196f3', border: 'white', display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}><b>Gender</b></Item>
          </Grid>

          <Grid item xs={6} sx={{ justifyContent: 'flex-start' }}>
            <Item sx={{
              backgroundColor: 'white', color: 'black', borderColor: '#2196f3',
              display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '70%'
            }}>
              <Texts ></Texts>
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ justifyContent: 'flex-start' }}>
            <Item sx={{
              backgroundColor: 'white', color: 'black', borderColor: '#2196f3',
              display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '70%'
            }}>
              <RadioButton title1='Male' title2='Female'></RadioButton>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: '#dbefff', color: '#2196f3', border: 'white', display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '55%' }}><b>Blood Group</b></Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: 'white', color: 'black', borderColor: '#2196f3', display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '55%', marginBottom: 2 }}>
              <SelectButton sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '30%' }}></SelectButton>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ backgroundColor: '#dbefff', color: '#2196f3', border: 'white', display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '55%' }}><b>Relationship</b></Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: '#dbefff', color: '#2196f3', border: 'white', display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '55%' }}><b>Member Disabled</b></Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ backgroundColor: 'white', color: 'black', borderColor: '#2196f3', display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '50%', marginBottom: 2 }}>
              <SelectButton2 sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '40%' }}></SelectButton2>
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ justifyContent: 'flex-start' }}>
            <Item sx={{
              backgroundColor: 'white', color: 'black', borderColor: '#2196f3',
              display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '50%'
            }}>
              <RadioButton title1='Yes' title2='No'></RadioButton>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: '#dbefff', color: '#2196f3', border: 'white', display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '55%' }}><b>DOB Certificate</b></Item>
          </Grid>
          <Box width="100%" />
          <Grid item xs={6} >
            <Item sx={{ backgroundColor: 'white', color: 'black', borderColor: '#2196f3' }}>
              <UploadFile ></UploadFile>
            </Item>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: '#dbefff', color: '#2196f3', border: 'white', display: "flex", justifyContent: "flex-start", alignItems: "flex-start", height: '55%' }}><b>Photo</b></Item>
          </Grid>
          <Box width="100%" />
          <Grid item xs={6} >
            <Item sx={{ backgroundColor: 'white', color: 'black', borderColor: '#2196f3' }}>
              <UploadFile ></UploadFile>
            </Item>
          </Grid>

          <Grid item xs={12} sx={{ height: '5%' }}>
            <Item >
              <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center' }} >
                <Typography sx={{ fontWeight: 'bold' }}>DECLARATION</Typography>
                <ControlledCheckbox ></ControlledCheckbox>
              </Stack>
            </Item>
          </Grid>

          <Grid item xs={12} sx={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
            <Item sx={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
              <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                I declare that <br></br>  </Typography>
              <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                - I have no objection in sharing Aadhar data of my family. <br></br>  </Typography>
              <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                - I am liable for disciplinary action for declaring ineligible family as dependents, and<br></br>  </Typography>
              <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                - I declare that the above information is true to my knowledge and submittting to Dr. YSR Aarogyasri Health Care Trust for issue of health cards under beneficiary.<br></br> </Typography>
              <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                - I am liable for disciplinary action for declaring ineligible family member if any as Dependents. </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Stack direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}>
        <SubmitButton title='Submit'></SubmitButton>
        <SubmitButton title='Reset'></SubmitButton>
        <SubmitButton title='Close'></SubmitButton>
      </Stack>
    </div>
  )
}

export default EnrollmentForm

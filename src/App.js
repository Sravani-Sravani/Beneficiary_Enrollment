import EnrollmentForm from './Component/EnrollmentForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
    <div>
      <Box sx={{width:'100%',height:'100%'}}>
      <Typography  sx={{ display: 'flex', justifyContent:'center',alignItems:"center"}} variant="h3" gutterBottom>
        Beneficiary Enrollment
      </Typography>
      <EnrollmentForm></EnrollmentForm>
      </Box>
      </div>
      </>
  );
}

export default App;

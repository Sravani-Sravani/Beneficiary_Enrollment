import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { useForm, Controller } from "react-hook-form";
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Autocomplete from '@mui/material/Autocomplete';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BeneficiaryDetails from './BeneficiaryDetails';

function PersonalDetails() {

    const options = [
        { label: 'One', id: 1 },
        { label: 'Two', id: 2 },
    ];
    const validationSchema = Yup.object().shape({
        Name: Yup.number().required("number required")
            .min(3, "number must be at least 3 characters")
            .max(10, "number must not exceed 10 characters"),
        Name: Yup.string().required("Name is required").min(3, "name must be at least 3 characters").max(10, "Name must not exceed 10 characters"),
        maritalstatus: Yup.string().required("Name is required"),
    }
    );

    const onSubmit = (data) => {
        // createSession(data);
        // console.log(data);
      };
    const { register, control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
    const [value, setValue] = React.useState(null);
    return (
        <>

            <form
            onSubmit={handleSubmit(onSubmit)}
            >
                <Card sx={{ mt: 2, ml: 2,backgroundColor:'#F5F5F5' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20, marginBottom: 2, textAlign: 'center',backgroundColor:'#2196f3',color:'white' }} color="text.secondary" gutterBottom>
                            Personal Details
                        </Typography>
                        <Grid container direction="row" rowSpacing={0} columnSpacing={2} justify="flex-end" alignItems="center">
                            <Grid item xs={16} sm={12} md={12} lg={12}>
                                <Grid container direction="row" rowSpacing={2} columnSpacing={2} justify="flex-end" alignItems="center">
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="Name"
                                            label="Name"
                                            name="Name"
                                            autoComplete="Name"
                                            size="small"
                                            {...register('Name')}
                                            error={errors.Name ? true : false}


                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4} >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Date of Birth"
                                                inputFormat="MM/DD/YYYY"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField size="small" fullWidth {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 1 }}
                                            renderInput={(params) => <TextField {...params} label="Gender" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="maritalstatus"
                                            name="maritalstatus"
                                            options={options}
                                            sx={{ width: '100%', mt: 1 }}
                                            renderInput={(params) => <TextField {...params} label="Martial Status" />}
                                            {...register('maritalstatus')}
                                            error={errors.maritalstatus ? true : false}

                                        />
                                        <Typography variant="inherit" color="error"> {errors.maritalstatus?.message} </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={4} lg={4} >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Date of Joining"
                                                inputFormat="MM/DD/YYYY"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField size="small" fullWidth {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 1 }}
                                            renderInput={(params) => <TextField {...params} label="Community" />}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 1 }}
                                            renderInput={(params) => <TextField {...params} label="Blood Group" />}
                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 1 }}
                                            renderInput={(params) => <TextField {...params} label="Disabled" />}
                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 1 }}
                                            renderInput={(params) => <TextField {...params} label="Employee Type" />}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </form>



        </>
    );
}

export default PersonalDetails;

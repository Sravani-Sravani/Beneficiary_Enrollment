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
import List from '@mui/material/List';
import { ListItem } from '@mui/material';

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

function PostingDetails() {

    const options = [
        { label: 'One', id: 1 },
        { label: 'Two', id: 2 },
    ];

    const [value, setValue] = React.useState(null);
    return (
        <>
            {/* <Header /> */}

            <Card sx={{ mt: 2, ml:2, backgroundColor:'#F5F5F5' }}>

                <CardContent>

                    <Typography sx={{ fontSize: 20, textAlign: 'center',backgroundColor:'#2196f3',color:'white'}} color="text.secondary" gutterBottom>
                        Posting Details
                    </Typography>
                    <Grid container direction="row" rowSpacing={0} columnSpacing={2} justify="flex-end" alignItems="center">
                        <Grid item xs={16} sm={12} md={12} lg={12}>
                            <Grid container direction="row" rowSpacing={2} columnSpacing={2} justify="flex-end" alignItems="center">
                                <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
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
                                            renderInput={(params) => <TextField {...params} label="HOD*" />}
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
                                            renderInput={(params) => <TextField {...params} label="State" />}
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
                                            renderInput={(params) => <TextField {...params} label="District" />}
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
                                            renderInput={(params) => <TextField {...params} label="DDo List" />}
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
                                            renderInput={(params) => <TextField {...params} label="Designation" />}
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
                                            renderInput={(params) => <TextField {...params} label="Service" />}
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
                                            renderInput={(params) => <TextField {...params} label="Category" />}
                                        />
                                    </Grid>



                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </CardContent>
            </Card>



        </>
    );
}

export default PostingDetails;

import React, {useState} from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import {CssBaseline, TextField, Box, Button, Typography, Container } from "@mui/material";
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import axios from "axios";

import BaseLayout from "../BaseLayout";

function Register() {
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState ({
        name: '',
		email: '',
        password: '',
        user_role: 1,
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister( {...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        
        const data= {
            name: registerInput.name,
			email: registerInput.email,
            password: registerInput.password,
            user_role: registerInput.user_role,
        }

        axios.get('sanctum/csrf-cookie').then(response => { 
            axios.post('/api/register', data).then(res => {
                if(res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    //swal("Success", res.data.message,"success");
                    navigate('/login');
                }
                else {
                    setRegister({...registerInput, error_list: res.data.validation_errors});
                }
            });
        });

    }

    return (
        <BaseLayout title={"AccountInfo page"}>	
            <CssBaseline/>
            <Container maxWidth="sm">    
                <Box 
                    sx={{
                        marginTop: 16,
                        marginBottom: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Box component={"form"} onSubmit={registerSubmit}>
                        <TextField
                            type='text'
                            margin="normal"
                            fullWidth
                            label="Name"
                            name="name"
                            onChange={handleInput}
                            value={registerInput.name}
                        />
                        <Typography variant="span">{registerInput.error_list.name}</Typography>
                        <TextField
                            type='email'
                            margin="normal"
                            fullWidth
                            label="Email"
                            name="email"
                            onChange={handleInput}
                            value={registerInput.email}
                        />
                        <Typography variant="span">{registerInput.error_list.email}</Typography>
                        <TextField
                            type='password'
                            margin="normal"
                            fullWidth
                            label="Password"
                            name="password"
                            onChange={handleInput}
                            value={registerInput.password}
                        />
                        <Typography variant="span">{registerInput.error_list.password}</Typography>
                        <FormLabel id="user_role-label" sx={{ my:2 }}>Select User Type</FormLabel>
                        <RadioGroup
                            aria-label="user_role"
                            overlay
                            name="user_role"
                            value={registerInput.user_role}
                            onChange={handleInput}
                            sx={{
                                flexDirection: 'row',
                                gap: 2,
                                [`& .${radioClasses.checked}`]: {
                                [`& .${radioClasses.action}`]: {
                                    inset: -1,
                                    border: '3px solid',
                                    borderColor: 'primary.500',
                                },
                                },
                                [`& .${radioClasses.radio}`]: {
                                display: 'contents',
                                '& > svg': {
                                    zIndex: 2,
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    bgcolor: 'background.body',
                                    borderRadius: '50%',
                                },
                                },
                            }}
                            >
                            {['User', 'Organization'].map((value, index) => (
                                <Sheet
                                key={value}
                                variant="outlined"
                                sx={{
                                    borderRadius: 'md',
                                    bgcolor: 'background.level1',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    p: 2,
                                    minWidth: 120,
                                }}
                            >
                            <Radio id={value} value={index+1} checkedIcon={<CheckCircleRoundedIcon />} />
                            <Avatar variant="soft" size="sm" />
                            <FormLabel htmlFor={value}>{value}</FormLabel>
                            </Sheet>
                        ))}
                        </RadioGroup>
                        <Button
                            fullWidth
                            variant={"outlined"}
                            type={"submit"}
                            sx={{mt: 3, mb: 2}}
                        >
                            Register
                        </Button>
                        <Typography>Have already an account ?
                            <NavLink to="/login">
                                <span style={{marginLeft:"4px"}}>Login</span>
                            </NavLink>
                        </Typography>
                    </Box>    
                </Box>    
            </Container>
        </BaseLayout>
    );
}

export default Register;
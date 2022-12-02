import React, {useState} from "react";
import {Box, Button, TextField, CssBaseline, Typography, Container } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [loginInput, setLogin] = useState ({
		email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin( {...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault()

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('sanctum/csrf-cookie').then(response => { 
            axios.post('/api/login', data).then(res => {
                if(res.data.status === 200) {
                    localStorage.setItem('auth_id', res.data.profileid);
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    if(res.data.usertype == 0) {
                        navigate('/dashboard');
                    }
                }
                else if(res.data.status === 401) {
                    alert('error 401')
                }else {
                    setLogin({...loginInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

    return (
        <React.Fragment>
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
                    <img src="../../../../images/sas-logo.png" className="brand-logo" />    
                    <Box component={"form"} onSubmit={loginSubmit}>
                        <TextField
                            margin="normal"
                            fullWidth
                            type="text"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            onChange={handleInput}
                            value={loginInput.email}
                        />
                        <Typography variant="span">{loginInput.error_list.email}</Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            type="password"
                            label="Password"
                            name="password"
                            autoComplete="password"
                            onChange={handleInput}
                            value={loginInput.password}
                        />
                        <Typography variant="span">{loginInput.error_list.password}</Typography>
                        <Button
                            fullWidth
                            variant={"outlined"}
                            type={"submit"}
                            sx={{mt: 3, mb: 2}}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>            
    );
}

export default Login;
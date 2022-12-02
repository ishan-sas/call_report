import React, { useState } from "react";
import { Grid, Container, Box, TextField, FormControl, Typography, Button, Select, MenuItem } from "@mui/material";
import MainLayout from "../BaseLayout";
import axios from 'axios';
import swal from 'sweetalert';

function AddNewUser() {
  const [userRole, setUserRole] = useState('');
  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    status: 1,
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  }

  const selectUserRole = (e) => {
    setUserRole(e.target.value);
  }

  const registerNewUser = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
      user_role: userRole,
      status: 1
    }
    axios.get('sanctum/csrf-cookie').then(response => {
      axios.post('/api/register', data).then(res => {
        if (res.data.status === 200) {
          swal("Success", res.data.message,"success");
        }
        else {
          setRegister({ ...registerInput, error_list: res.data.validation_errors });
        }
      });
    });

  }

  return (
    <MainLayout>
      <Grid container>
        <Typography variant={"h5"} className="page_title"> Add New User</Typography>
        <Container>
          <Grid container>
            <Grid item xs={7}>

            </Grid>
            <Grid item xs={5}>
              <Box component={"form"} onSubmit={registerNewUser}>
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
                <FormControl className="form-group">
                  <Select
                    labelId="user-role-label"
                    fullWidth
                    id="user-role"
                    value={userRole}
                    label="User role"
                    onChange={selectUserRole}
                  >
                    <MenuItem value={1}>Sales person</MenuItem>
                    <MenuItem value={2}>RMU team</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  fullWidth
                  variant={"outlined"}
                  type={"submit"}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register New User
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </MainLayout>
  )
}

export default AddNewUser
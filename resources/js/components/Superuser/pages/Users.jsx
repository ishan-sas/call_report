import React, { useState, useEffect } from "react";
import {Grid, TableContainer, Paper, Table, TableBody, Typography, TableHead, TableRow, TableCell, Button } from "@mui/material";
import MainLayout from "../BaseLayout";
import { Link } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Users() {  

  const [Loading, setLoading] = useState(true);
  const [UserList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then(res => {
      if(res.status == 200) {
        setUserList(res.data.users);
      }
      setLoading(false);
    });
  }, []);

  if(Loading) {
    return <h4>Loading users...</h4>
  }

  const deactivateAccount = (e, id) => {
    e.preventDefault();
      const selectedAcc = e.currentTarget;
      selectedAcc.innerText = 'Deactivating';

    swal({
      title: "Are you sure?",
      text: "You need to deactivate this account?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.post(`/api/deactivate-user/${id}`).then(res=> {
          if(res.data.status === 200) {
            console.log(res)
            console.log('Account deactivated.!');
            // selectedAcc.closest('tr').remove();
            // swal("Poof! Account has been deactivated!", {
            //   icon: "success",
            // });
          }
          else {
            console.log('Failed.');
          }
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });



  } 

  return (
    <MainLayout>
      <Grid container>
        <Typography variant={"h5"} className="page_title"> Users</Typography>
        <Link to={'/add-new-user'}>Add New User</Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                {/* <TableCell>Carbs&nbsp;(g)</TableCell> */}
                <TableCell>Deactivate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {UserList.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  {/* <TableCell>{row.name}</TableCell> */}
                  <TableCell><Button onClick={(e) => deactivateAccount(e, row.id)}>Deactivate</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </MainLayout>
  )
}

export default Users
import React, { useState, useEffect } from "react";
import {Grid, TableContainer, Paper, Table, TableBody, Typography, TableHead, TableRow, TableCell, Button } from "@mui/material";
import MainLayout from "../BaseLayout";
import axios from 'axios';
import swal from 'sweetalert';
import Pagination from "../components/Pagination";

function Users() {  
  const [Loading, setLoading] = useState(false);
  const [MinuteList, setMinuteList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(7) //7 Per Page

  useEffect(() => {
    const fetchMinutes = async () => {
      setLoading(true)
      //const res = await axios.get('http://127.0.0.1:8000/api/minutes')
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setMinuteList(res.data)
      setLoading(false)
    }

    fetchMinutes()
  }, []);

  if(Loading && MinuteList.length === 0) {
    return <h4>Loading...</h4>
  }

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const curentMinutes = MinuteList.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(MinuteList.length/postsPerPage)

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
        axios.put(`/api/deactivate-user/${id}`).then(res=> {
          if(res.data.status === 200) {
            console.log('Account deactivated.!');
            selectedAcc.closest('tr').remove();
            swal("Poof! Account has been deactivated!", {
              icon: "success",
            });
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
        <Typography variant={"h5"} className="page_title">
          Minutes
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Sales Person</TableCell>
                <TableCell>Customer Name</TableCell>
                {/* <TableCell>Carbs&nbsp;(g)</TableCell> */}
                <TableCell>Deactivate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {curentMinutes.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.body}</TableCell>
                  {/* <TableCell>{row.name}</TableCell> */}
                  <TableCell><Button onClick={(e) => deactivateAccount(e, row.id)}>Deactivate</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>         

      </Grid>
    </MainLayout>
  )
}

export default Users
import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import database from '../../firebase.config';
import { ref, onValue, set } from "firebase/database";

const Home = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const starCountRef = ref(database, 'Subject');
        onValue(starCountRef, (snapshot) => {
            const subjectList = [];
            const data = snapshot.val();
            for (let id in data) {
                subjectList.push({ id, ...data[id] })
                console.log(data[id]);
            }
            console.log(subjectList);
            setData(subjectList);
        });
    }, [])
    //handle delete data
    const handleDelete = (id) => {
        const postListRef = ref(database, `Subject/${id}`);
        set(postListRef, null);
    }
    return (
        <div className="table">
            <TableContainer sx={{ backgroundColor: '#a52a2a17' }} component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: 'brown' }} align="left">Subject</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'brown' }} align="left">Topics</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'brown' }} align="left">Note</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'brown' }} align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((list) => {
                            return (
                                <React.Fragment key={list.id}>
                                    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                        <TableCell component="th" scope="row">
                                            {list.subject}
                                        </TableCell>
                                        <TableCell align="left">{list.topic}</TableCell>
                                        <TableCell align="left">{list.notice}</TableCell>
                                        <TableCell align="left">
                                            <EditIcon sx={{ cursor: 'pointer', marginRight: '1rem' }} />
                                            <DeleteForeverIcon onClick={() => handleDelete(list.id)} sx={{ color: 'red', cursor: 'pointer' }} />
                                        </TableCell>
                                    </TableRow>

                                </React.Fragment >
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ textAlign: 'center', margin: '2rem' }}>
                <Link to='/addSubject'>
                    <Button sx={{ align: 'center' }} variant="contained"><AddIcon />Add New</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
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

const Home = () => {
    function createData(name, calories) {
        return {
            name,
            calories,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700sfgrgtrhtr lerahgrtnghtr trahntrnhtnht trnghtrnhtnhnhth tkotrnhntrht trnhtranhtrnh rt nhktnahtrnht tn hktnrhntrhntrn',
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                },
            ],
        };
    }

    function Row(props) {
        const { row } = props;

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">Notes</TableCell>
                    <TableCell align="right">
                        <EditIcon />
                        <DeleteForeverIcon style={{ color: 'red' }} />
                    </TableCell>
                </TableRow>

            </React.Fragment >
        );
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0),
        createData('Ice cream sandwich', 237, 9.0),
        createData('Eclair', 262, 16.0),
        createData('Cupcake', 305, 3.7),
        createData('Gingerbread', 356, 16.0),
    ];
    return (
        <div className="table">
            <TableContainer style={{ backgroundColor: '#a52a2a17' }} component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject</TableCell>
                            <TableCell align="right">Topics</TableCell>
                            <TableCell align="right">Note</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ textAlign: 'center', margin: '2rem' }}>
                <Link to='/addSubject'>
                    <Button style={{ align: 'center' }} variant="contained"><AddIcon />Add New</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
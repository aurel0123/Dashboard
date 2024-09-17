import React from 'react'
import data from '../Users/data';
import Common from '../common/Common'
import './Table.css'; 
import Tables from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(id, ProjectName, StartDate, DueDate, Status, Assign) {
    return {id, ProjectName, StartDate, DueDate, Status, Assign  };
  }

  const rows = [
    createData(1 ,'Adminto Admin v1', '01/01/2017', '26/04/2017', 'Released', 'Coderthemes'),
    createData(2 ,'Adminto Admin v1.1', '01/01/2017', '26/04/2017', 'Released', 'Adminto admin'),
    createData(3 ,'Adminto Admin v1.1', '01/01/2017', '26/04/2017', 'Pending', 'Coderthemes'),
    createData(4 ,'Adminto Frontend v1.1', '01/01/2017', '26/04/2017', 'Assign	', 'Adminto admin'),
    createData(5 ,'Adminto Admin v1.3', '01/01/2017', '26/04/2017', 'Assign', 'Coderthemes'),
    createData(6 ,'Adminto Admin v1.3', '01/01/2017', '26/04/2017', 'Assign', 'Coderthemes'),
    createData(7 ,'Adminto Admin v1.3', '01/01/2017', '26/04/2017', 'Assign', 'Coderthemes'),
    
  ];

function Tabledata() {
  return (
    <section className='Table'>
        <div className="user Cardbox">
            <Common title={"Inbox"}/>
            <div className="userBox">
                {
                   data.map((value)=> (
                    <div className='Cardbox flexSB' key={value.id}> 
                        <div className='img1'>
                            <img className='imageCircle1' src={value.cover} alt='' />
                        </div>
                        <div className='title'>
                            <h3>{value.title}</h3>
                            <p>{value.email}</p>
                        </div>
                        <div className='time'>
                            <span>{value.time}</span>
                        </div>
                  </div>
                   ))
                }
            </div>
        </div>
        <div className="table Cardbox">
            <Common title='Latest Projects' />
            <div className="tablebox">
            <TableContainer component={Paper} sx={{ boxShadow: "none", borderRadius: "none" }}>
                <Tables className='tableContainer' 
                
                sx=
                {{ minWidth: 650,
                    backgroundColor : "#313844", 
                    border: "none",
                    "& td ,th": {
                    color: "rgb(166, 171, 176)",
                    borderBottom: "1px solid rgb(86, 86, 86)",
                  },
                 }} 
                >
                    <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell >ProjectName</TableCell>
                        <TableCell >StartDate</TableCell>
                        <TableCell >DueDate</TableCell>
                        <TableCell >Status</TableCell>
                        <TableCell >Assign</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell >{row.ProjectName}</TableCell>
                        <TableCell >{row.StartDate}</TableCell>
                        <TableCell >{row.DueDate}</TableCell>
                        <TableCell >{row.Status}</TableCell>
                        <TableCell >{row.Assign}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Tables>
            </TableContainer>
            </div>
        </div>
    </section>
  )
}

export default Tabledata
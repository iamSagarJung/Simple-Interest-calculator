import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./index.css";


const App=()=>{
  const[p,setP]=useState(0);
  const[t,setT]=useState(0);
  const[r,setR]=useState(0);
  const[si,setSI]=useState(0);

  const calculateInterest=()=>{
    setSI(p*t*r/100)
  }
  return (
    <div className="app-bar">
 
      <AppBar position="static">
        <Toolbar>

          <Typography className='Sagar' variant="h6" component="div" >
            Simple Interest
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
      <br></br>
      <div className='sagar'>
      <TextField onChange={(event)=>setP(event.target.value)} id="filled-basic" label="Enter Principal" variant="filled" /><br></br>
      <TextField onChange={(event)=>setT(event.target.value)} id="filled-basic" label="Enter Time" variant="filled" /><br></br>
      <TextField onChange={(event)=>setR(event.target.value)} id="filled-basic" label="Enter Rate" variant="filled" />
      <br></br>
      <br></br>
      <Button onClick={()=>calculateInterest()} variant="contained">Calculate</Button>
      <Typography onChange={(event)=>setSI(event.target.value)} variant="h6" gutterBottom component="div">
        Simple Interest is:{si}
        </Typography>
        </div>
    </div>
  )
  }

export default App;

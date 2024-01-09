import React,  { useState }  from 'react'
import {Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const Log = () =>{
    const paperStyle= {Padding:20, height:'80vh', width: 300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'skyblue'}
    const btstyle={margin:'8px 0'}
    const [username,setUsername] = useState('');
      const [password, setPassword] = useState('');

      const handleUsernameChange=(event)=>{
        setUsername(event);
      };
      const handlePasswordChange=(event)=>{
        setPassword(event);
      };
        const Signinfunction= () =>{
        alert("successfully sign up")}

  return(
    <Grid>
        <Paper elevation={10} style={paperStyle}> 
        <Grid align= 'center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <h2>Sign in</h2> 
        </Grid> 
        <div> <TextField  label='Username' placeholder='Enter Username'  value={username} onChange={handleUsernameChange} fullWidth required /> </div> 
        <br></br>
       <div> <TextField  label='password' placeholder='Enter password' type='password' value={password} onChange={handlePasswordChange} fullWidth required /> </div>
       <br></br>
       <FormControlLabel control={<Checkbox name="checked" color="primary" />} label="Remember me" />
       <Button type='submit' color='primary' variant='contained' style={btstyle} onClick={Signinfunction} fullWidth><Link to="/">Home</Link>Sign in</Button>
       <Typography>
        <Link href="#">Forgot password</Link>
       </Typography>
       <Typography> Do you have an account ?
        <Link href="#">Sign up</Link>
       </Typography>
        </Paper>
    </Grid>
)
  }

export default Log

import React , { useState } from 'react'
import {Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useNavigate } from 'react-router-dom'

const Login = () =>{


    const paperStyle= {Padding:20, height:'80vh', width: 300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'skyblue'}
    const btstyle={margin:'8px 0'}

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate()
  

    const handleUsernameChange=(event)=>{
      setUsername(event.target.value);
    };
    const handlePasswordChange=(event)=>{
      setPassword(event.target.value);
    };

    const Signinfunction= () =>{
      // alert("Welcome" + " " + username)
      navigateTo(`/Dashboard/${username}`)
     
    }  
    return(
    <Grid>
        <Paper elevation={10} style={paperStyle}> 
        <Grid align= 'center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <h2>Sign in</h2> 
        </Grid> 
       <div> <TextField  label='Username' placeholder='Enter Username'  value ={username} onChange={handleUsernameChange}  required /> </div> 
        <br></br>
       <div> <TextField  label='password' placeholder='Enter password' type='password' value ={password} onChange={handlePasswordChange}  required /> </div>
       <br></br>
       <FormControlLabel control={<Checkbox name="checked" color="primary" />} label="Remember me" />
       <Button type='submit' color='primary' variant='contained' style={btstyle} onClick={Signinfunction} required>Sign in </Button>
       {/* <nav><Link to="/Dashboard"> </Link></nav> */}
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
export default Login

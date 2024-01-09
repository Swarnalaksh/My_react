import React from 'react'
import './Home.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material'

const Home = () => { 
 
  return (
    <div className="home-container">

<div><Card><CardMedia
 component="img" alt="Profile" height="140"
image="C:\Users\SightSpectrum\Desktop\reactjs\form\image\cartoon.jpg"
 title="Profile"/>
 <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Swarnalskshmi R
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Software Developer
        </Typography>
      </CardContent>

  </Card> </div>

  <br></br>

      <header>
        <h1>Welcome to My ReactJs Website using MUI</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box. Material UI components work in isolation. They are self-contained, and will only inject the styles they need to display.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 My React Website. All rights reserved.</p>
      </footer>


  
</div>
  );
  
};

export default Home;

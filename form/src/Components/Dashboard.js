import React ,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import './Home.css'
  

const Dashbord=(props)=>{
    const[user,setUser] = useState()
 
// setUser(data)

const data = useParams()
// data = {dataas:ssss}
// console.log(user.data,"oko")

console.log(data)
console.log(user)

useEffect(()=>{
    setUser(data.dataas)
},[])

return (
    <div><h1>  welcome  {user}</h1>  
   
<Home /> 
</div>   
);
    }
    
        export default Dashbord


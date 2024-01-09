import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button, Checkbox } from 'semantic-ui-react' 
import {API_URL}  from '../constant/URL'
import { useNavigate } from 'react-router-dom'

function Create() {
 const [firstName, setFirstName]=useState('');
 const [lastName, setLastName]=useState('');
 const [checked, setChecked]=useState(false);
 const navigate=useNavigate();

 const postData=async()=>{
  await axios.post(API_URL,{
    firstName,
    lastName,
    checked
  })
  navigate('/read')
  //  console.log(firstName);
  //  console.log(lastName);
  //  console.log(checked);
 }

 return (
    <Form className='form'>
      <Form.Field>
         <label>First Name</label>
         <input value={firstName} onChange={event=>setFirstName (event.target.value)} placeholder='Enter first name' />
      </Form.Field> <br />
      <Form.Field>
         <label>Last Name</label>
         <input value={lastName} onChange={event=>setLastName (event.target.value)} placeholder='Enter last name' />
      </Form.Field> <br />
      <Form.Field>
         <Checkbox checked={checked} onChange={()=>setChecked(!checked)} label='Agree the Terms and Conditions'  />
      </Form.Field> <br />
      <Button onClick={postData}>Submit</Button>
    </Form>
  )
}

export default Create

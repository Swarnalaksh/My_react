import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react' 
import { API_URL } from '../constant/URL';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [id, setId]=useState('');
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [checked, setChecked]=useState(false);
  
  const navigate=useNavigate();
  const updateuser=async()=>{
    await axios.put(API_URL+id,{
      firstName,
      lastName,
      checked
    });
    navigate('/read')
  }
  

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setChecked(localStorage.getItem('checked') === 'true')
    // setChecked(localStorage.getItem('checked'))
  },[])
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
       <Checkbox checked={checked === 'true'} // Convert the string to a boolean
          onChange={() => setChecked(!checked)}
    label='Agree the Terms and Conditions' />
</Form.Field>
 <br />
      <Button onClick={updateuser}>Update</Button>
    </Form>
  )
}

export default Update

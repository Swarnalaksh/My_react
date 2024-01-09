import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Table, Button, TableBody } from 'semantic-ui-react'
import { API_URL } from '../constant/URL';
import { useNavigate } from 'react-router-dom'


function Read() {
   const [apiData, setAPIData]=useState([]);
   const navigate=useNavigate();

   const updateUser=(id, firstName, lastName, checked)=>{
     localStorage.setItem('id', id)
     localStorage.setItem('firstName', firstName)
     localStorage.setItem('lastName', lastName)
     localStorage.setItem('checked', checked)
    navigate('/update')
   }

   const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      callGetAPI();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  //  const deleteUser=async(id)=>{
  //   await axios.delete(API_URL+id)
  //   callGetAPI()
  //  }

   const callGetAPI=async()=>{
    const resp=await axios.get(API_URL);
    setAPIData(resp.data);
    // console.log(resp);
   }
   useEffect(()=>{
   callGetAPI();
  },[])

  return (
   <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell> First Name </Table.HeaderCell>
        <Table.HeaderCell> Last Name </Table.HeaderCell>
        <Table.HeaderCell> Checked </Table.HeaderCell>
        <Table.HeaderCell> Delete </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <TableBody>
      {
        apiData.map(data=>(
          <Table.Row key={data.id}>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>{data.checked ? 'checked' : 'Not Checked' }</Table.Cell>
            <Table.Cell>
               <Button onClick={()=>deleteUser(data.id)} >Delete</Button>
               </Table.Cell>
               <Table.Cell>
               <Button onClick={()=>updateUser(data)} >Update</Button>
               </Table.Cell>
          </Table.Row>
        ))
      }
    </TableBody>
   </Table>
   
  )
}

export default Read

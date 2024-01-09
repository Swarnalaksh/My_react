import logo from './logo.svg';
import './App.css';
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>CRUD operation</h1>
    <BrowserRouter>
    <Routes>
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/read" element={<Read />} />
      <Route exact path="/update" element={<Update />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({});
//   const [editItem, setEditItem] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://6594e7cd04335332df81a4b4.mockapi.io/userdetails');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCreate = async () => {
//     try {
//       await axios.post('https://6594e7cd04335332df81a4b4.mockapi.io/userdetails', formData);
//       fetchData();
//     } catch (error) {
//       console.error('Error creating data:', error);
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`https://6594e7cd04335332df81a4b4.mockapi.io/userdetails/${id}`, formData);
//       setEditItem(null);
//       fetchData();
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://6594e7cd04335332df81a4b4.mockapi.io/userdetails/${id}`);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Crud operation using axios</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             {editItem === item.id ? (
//               <>
//          <input  type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name"/>
//          <button onClick={() => handleUpdate(item.id)}>Update</button>
//          </>
//             ) : (
//               <>
//          {item.name}
//         <button onClick={() => setEditItem(item.id)}>Edit</button>
//               </>
//             )}
//         <button onClick={() => handleDelete(item.id)}>Delete</button>
//         </li>
//         ))}
//       </ul>
//       <div>
//         <input  type="text"  name="name" value={formData.name} onChange={handleInputChange} placeholder="Name"/>
//         <button onClick={handleCreate}>Create</button>
//       </div>
//     </div>
//   );
// };

// export default MyComponent;




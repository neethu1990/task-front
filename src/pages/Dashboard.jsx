import React from 'react'
import './Dashboard.css';
import{ useEffect, useState} from 'react';
import Task from '../components/Task';
import Pop from '../components/Pop';
import { baseURL } from '../db';
import axios from 'axios';
import { Link } from 'react-router-dom';

  const Dashboard = () =>{

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  
  useEffect(() => {
    axios.get(`${baseURL}/get`)
     .then((res)=> setTasks(res.data))
     .catch((err) => console.log(err));
  }, [updateUI]);

  const saveTask = () => {
    axios.post(`${baseURL}/save`, {task: input})
    .then((res) => {console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setInput("");
    })
    .catch((err) => console.log(err))
  }

  return (
    <div style={{backgroundColor:'teal',height:'100vh'}}>
        <div className='container' >
        <h3 >Task Status Dashboard</h3><br /><br />
        <div className='input_holder'>
          <input value={input} onChange={(e) => setInput(e.target.value)}  type='text' placeholder='Add a Task...' style={{marginLeft:'10px',padding:'10px', border:'none', outline:'none', borderRadius:'5px', minWidth:'250px', color:'royalblue'}}/>
          <button onClick={saveTask} style={{marginLeft:'10px',padding:'10px', border:'none', outline:'none', borderRadius:'10px', minWidth:'150px',backgroundColor:'violet'}}>Add</button><br />
        </div>
<div className='list' style={{display:'flex', justifyContent:'space-between'}}>
  {tasks.map((e1) => (
    <Task 
    key={e1._id}
    text={e1.task}
    id={e1._id}
    setUpdateUI={setUpdateUI}
    setPopupContent={setPopupContent}
    setShowPopup={setShowPopup} />
  ))}

</div>
      </div>
     {showPopup && (
      <Pop
      setShowPopup={setShowPopup}
      popupContent={popupContent}
      setUpdateUI={setUpdateUI} />
     )}
     <br />
     <Link to ='/' style={{marginLeft:'10px',padding:'10px', border:'none', outline:'none', borderRadius:'5px', minWidth:'150px', backgroundColor:'tan', textDecoration:'none',color:'darkgreen'}}>Sign Out</Link>
  </div>
 
    )
}

  export default Dashboard;
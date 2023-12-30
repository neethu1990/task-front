import React from 'react'
import {AiFillEdit} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import './task.css';
import axios from "axios";
import { baseURL } from '../db';

const Task = ({text, id, setUpdateUI, setPopupContent, setShowPopup}) => {

    const deleteTask = () =>{
        axios.delete(`${baseURL}/delete/${id}`)
        .then((res) => {
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);

        });
    }

    const updateTask = () => {
        setPopupContent({text, id});
        setShowPopup(true);
    };
  return (
    <div className='task'>
        {text}
        <div className='icons' style={{marginLeft:'5px'}}>
        <AiFillEdit className='icon'  onClick={updateTask}/>
        <RxCross1 className='icon' onClick={deleteTask}/>
        </div>
    </div>
    

  )
}

export default Task
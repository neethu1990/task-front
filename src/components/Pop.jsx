import React from 'react';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { baseURL } from '../db';
import axios from 'axios';


const Pop = ({setShowPopup, popupContent,setUpdateUI}) => {
    const [input, setInput] = useState(popupContent.text);

    const updateTask =()=> {
        axios.put(`${baseURL}/update/${popupContent.id}`,{task:input })
        .then((res) => {
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);
            setShowPopup(false);
        });
    };
    
  return (
    <div className='backdrop' style={{width:'50%', textAlign:'center',margin:'auto', textDecoration:'underline'}}>
        <div className='popup' style={{backgroundColor:'lightgreen', justifyContent:'center', padding:'10px 20px'}}>
            <RxCross1 className='cross' onClick={() => setShowPopup(false)} style={{backgroundColor:'cyan',fontFamily:'cursive'}} />
            <h5>Update Task</h5><br />

            <div className='popup__input_holder' >
                <input 
                type="text"
                 value={input}
                  placeholder='Update Task...'
                 onChange={(e) => setInput(e.target.value)}
                 style={{marginLeft:'10px',padding:'10px', border:'none', outline:'none', borderRadius:'5px', minWidth:'250px', color:'royalblue'}} />
                <button onClick={updateTask} style={{marginLeft:'10px',padding:'10px', border:'none', outline:'none', borderRadius:'10px', minWidth:'150px',backgroundColor:'pink'}}>Update</button>
            </div>
            </div>
            </div>
  )
}

export default Pop
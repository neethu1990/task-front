import React from 'react'
import { AiFillDatabase } from "react-icons/ai";
//import { Link } from 'react-router-dom';


const Header = () => {

  


  return (
    <div>
        <nav className='header' style={{display:'flex', justifyContent:'space-between', backgroundColor:'blueviolet', alignItems:'center', fontFamily:'cursive',color:'whitesmoke', height:'60px', padding :'0 20px'}}>
            <div className="header__logo" style={{fontWeight:'200'}}>
            
                <h3><AiFillDatabase />Task Manager</h3>
            </div>
            <div className="header__buttons"  >
              
               
              
            
               
                
                
            </div>
        </nav>
    </div>
  )
              }

export default Header
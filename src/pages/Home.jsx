import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { useSelector } from 'react-redux';
//import {Link} from 'react-router-dom';


const Home = () => {

  return (
    <div className='home' style={{width:'100%', height:'100vh', backgroundImage:`url('https://image.freepik.com/free-vector/task-management-concept_107173-16743.jpg')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>

      <div className='home__container'>
      <Card  style={{ width: '25rem', marginLeft:'30rem',paddingTop:'10px',alignItems:'center',borderRadius:'15px'}}>
      
      <Card.Body style={{color:'rebeccapurple', fontFamily:'cursive'}}>
        <Card.Title>A goal without a plan is just a wish... </Card.Title>
         <h5>So let's</h5>
        <Link to='/signup' > <Button style={{borderRadius:'5px', minWidth:'150px', backgroundColor:'rebeccapurple'}}>Get Started</Button></Link>
         </Card.Body>
         </Card>
         </div>
         </div>
         )
         };
         
         export default Home;
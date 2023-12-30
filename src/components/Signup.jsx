import React, { Component } from 'react'
//import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Signup extends Component  {

    constructor(props) {
        super(props);
        this.state={
            username:"",
            email:"",
            password:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const {username, email, password} = this.state;
        console.log(username, email, password);
        fetch("http://localhost:5001/signup",{
            method:"POST",
            crossDomain: true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({
                username,
                email,
                password
            }),
        }).then((res) => res.json())
        .then((data) =>{
            console.log(data,"userRegistration");
            if(data.status == "OK") {
                alert("Account registered successfully");
                window.location.href="./signin";
            }else{
                alert("OOPs!! Something went wrong");
                window.location.href="./signup";
            }

        })
    };

    render() {
      return (

    <div className='d-flex justify-content-center align-items-center  vh-100' style={{backgroundColor:'pink'}} >
        <div className='bg-secondary p-3 rounded w-25'>
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Sign Up</legend>
            <div className='mb-3' >
                <label htmlFor="name"><b>Username:</b></label><br />
                < input type="text"  placeholder='Enter Name' name='username' autoComplete='off' className='form-control rounded-0'  onChange={e => this.setState({username:e.target.value})} /><br /><br />
           
           </div>
           <div className='mb-3'>
                <label htmlFor="email"><b>Email:</b></label><br />
                <input type="email" name="email" placeholder='Enter email' autoComplete='off' className='form-control rounded-0' onChange={e => this.setState({email:e.target.value})}/><br /><br />
            </div>
           <div className='mb-3'>
                <label htmlFor="password"><b>Password:</b></label><br />
                <input type="password" name="password" placeholder='Enter Password' autoComplete='off' className='form-control rounded-0' onChange={e => this.setState({password:e.target.value})}/><br /><br />
            </div>

            <div className='form-group'>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
               
            </div>
            </fieldset>
            </form>
            <h6>Already Have an Account?</h6>
            <Link to="/signin" className='btn btn-warning w-100 rounded'>Signin</Link>
        </div>

    </div>
    
  )}
}


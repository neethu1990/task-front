import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

export default class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email, password} = this.state;
        console.log(email,password);
        fetch("http://localhost:5001/signin", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data,'userRegister');
            if(data.status == "OK") {
                alert("Login successful...");
                window.localStorage.setItem("token", data.data);
                window.location.href="./dashboard";   
            }else{
                alert("Invalid Credentials...");
            
            }
        });
    }
    render(){
  
      return (

    <div className='d-flex justify-content-center align-items-center  vh-100' style={{backgroundColor:'pink'}} >
        <div className='bg-secondary p-3 rounded w-25'>
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Sign In</legend>
            <div className='mb-3' >
                <label htmlFor="email"><b>Email:</b></label><br />
                < input type="email"  placeholder='Enter email' name='email' autoComplete='off' className='form-control rounded-0' onChange={e => this.setState({email:e.target.value})}/><br /><br />
           
           </div>
           <div className='mb-3'>
                <label htmlFor="password"><b>Password:</b></label><br />
                <input type="password" name="password" placeholder='Enter Password' autoComplete='off' className='form-control rounded-0' onChange={e => this.setState({password:e.target.value})}/><br /><br />
            </div>

            <div className='form-group'>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Sign In</button><br /><br />
            </div>
            </fieldset>
            </form>
            <h6>Don't have an Account</h6>
            <Link to='/signup' type='submit' className='btn btn-warning w-100 rounded-0'>Sign Up</Link>
        </div>
    </div>
    )
      }

    }
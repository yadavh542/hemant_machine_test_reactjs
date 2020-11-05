import React, {Component} from 'react';
import './style.css';
import Signup from './Signup'
import Login from './Login'
import Header from './Header'
import {BrowserRouter, Route, Switch} from 'react-router-dom';



const User = () => {
	return(

		
		<div className="main_div">

		

        <Login/>


         
		</div>
		
		)
}

export default User;
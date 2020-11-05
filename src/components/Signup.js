import React, { Component } from "react";
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';


export default class SignUp extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
             first_name: this.firstName,
             last_name: this.lastName,
             email:this.email,
             password: this.password
        };
        
        axios.post('Signup', data).then(
           
            res => {
                console.log(res)
            }
            ).catch(
               err => {
                console.log(err);
               }
            )

    };

    render() {

        return (
            <div className="main_div">
            <div className="login_div">
            <form onSubmit= {this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label> <br/>
                    <input type="text" className="form-control" placeholder="First name" 
                     onChange={e => this.firstName = e.target.value} /> <br/>
                </div>

                <div className="form-group">
                    <label>Last name</label> <br/>
                    <input type="text" className="form-control" placeholder="Last name" 
                       onChange={e => this.lastName = e.target.value}  /> <br/>
                </div>

                <div className="form-group">
                    <label>Email address</label> <br/>
                    <input type="email" className="form-control" placeholder="Enter email" 
                       onChange={e => this.email = e.target.value} /> <br/>
                </div>

                <div className="form-group">
                    <label>Password</label> <br/>
                    <input type="password" className="form-control" placeholder="Enter password" 

                       onChange={e => this.password = e.target.value}  /> <br/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={'/Login'}>Login?</Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}
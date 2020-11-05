import React, { Component } from "react";
import './signup.css';
import {Link} from 'react-router-dom';
import Signup from './Signup'
import forgot from './forgot'
import axios from 'axios';


export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data= {
            email: this.email,
            password: this.password
        };
        
        axios.post('Login', data)
        .then(res => {
           localStorage.setItem('token', res.data.token);
        })

        .catch(err => {
            console.log(err)
        })

    };



    render() {
        return (
            <div className="main_div">
            <div className="login_div">
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>

                <p className="forgot-password text-left">
                    New Member<Link to={'/Signup'}>Signup?</Link></p>

                <p className="forgot-password text-right">
                    Change <Link to={'/forgot'}>password?</Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}
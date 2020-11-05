import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



export default class forgot extends Component{

	handleSubmit = e => {
		e.preventDefault();

		const data = {
			email: this.email
		};

        axios.post('forgot',data).then(
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
            <form onSubmit={this.handleSubmit}>
                <h3>Change Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

              

                <button type="submit" onSubmit="handleSubmit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Already Member <Link to={'/Login'}>Login</Link>
                </p>
            </form>
            </div>
            </div>
        );
    }



}
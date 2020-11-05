import React, {Component} from 'react';
import './style.css';

class Form extends Component{

constructor(props){
	super(props);

	this.state = {
		username: "Enter Your username",
		password: "Enter password"
	}
}

handlename = (event) => {
	this.setState({ username: event.target.value})
}

handlepass = (event) => {
	this.setState({ password: event.target.value})
}

handlesubmit = (event) => {
	alert ('Your username is ${this.state.username}');
	event.preventDefault();
}

	render(){
		return(
			<div>
			<form onSubmit = {this.handlesubmit}>
             <label>UserName</label> <br/>
             <input type="text" value={this.state.username}
                    onChange={this.handlename}  /> <br/>
             <label>Password</label> <br/>
             <input type="varchar" value={this.state.password}
                    onChange={this.handlepass}  /> <br/>

             <input type="submit" value="Login" />
			</form>
			</div>
			)
	}
}

export default Form;
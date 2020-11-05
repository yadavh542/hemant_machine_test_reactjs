import React, {Component} from 'react';
import './style.css';
import axios from "axios";

const api = axios.create({
	baseURL: `http://jsonplaceholder.typicode.com/todos`
})

class NewTodo extends Component{

	state = { todos: []};
     
     async componentDidMount() {
     	let result = await axios.get("http://jsonplaceholder.typicode.com/todos");
     	await new Promise(x => setTimeout(x,500));
     	this.setState({todos:result.data});
     }

    deleteTodo = async (id) => {
		let data = await api.delete(`/${id}`)
		
	}
    
	render() {
		return (
		<div className='container'>
		{ this.state.todos.length >0 ? (

            <div>
            <ul className="list-group">

            {this.state.todos.map((todo)=>

              
  <li key= {todo.id} className="list-group-item d-flex justify-content-between align-items-center">
   {todo.id} {todo.title}
    <span className="">
     <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
      <input type="checkbox" checked={todo.completed}/>
    </span>
  </li>
  


            	)}
            </ul>

            </div>
			) :  (

			<div className="spinner-border text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>


			)}


		</div>
		);
	}
}

export default NewTodo;
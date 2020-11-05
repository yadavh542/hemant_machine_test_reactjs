import React, {Component} from 'react';
import './style.css';
import axios from 'axios'

const api = axios.create({
	baseURL: `http://jsonplaceholder.typicode.com/todos`
})

class AdrianTodo extends Component{

	state = {
		courses: []
	}

	constructor(){
		super();
		this.getCourses();

	}

	getCourses = async() => {
		try{
			let data = await api.get('/', {
				params: {
					_limit:6
				}
			}).then(({ data }) => data);
			
			this.setState({courses: data})
		}catch(err){
			console.log(err)
		}
		
	}

	createCourse = async () => {
		let res = await api.post('/',{title: "Test", id: 4, author: 'test'})
		.catch(err=> console.log(err))
		console.log(res)
		this.getCourses();
	}

	deleteCourse = async (id) => {
		let data = await api.delete(`/${id}`)
		this.getCourses();
	}

	updateCourse = async (id, val) =>{
		let data = await api.patch(`/${id}`, { title: val})
		this.getCourses();

	}

	render(){
		return(
			<div>
			<button onClick={this.createCourse}>Add Task</button>
			<div>
			 <ul className="list-group">
              {this.state.courses.map(course => 
                 <li key= {course.id} className="list-group-item d-flex justify-content-between align-items-center">
              	<h5 key={course.id}
              onClick={() => this.updateCourse(course.id, `${course.title}a`)} >{course.id}    {course.title}
              <button onClick={() => this.deleteCourse(course.id)}>Delete</button></h5> </li>)}
              
             </ul>
              </div>
			</div>


			)
	}

}

export default AdrianTodo;
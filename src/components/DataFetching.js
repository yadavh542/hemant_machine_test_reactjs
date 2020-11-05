import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TodoApp from './TodoApp'

function DataFetching() {
	const [post, setPost] = useState({});
	const [Items, setItems] = useState([]);
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	const itemEvent = (event) => {
		setId(event.target.value);
	};

	const listOfItems = (e) => {
		setIdFromButtonClick(id);
		setItems((oldItems) => {
			return [...oldItems,setIdFromButtonClick(id)];
		})
	};


	const handleClick = (e) => {
		
		setIdFromButtonClick({id:e.target.value});

		
	};

	useEffect(() => {
		axios
		.get(`http://jsonplaceholder.typicode.com/todos/${idFromButtonClick}`)
		.then(res => {
			console.log(res)
			setPost(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	}, [idFromButtonClick])

	return (
		<div>
		<input type="text" placeholder="Enter Id" value={id} onChange={itemEvent}/>
		<button type="button" onClick={handleClick}>+</button> 
		<button type="button" onClick={listOfItems}> Add Task </button>
		
		 <ol>
		 {
		 	Items.map((itemval) =>
		 	{
		 		return  <li>{itemval}</li>;
		 	})
		 }
         
		 </ol>
		 
		{/*<ul>
         {
         	posts.map(post => (
                <li key={post.id}>{post.title}</li>
         		))
         }
		</ul>
*/}
		</div>
		)
}

export default DataFetching;
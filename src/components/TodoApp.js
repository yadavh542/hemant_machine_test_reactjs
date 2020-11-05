import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './style.css';
import { Container, Grid, Header, List } from "semantic-ui-react";

import items from './data';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
       
       items: [
       {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }

       ]
       
           
      }
      this.delete = this.delete.bind(this);
    }



    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} _handleDelete={this.delete.bind(this)}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.items} />
                    <button>{'Add Task' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.props.w +''+this.props.t,
            id: Date.now()
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            title: ''
        }));
    }

   delete(id){
    this.setState(prevState => ({
        items: prevState.items.filter(el => el != id )
    }));
  }
}

class TodoList extends React.Component {

    _handleDelete(id){
        this.props._handleDelete(id);
    }

    render() {
        return (
          <div className="postsapp">
          <div className="posts">
          { this.props.items.map(post =>{
            return(
             <div>
                <h4>{post.title}</h4>
                <p>{post.completed}</p>
              <button onClick={this._handleDelete.bind(this, post)}>Delete</button>
             </div>
            )
          }
            )

          }
          </div>
          </div>



        );
    }
}



export default TodoApp;
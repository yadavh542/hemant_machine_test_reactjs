import React from 'react';
import ReactDOM from 'react-dom';
import data from './data'

class DoApp extends React.Component{
   constructor(){
      super();
      this.state = {
        data: [1,2,3,4,5], title:''
      }
      this.delete = this.delete.bind(this);
   }
   
   delete(id){
      this.setState(prevState => ({
          data: prevState.data.filter(el => el != id )
      }));
   }
   
   render(){
      return(
          <Child delete={this.delete} data={this.state.data}/>
      );
   }
}

class Child extends React.Component{

   delete(id){
       this.props.delete(id);
   }
   
   render(){
      return(
         <div>
         <ul>
           {
              this.props.data.map(el=>
                  <li>{el.id}{el.title}{el.completed}<button onClick={this.delete.bind(this, el)}>Delete</button></li>
              )
           }
           </ul>
         </div>
      )
   }
}


export default DoApp;

const rootElement = document.getElementById("root");
ReactDOM.render(<DoApp />, rootElement);

import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'
import Tasks from './components/Tasks'
import User from './components/User'
import Signup from './components/Signup'
import Login from './components/Login'
import forgot from './components/forgot'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu/>
      <Switch>
      <Route path="/" exact component= {Home}/>
      
      <Route path="/tasks" component= {Tasks}/>
      
      <Route path="/user" component= {User}/>

      <Route path="/Signup" component= {Signup}/>


<Route path="/Login" component= {Login}/>

<Route path="/forgot" component= {forgot}/>




     
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

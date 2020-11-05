import React, { PureComponent, Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Select extends PureComponent {

  state = {};

  componentDidMount(){

    axios.get('user').then(
      res => {
       this.setState({
        user: res.data
       });
      },
      err => {
        console.log(err)
      }
      )
  }


  state = {
    options: [
      {
        name: 'Select…',
        value: null,
      },
      {
        name: 'Cricket',
        value: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps.',
      },
      {
        name: 'Football',
        value: 'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used.',
      },
      {
        name: 'Hockey',
        value: 'Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponents goal using a hockey stick. There are many types of hockey such as bandy, field hockey, ice hockey and rink hockey.',
      },
    ],
    value: '?',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { options, value } = this.state;

    if(this.state.user){
      return(
        <h2> Hi {this.state.user.first_name}{this.state.user.last_name}</h2>

        )
    }

    return (
      <Fragment>
      <h1>Favorite Game: {value}</h1>
        <select id="select" onChange={this.handleChange} value={value}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select><br/>
        
      </Fragment>
    );
  }
}

//ReactDOM.render(<Select />, window.document.body);


export default Select;
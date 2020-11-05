import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Menu = () => {
	return(

		<div>
		
	 
	 <div className="Menustyle">
	 
		<ul>

		<li><Link to="/"> Home </Link></li>
		<li><Link to="Tasks"> Tasks </Link></li>
		<li><Link to="User"> User </Link></li>

		</ul>

         

		</div>
		

	</div>

		)
}

export default Menu;
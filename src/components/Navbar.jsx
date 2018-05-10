import React from 'react'
import '../styles/Navbar.scss';
import logo from "../assets/logo-garbarino.png";

export default ({ handleSearchInput }) => (
	<div>
		<nav className='navbar nav'>
			<img src={logo} alt="Garbarino logo"/>

			<div className="form-inline">
					<input onChange={(event) => handleSearchInput(event)} className="form-control mr-sm-2" type="search" placeholder="Nombre del Producto" aria-label="Search"/>
			</div>
			
		</nav>
	</div>
)
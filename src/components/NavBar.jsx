import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
		<div className="navbar-brand">
			<Link to="/">
				Blogi
			</Link>
		</div>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div className="navbar-nav">
				<div className="nav-item nav-link">
					<Link to="/">Home</Link>
				</div>
				<div className="nav-item nav-link">
					<Link to="/posts">Posts</Link>
				</div>
				<div className="nav-item nav-link">
					<Link to="/about">About</Link>
				</div>
			</div>
		</div>
</nav>
	);
}

export default NavBar;

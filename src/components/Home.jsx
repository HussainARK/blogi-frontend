import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Fragment>
		<h1>Welcome to Blogi!</h1>
		<p>This is a Simple Blogging and Full-Stack Website Created by HussainARK</p>
		<Link to="/about">
			<p>Learn More</p>
		</Link>
	</Fragment> 
	);
}

export default Home;

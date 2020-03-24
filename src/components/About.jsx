import React, { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<h2 className="m-2">About</h2>
				<p>
					This is a Simple Websit created By <a target="_blank" rel="noopener noreferrer" href="https://github.com/HussainARK"><em>HussainARK</em></a>,
					<br />
					using the <b>PERN</b> Stack. Which stands for: <b>P</b>ostgreSQL, <b>E</b>xpress.js, <b>R</b>eact.js and <b>N</b>ode.js
					<br />
					<br />
						<a target="_blank" rel="noopener noreferrer" href="https://postgresql.org">PostgreSQL</a> is the RDBMS, 
					<br />
					Express.js is A <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org">Node.js</a> Framework For Creating the Back-End or the RESTful API, 
					<br />
					<a target="_blank" rel="noopener noreferrer" href="https://reactjs.org">React.js</a> is used for creating the Front-End
					<br />
					and <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org">Node.js</a> is used for Runnning the Back-End RESTful API.
				</p>
		</Fragment>
	);
}

export default About;

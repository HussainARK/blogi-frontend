import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import ForOFor from './components/404';
import ListPosts from './components/ListPosts';
import About from './components/About';

function App() {
	return (
		<Fragment>
			<Router>
				<NavBar />
					<div className="container">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/posts/new" exact component={CreatePost} />
						<Route path="/posts" exact component={ListPosts} />
						<Route path="/about" exact component={About} />
					<Route path="*" component={ForOFor} />
						</Switch>
						</div>
			</Router>
		</Fragment>
	);
}

export default App;

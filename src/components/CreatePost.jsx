import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const apiKey = process.env.API_KEY;

const CreatePost = () => {
	const [ title, setTitle ] = useState("");
	const [ author, setAuthor ] = useState("");
	const [ content, setContent ] = useState("");

		const onSubmit = async e => {
			e.preventDefault();

			try {
				const body = { title, author, content }

				const response = await fetch(`https://blogi-backend.herokuapp.com/posts?key=${apiKey}`, {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(body)
						});

						window.location = '/posts';
			} catch (err) {
				console.error(err.message)
			}
		};

	return (
		<Fragment>
			<h2>Create a New Post</h2>
			<form onSubmit={onSubmit} method="POST">
				<label htmlFor="post-title">Title:</label>
				<input id="post-title" type="text" className="form-control" onChange={e => setTitle(e.target.value)} />
				<label htmlFor="post-author">Author:</label>
				<input id="post-author" type="text" className="form-control" onChange={e => setAuthor(e.target.value)} />
				<label htmlFor="post-content">Content:</label>
				<textarea id="post-content" onChange={e => setContent(e.target.value)} className="form-control" cols="30" rows="10"></textarea>
				<button type="submit" className="btn btn-success m-2">Submit</button>
				<Link to="/posts">
					<button className="btn btn-secondary d-inline">Cancel</button>
				</Link>
			</form>
		</Fragment>
		);
}

export default CreatePost;

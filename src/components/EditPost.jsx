import React, { useState, Fragment } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

const EditPost = ({ post }) => {
	const [ title, setTitle ] = useState(post.title);
	const [ author, setAuthor ] = useState(post.author);
	const [ content, setContent ] = useState(post.content);

	const updatePost = async e => {
		e.preventDefault();

		try {
			const body = { title, author, content };
			// eslint-disable-next-line
			const response = await fetch(`https://blogi-backend.herokuapp.com/posts/${post.bid}?key=${apiKey}`,
			{
				method: "PUT",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(body)
			});

			window.location = "/posts";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
		<button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${post.bid}`}>
			Edit
		</button>

		<div className="modal" id={`id${post.bid}`}>
			<div className="modal-dialog">
				<div className="modal-content">

					<div className="modal-header">
						<h4 className="modal-title">Edit Post</h4>
							<button 
								type="button" 
								className="close" 
								data-dismiss="modal"
								onClick={() => {
									setTitle(post.title);
									setAuthor(post.author);
									setContent(post.content);
									}
								}>&times;</button>
							</div>

					<div className="modal-body p-4">
						<label className="mt-1" htmlFor="new-title">New Title:</label>
						<input type="text" id="new-title" onChange={e => setTitle(e.target.value)} value={title} className="form-control" />
						<label className="mt-1" htmlFor="new-title">New Author:</label>
						<input type="text" id="new-author" onChange={f => setAuthor(f.target.value)} value={author} className="form-control" />
						<label className="mt-1" htmlFor="new-title">New content:</label>
						<input type="text" id="new-content" onChange={g => setContent(g.target.value)} value={content} className="form-control" />
					</div>

					<div className="modal-footer">
						<button
							type="button"
								className="btn btn-success"
								data-dismiss="modal"
							onClick={e => updatePost(e)}
						>Edit</button>
						<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
		</Fragment>
	);
}

export default EditPost;

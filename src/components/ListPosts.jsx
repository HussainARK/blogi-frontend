import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditPost from './EditPost';

const ListPosts = () => {
	const [ posts, setPosts ] = useState([]);

	const getPosts = async () => {
		try {
			const response = await fetch('http://localhost:2000/posts');
			const jsonData = await response.json();

			setPosts(jsonData)
		} catch (err) {
			console.error(err.message);
		}
		};

		useEffect(() => {
			getPosts();
		}, []);

		const deletePost = async id => {
			try {
				const deleteAPost = await fetch(
					`http://localhost:2000/posts/${id}`,
					{
						method: "DELETE"
					}
				);

				setPosts(posts.filter(post => post.bid !== id));
			} catch (err) {
				console.error(err.message);
			}
		};

	return (
		<Fragment>
			<div className="mt-2">
				<h2 className="d-inline">All Posts:</h2>
				<Link to="/posts/new">
					<button className="btn btn-success float-right">+ New Post</button>
				</Link>
			</div>
			<hr />
			{posts.map(post => {
				return (
					<Fragment>
						<h3>{post.title}</h3>
						<p><small>{post.author}</small></p>
						<p>{post.content}</p>
							<button onClick={() => deletePost(post.bid)} className="btn btn-danger m-2">Delete</button>
								<EditPost post={post} />
								<hr />
							</Fragment>
				);
				})}
				</Fragment>
	);
}

export default ListPosts;

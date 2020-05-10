import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditPost from './EditPost';

const apiKey = process.env.REACT_APP_API_KEY;

const ListPosts = () => {
	const [ posts, setPosts ] = useState([]);

	const getPosts = async () => {
		try {
			const response = await fetch(`https://blogi-backend.herokuapp.com/posts?key=${apiKey}`);
			const jsonData = await response.json();

			setPosts(jsonData)
		} catch (err) {
			return;
		}
		};

		useEffect(() => {
			getPosts();
		}, []);

		const deletePost = async id => {
			try {
				// eslint-disable-next-line
				const deleteAPost = await fetch(
					`https://blogi-backend.herokuapp.com/posts/${id}?key=${apiKey}`,
					{
						method: "DELETE"
					}
				);

				setPosts(posts.filter(post => post.bid !== id));
			} catch (err) {
				return;
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
					<Fragment className="bg-light">
						<h3 class="post-title">{post.title}</h3>
						<p><small>Written by "<span class="post-author">{post.author}</span>"</small></p>
						<p class="post-content">{post.content}</p>
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

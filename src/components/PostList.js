import React, { useEffect, useState } from "react";
// import { fetchPosts } from "../actions";
// import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const PostList = () => {
	const [ posts, setPosts ] = useState([]);
	// const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				console.log(response);
				setPosts(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// const renderList = () => {
	// 	return posts.map((post) => {
	// 		return (
	// 			<div className="item" key={post.id}>
	// 				<i className="large middle aligned icon user" />
	// 				<div className="conten">
	// 					<div className="description">
	// 						<h2>{post.title}</h2>
	// 						<p>{post.body}</p>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		);
	// 	});
	// };

	// console.log("Posts: " + posts);

	// return <div className="ui relaxed divided list">{renderList()}</div>;
	return (
		<div className="ui relaxed divided list">
			<ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
		</div>
	);
};

export default PostList;

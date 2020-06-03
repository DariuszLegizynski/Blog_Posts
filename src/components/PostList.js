import React, { useEffect } from "react";
import { fetchPosts } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const PostList = () => {
	const posts = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchPosts());
		},
		[ dispatch ]
	);

	return posts.map((post) => {
		return (
			<div className="item" key={post.id}>
				<i className="large middle aligned icon user" />
				<div className="conten">
					<div className="description">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
				</div>
			</div>
		);
	});
};

export default PostList;

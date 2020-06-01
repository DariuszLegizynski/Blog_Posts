import React, { useEffect, useState } from "react";
import { fetchPosts } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const PostList = () => {
	const [ posts, getPosts ] = useState("");
	const selectorPosts = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		getPosts(fetchPosts());
	}, []);

	console.log("Posts: " + { posts });
	console.log("Selector: " + { selectorPosts });
	console.log("Dispatch: " + dispatch(fetchPosts));
	return <div>Post List</div>;
};

export default PostList;

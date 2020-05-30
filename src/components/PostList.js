import React, { useEffect, useState } from "react";
import { fetchPosts } from "../actions";

const PostList = () => {
	const [ posts, getPosts ] = useState("");

	useEffect(() => {
		getPosts(fetchPosts());
	}, []);

	return <div>Post List {posts.length}</div>;
};

export default PostList;

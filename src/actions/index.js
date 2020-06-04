import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// make a combo action out of the two other actions (this is the way it should be done)
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	// with the await keyword in front it is made sure, that this function will be finished, before starting a new one
	await dispatch(fetchPosts());
	const userIds = _.uniq(_.map(getState().posts, "userId"));
	userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get("/posts");

	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: "FETCH_USER", payload: response.data });
};

import React, { useEffect } from "react";
import { fetchUser } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const UserHeader = ({ userId }) => {
	const user = useSelector((state) => state.users.find((user) => user.id === userId));
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchUser(userId));
		},
		[ dispatch, userId ]
	);

	if (!user) {
		return <div>Nothing here</div>;
	} else {
		return <div className="header">{user.name}</div>;
	}
};

export default UserHeader;

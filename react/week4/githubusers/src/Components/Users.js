import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";

export default function Users() {
	const { userId } = useContext(UserContext);
	const [users, setUsers] = useState([]);
	const [err, setErr] = useState("");

	useEffect(() => {
		if (!userId) return;

		fetch(`https://api.github.com/search/users?q=${userId}`)
			.then((res) => res.json())
			.then((res) => {
				setUsers(res.items);
			})
			.catch((err) => setErr(err.message));
	}, [userId]);

	if (!userId) return "No result";

	if (err) return <p>{err}</p>;

	if (userId && (users.length === 0)) return "No result";

	return (
		<div>
			{users.map((user) => (
				<p key={user.id}>{user.login}</p>
			))}
		</div>
	);
}

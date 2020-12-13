import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Search({ setUserId }) {
	const { userId } = useContext(UserContext);

	return (
		<>
			<input
				type="text"
				placeholder="Search for a user"
				value={userId}
				onChange={(e) => setUserId(e.target.value)}
			/>
			{"  "}
		</>
	);
}
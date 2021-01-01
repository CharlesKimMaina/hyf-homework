import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Users from "./Components/Users";
import Search from "./Components/Search";

export default function App() {
	const [userId, setUserId] = useState(null || "");

	return (
		<div>
			<h1>Github user searcher</h1>
			<UserContext.Provider value={{ userId: userId }}>
				<Search setUserId={setUserId} />
				<Users />
			</UserContext.Provider>
		</div>
	);
}
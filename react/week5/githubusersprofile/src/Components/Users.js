import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

export default function Users() {
  const { userId } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  /*User Context is for figuring is the user has an id. 
  The first useState does optimisation by tracking the user as a whole then later 
  i can destructure user's properties.
  second useState if for tracking errors, invalid user, nameless users, blank search (user.length ==0;)etc 
  and setError with error message "The user you are searching is not found". */

  useEffect(() => {
    if (userId) {
    fetch(`https://api.github.com/search/users?q=${userId}`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.items);
      })
      .catch((error) => setError(error.message));
  }, [userId]);

  if (!userId) return "Type a name in the search input";
  if (error) return <p>{error}</p>;
  if (userId && users.length === 0)
    return "The user you are searching is not found";

  return (
    <div>
      {users.map((user) => (
        <Link to={`/${user.login}`} key={user.id}>
          <p>{user.login}</p>{" "}
        </Link>
      ))}{" "}
    </div>
  );
}

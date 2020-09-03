import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Search({ setUserId }) {
  const { userId } = useContext(UserContext); //Context for figuring out if the user has a UserId (Authentication).

  return (
    <>
      <h1>Github user searching App.</h1>
      <input
        type="text"
        placeholder="Search for a github user"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      {"  "}
    </>
  );
}

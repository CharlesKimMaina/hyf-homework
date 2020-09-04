import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";

export function Profile() {
  const [loadedUser, setLoadedUser] = useState(user);
  const { userName } = useParams();

  //useState is for tracking user's properties and their changes.
  //useParams returns an object of key/value pairs of URL parameters, in ourcase is "userName"
  //param is loaded inside profile component, hence its imported in this component.
  //useEffect is for fetching.

  useEffect(() => {
    if (user && user.id) return; //if there is user and has user.id, then fetch his/her details from github API.
if (userName) {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((u) => setLoadedUser(u))
      .catch((e) => console.error("Error fetching user", e));
  }, [user, userName]);

  if (!loadedUser) return "Loading..."; //if the user is not found, return Loading

  const {
    name,
    html_url,
    login,
    avatar_url,
    company,
    followers,
    following,
    public_repos,
  } = loadedUser; //these are user's object properties as per githubs data dashboard.
  return (
    <div className="profile">
      <div>
        <img src={avatar_url} alt="avatar picture" />
        <p> {name} </p>
        <p className="login">{login}</p>
        <p className="follower">
          {followers} followers {"."} {following} following {"."}
        </p>
      </div>
      <div>
        <a href={html_url}>
          <h3 className="leftDiv">To Profile</h3>
        </a>
        <p className="leftDiv">Company: {company}</p>
        <p className="leftDiv">Repositories {public_repos} </p>
      </div>
    </div>
  );
}

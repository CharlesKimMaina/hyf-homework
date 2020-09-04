import React, { useEffect, useState } from "react";

export default function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchresult, setSearchResult] = useState([]);
  //users is the array of github profiles that we get from API. setUsers is the function that updates the users.
  //searchTerm is the github users name(s) which the searcher will type in the input box.
  //setsearchTerm is the function that updates the searchTerm.
  //setsearchresults returns the updated searchresult.

    useEffect(() => {
    if (searchTerm !== "") {
      fetch(`https://api.github.com/search/users?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => setSearchResult(data.items));
    }
  }, [searchTerm]);
  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }
  //setsearchTerm is the function that updates the searchTerm in this handleInputChange function.

  useEffect(() => {
    const result = users.filter((username) =>
      username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search github user"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <p>
        {searchresult.map((item, i) => (
          <li key={i}>
            <a href="">{item}</a>
          </li>
        ))}
      </p>
    </div>
  );
}

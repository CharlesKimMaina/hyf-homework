//working with github fetches.

//github url
const url = "https://api.github.com/search/repositories?q=user:";

const body = document.querySelector("body");

//fetching using function github user name as parameter

const fetchAll = (userName) =>
  fetch(url + userName)
    .then((res) => res.json())

    .then((result) => result.items);

//fetch result for my 3 classmates.
const allPromises = [
  fetchAll("CharlesKimMaina"),
  fetchAll("gebremedhin85"),
  fetchAll("deepthidukka"),
  fetchAll("tariqjavid"),
];

//render to browser
const renderToBrowser = (repoes) => {
  const ulUserName = document.createElement("ul");

  body.appendChild(ulUserName);

  const liUserName = document.createElement("li");

  liUserName.innerHTML = `${repoes[0].owner.login}'s repositories`;

  ulUserName.appendChild(liUserName);

  repoes.forEach((repo) => {
    console.log(repo);

    const ulRepo = document.createElement("ul");

    ulRepo.innerHTML = `
      <li> ${repo.name} : ${repo.url}`;

    liUserName.appendChild(ulRepo);
  });
};

Promise.all(allPromises).then((results) => {
  results.forEach((result) => renderToBrowser(result));
});

const user1 = fetch(
  "https://api.github.com/search/repositories?q=user:benna100"
);
const user2 = fetch(
  "https://api.github.com/search/repositories?q=user:DeepthiDukka"
);
const user3 = fetch(
  "https://api.github.com/search/repositories?q=user:CharlesKimMaina"
);

Promise.all([user1, user2, user3])
  .then((files) => {
    files.forEach((file) => {
      processFiles(file.json());
    });
  })
  .catch((err) => {});

let processFiles = (prom) => {
  prom.then((data) => {
    const dataArr = data.items;
    const repos = dataArr.forEach((repo) => {
      console.log(repo);

      let li = document.createElement("li");
      li.innerHTML = `${repo.name} ${repo.archive_url}
${repo.full_name}`;
      document.getElementById("users").appendChild(li);
    });
  });
};

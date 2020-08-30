function getUsers() {
  let urls = [
    "https://api.github.com/search/repositories?q=user:benna100",
    "https://api.github.com/search/repositories?q=user:DeepthiDukka",
    "https://api.github.com/search/repositories?q=user:gebremedhin85",
  ];

  let requests = urls.map((url) => fetch(url));
  Promise.all(requests).then(
    (responce) => responce.forEach((responce) => console.log(responce.url))
    //Extract the repositories
    //render the repositories
  );
}

getUsers();

const user1 = fetch(
  "https://api.github.com/search/repositories?q=user:benna100"
);
const user2 = fetch(
  "https://api.github.com/search/repositories?q=user:DeepthiDukka"
);
const user3 = fetch(
  "https://api.github.com/search/repositories?q=user:gebremedhin85"
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
    console.table(data);
  });
};

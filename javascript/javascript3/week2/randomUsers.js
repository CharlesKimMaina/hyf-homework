const getRandomUsers = (n) => {
  const fetchRandomUsers = fetch(
    `https://randomuser.me/api/?results=${n}key=HJZZ-6165-6UJB-E9JM`
  );
  fetchRandomUsers.then((data) => {
    console.log(data);
    console.log(json.stringify(randomUsers.results.length));
  });
};

getRandomUsers(10);

const gotRandomUsers = () => {
  const fetchRandomUsers = fetch(
    `https://randomuser.me/api/?results=${n}key=HJZZ-6165-6UJB-E9JM`
  );
  fetchRandomUsers.then((data) => {
    console.log(data.json());
    console.log(json.stringify(randomUsers.results.length));
    randomUsers.results.forEach((user) => {
      const { gender, email } = user; //destructure
      console.log(`${gender}-${email}`);
    });
  });
};

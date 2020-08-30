function setTimeoutPromise(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("function running");
      resolve({ name: "charles", id: 1234 });
    }, resolveAfter);
  });
}

setTimeoutPromise(2000)
  .then((userDetails) => {
    console.log(userDetails);
  })
  .catch((error) => {
    console.log(error);
  });

async function getUser() {
  const users = await setTimeoutPromise();
  console.log(users);
}

getUser();

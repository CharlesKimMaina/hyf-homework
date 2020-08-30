const namesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["charles", "rita", "jane", "shaun"]);
  }, 1000);

  setTimeout(() => {
    reject("no data, there was an error");
  }, 2000);
});

const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Maina", "kim", "luigi", "michael"]);
  }, 3000);

  setTimeout(() => {
    reject("no data, there was an error");
  }, 5000);
});

Promise.all([namesPromise, surnamesPromise]).then((data) => {
  console.log(data);
});

Promise.all([namesPromise, surnamesPromise])
  .then((data) => {
    const [names, surnames] = data; //destructure names
    for (var i = 0; i < names.length; i++) {
      //names.length and surname.length is the same since the have the same length.
      const name = names[i];
      const surname = surnames[i];
      console.log(`${name} ${surname}`);
    }
  })
  .catch((error) => {
    console.log(error);
  });

/*Always the setTimeOut for reject should be bigger than that
of resolve,.otherwise, error will be computed first than resolve
and outputted. I therefore set reject settimeout as 5 seconds and 
resolve settimeout as 3 seconds*/

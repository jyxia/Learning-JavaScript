const timeout = (resolved = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolved) {
        resolve('resolved in 1s');
      } else {
        reject('rejected in 1s');
      }
    }, 1000);
  });
}

const t1 = timeout();
const t2 = timeout(false);

Promise.all([t1, t2])
  .then((res) => {
    console.log('then: ', res);
  })
  .catch((error) => {
    console.log('error: ', error);
  });

// error:  rejected in 1s
// as long as there is an error, Promise catches the error.

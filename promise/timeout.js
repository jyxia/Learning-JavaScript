const timeout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

// chain then
timeout()
  .then(num => {
    console.log(num);
    return num * 2;
  })
  .then(num => {
    console.log(num);
    return num * 2;
  });

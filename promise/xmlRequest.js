const get = (url) => {
  return new Promise((reject, resolve) => {
    const req = new XMLHttpRequest();

    xhttp.open('GET', url);
    xhttp.onload = () => {
      if (req.status === 200) {
        resolve('Promise resolved');
      } else {
        reject('Promise rejected');
      }
    };
    req.onerror = () => {
      reject(new Error('Promise rejected, Error'));
    };

    req.send();
  });
}

// Use it!
get('story.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
});

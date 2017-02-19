const willIGetNewPhone = (isMomHappy) => {
  return new Promise((resolve, reject) => {
    if (isMomHappy) {
      const phone = {
        brand: 'Apple',
        phone: 'iPhone 7'
      };

      resolve(phone);
    } else {
      const reason = new Error('mom is unhappy');

      reject(reason);
    }
  });
};

const askMom = () => {
  let isMomHappy = false;

  willIGetNewPhone(isMomHappy)
    .then(fullfilled => {
      console.log(fullfilled);
    }).catch(error => {
      console.log('error: ', error.message);
    });
};

askMom();

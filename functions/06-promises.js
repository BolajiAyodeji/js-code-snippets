let d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true){
      resolve('hello world')
    } else{
      reject('noooooo')
    }
  }, 1000);
});

d.then((data) => console.log('success: ', data));

d.catch((error) => console.error('error ', error));

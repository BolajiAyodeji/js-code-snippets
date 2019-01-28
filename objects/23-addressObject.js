const address = {
  street: 'Heaven',
  city: 'lokoja',
  zipCode: 1100
};

function showAddress(address) {
  for (let key in address)
  console.log(key, address[key]);
}
showAddress(address);

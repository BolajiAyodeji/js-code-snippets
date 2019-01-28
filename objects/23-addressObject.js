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

// Factory function method
function createAddress(street, city, zipCode) {
  return {
  street,
  city,
  zipCode
  };
}
const address = createAddress('heaven', 'lokoja', 1100);
console.log(address);

// Constructor function method
function CreateAddress2(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const address2 = new CreateAddress2('earth', 'lokoja', 1001);
console.log(address2);

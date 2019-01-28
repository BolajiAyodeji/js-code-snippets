// Check if two objects have qual properties and equal refrence types

let address1 = new Address('earth', 'lokoja', 1001);
let address2 = new Address('earth', 'lokoja', 1001);
let address3 = address1;

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
return address1.street === address2.street &&
address1.city === address2.city &&
address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

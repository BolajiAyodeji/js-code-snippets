let person = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}
let person1 = {
  firstName:'Bolaji',
  lastName: 'Ayodeji',
}
let person2 = {
  firstName:'Mary',
  lastName: 'Ayodeji',
}
person.fullName.call(person1);  // Will return 'Bolaji Ayodeji'
person.fullName.call(person2); // Will return 'Mary Ayodeji'


// The call method with arguments
let person = {
  fullName: function(city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  }
}
let person1 = {
  firstName:'Bolaji',
  lastName: 'Ayodeji',
}
person.fullName.call(person1, 'Kogi', 'Nigeria');


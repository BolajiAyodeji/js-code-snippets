let person = {
  fullName: function(city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  }
}
let person1 = {
  firstName:'Bolaji',
  lastName: 'Ayodeji',
}
person.fullName.apply(person1, ['Kogi', 'Nigeria']);

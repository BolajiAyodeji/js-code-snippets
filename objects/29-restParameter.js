// rest parameter vs arguments keyword

function Store() {
  let aisle = {
    fruit: [],
    vegetable: []
  }
  return {
    //Store().add('category', 'item1', 'item2');
    add: function(category, ...items) {
      //let items = [].splice.call(arguments, 1);
      console.log(items);
      items.forEach(function(value, index, array) {
        aisle[category].push(value);
      });
    },
    aisle: aisle
  }
}

let myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);

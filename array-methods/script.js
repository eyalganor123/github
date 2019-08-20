var myArray = ['eyal', 'gal'];
var myComplexArray = [{name: 'eyal', age: 34}, {name: 'gal', age: 36}];

// Find - return a bool
function myFindCallBack(item, index) {
  return item.name === 'eyal';
}

// Returns an item could be anything
var foundElement = myComplexArray.find(myFindCallBack);

// Map - return the item itself
function myMapCallBack(item, index) {
  return item.name;
}

// returns an Array
var mapped = myComplexArray.map(myMapCallBack);

// Filter - return a bool
function myFilterCallBack(item, index) {
  return index === 0 && item === 'gal';
}

// returns an Array
var filtered = myArray.filter(myFilterCallBack);

// For each - iterates over an array
function myCallBack (item, index) {
  // console.log(index); // 0, 1
  // console.log (item); // 'eyal', 'gal'
}

myArray.forEach (myCallBack);
myAmazingForEach(myArray, myCallBack)

// returns nothing
function myAmazingForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index);
  }
}

/**
 * Uncomment this to see in action
 */
console.log(filtered);
console.log(mapped);
console.log(foundElement);

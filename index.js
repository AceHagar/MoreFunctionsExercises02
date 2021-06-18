//Create an anonymous fucntion and set it equal to a variable.

let anonFunction = function(myNumber){
  if (typeof myNumber === 'number'){
    return myNumber * 3;
  } else if (typeof myNumber === 'string'){
      return 'ARRR!';
  } else {
      return myNumber;
  }
  }
console.log(anonFunction(['hello']));
/* Your function should:
a) If passed a number, return the tri)pled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */



/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let arr = ['cat', 9, 'lives'];
let newArr = arr.map(myFunction)

function myFunction(num){
  if (typeof num === 'number'){
    return num * 3; 
  }
  if (typeof num === 'string'){
    return 'ARRR!'
  }
}
console.log(newArr)
'use strict';

function highAndLow(numbers) {
  //   console.log(numbers)

  // turn string to array so we can sort
  const numArr = numbers.split(' ').map(Number);

  // sort in ascending order
  numArr.sort((a, b) => a - b);

  // create an empty array so we can push the last and first element into it
  const result = [];

  // push last element into new array
  result.push(numArr[numArr.length - 1]);

  // push first element into array
  result.push(numArr[0]);

  // .join outputs a string with the specified seperator (space)
  return result.join(' ');

  console.log(numArr);

  // sort numbers

  // This code needs to be refactored
}

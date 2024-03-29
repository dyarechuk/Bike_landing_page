'use strict';

function moveZeros(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(moveZeros([true, 0, 'abc', '1', 12]));

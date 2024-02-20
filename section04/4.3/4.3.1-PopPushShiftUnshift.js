const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let firstPop = nums.pop(); //[6, 5, 2, 3, 4, 1] firstPop = 0
let secondPop = nums.pop(); //[6, 5, 2, 3, 4, 1] secondPop = 1

// remove each of the first two items with shift(), saving each item to a variable
let firstShift = nums.shift(); //[5, 2, 3, 4] firstShift = 6
let secondShift = nums.shift(); //[2, 3, 4] secondShift = 5

// use push and unshift to add the variables back to the array in numerical order, 0-6
// firstPop = 0, secondPop = 1, firstShift = 6, secondShift = 5
// nums = [2, 3, 4]
console.log(nums);
// push the shifts, unshift the pops
nums.push(secondShift, firstShift);
nums.unshift(firstPop, secondPop);

// [0, 1, 2, 3, 4, 5, 6]
console.log(nums);

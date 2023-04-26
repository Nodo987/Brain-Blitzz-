let numbers = [1,2,5,6,8,9,9,9]

numbers.sort((a, b) => b - a);

let max = Math.max(...numbers)

console.log(numbers)

console.log(max)
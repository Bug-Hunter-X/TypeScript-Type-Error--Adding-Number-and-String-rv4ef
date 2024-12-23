function add(a: number, b: number): number {
  return a + b;
}

let num1: number = 1;
let num2: number = parseFloat('2');

let result = add(num1, num2); // Correct: Explicit type casting
console.log(result); // Output: 3

function addSafe(a: any, b: any): number {
  const numA = parseFloat(String(a));
  const numB = parseFloat(String(b));

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Handle errors appropriately
  }

  return numA + numB;
}

let result2 = addSafe(1, '2'); // Correct: Input validation
console.log(result2); // Output: 3
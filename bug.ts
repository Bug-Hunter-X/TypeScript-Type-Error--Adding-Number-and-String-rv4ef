function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, '2'); // Type Error, it should be number, but it is string
console.log(result); // This line will not be executed because the type error happens before
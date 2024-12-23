# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript where a function expects a number but receives a string.  The type system prevents the code from running, highlighting the importance of type checking.

## Bug

The `add` function is defined to accept two numbers.  However, the code attempts to call it with a string, resulting in a type error.

## Solution

The solution involves ensuring that the arguments passed to the `add` function are of the correct type. This can be done through explicit type casting or input validation.
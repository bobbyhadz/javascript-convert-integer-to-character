// EXAMPLE 1 - Convert an Integer to its Character Equivalent in JavaScript

function intToChar(int) {
  // 👇️ for Uppercase letters, replace `a` with `A`
  const code = 'a'.charCodeAt(0);
  console.log(code); // 👉️ 97

  return String.fromCharCode(code + int);
}

console.log(intToChar(0)); // 👉️ "a"
console.log(intToChar(4)); // 👉️ "e"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Integer to its Uppercase Character Equivalent

// function intToChar(int) {
//   const code = 'A'.charCodeAt(0);
//   console.log(code); // 👉️ 65

//   return String.fromCharCode(code + int);
// }

// console.log(intToChar(0)); // 👉️ "A"
// console.log(intToChar(4)); // 👉️ "E"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert the character back to its integer equivalent

// function charToInt(char) {
//   const code = 'a'.charCodeAt(0);

//   return char.charCodeAt(0) - code;
// }

// console.log(charToInt('a')); // 👉️ 0
// console.log(charToInt('e')); // 👉️ 4

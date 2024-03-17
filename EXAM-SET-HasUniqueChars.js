const hasUniqueChars = (str) => {
  const uniqueChars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (uniqueChars.has(str[i])) return false;
    uniqueChars.add(str[i]);
  }

  return true;
}





// ---------------
// Unique Chars
// ---------------
console.log("Unique Chars:");
console.log("Input: 'abc'");
console.log("Output: ", hasUniqueChars('abc'));
console.log("---------------");

// ---------------
// Duplicate Chars
// ---------------
console.log("Duplicate Chars:");
console.log("Input: 'aabb'");
console.log("Output: ", hasUniqueChars('aabb'));
console.log("---------------");

// ---------------
// Single Char
// ---------------
console.log("Single Char:");
console.log("Input: 'a'");
console.log("Output: ", hasUniqueChars('a'));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", hasUniqueChars(''));
console.log("---------------");

// ---------------
// Case Sensitivity
// ---------------
console.log("Case Sensitivity:");
console.log("Input: 'Aa'");
console.log("Output: ", hasUniqueChars('Aa'));
console.log("---------------");



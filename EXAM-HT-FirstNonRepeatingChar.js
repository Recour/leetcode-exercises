const firstNonRepeatingChar = (str) => {
  const charCounts = [];

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    charCounts[c] = (charCounts[c] || 0) + 1;    
  }

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (charCounts[c] === 1) return c;
  }

  return null;
}





// ---------------
// All Unique
// ---------------
console.log("All Unique:");
console.log("Input: 'abcde'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcde')));
console.log("---------------");

// ---------------
// Some Duplicates
// ---------------
console.log("Some Duplicates:");
console.log("Input: 'aabbccdef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log("---------------");

// ---------------
// All Duplicates
// ---------------
console.log("All Duplicates:");
console.log("Input: 'aabbcc'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbcc')));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('')));
console.log("---------------");

// ---------------
// Single Character
// ---------------
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('a')));
console.log("---------------");

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log("Multiple Non-Repeating Chars:");
console.log("Input: 'abcdaef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcdaef')));
console.log("---------------");



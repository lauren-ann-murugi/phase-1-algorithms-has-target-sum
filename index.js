function hasTargetSum(array, target) {
  // Create a set to keep track of numbers we've seen
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (let num of array) {
    // Calculate the complement that would sum with num to make the target
    const complement = target - num;

    // If the complement is already in the set, return true
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Otherwise, add the current number to the set
    seenNumbers.add(num);
  }

  // If no pair adds to the target, return false
  return false;
}

/* 
  Big O Time Complexity:
  Time: O(n) — I loop through the array only once.
  Space: O(n) — I store up to n elements in the set.
*/

/* 
  Pseudocode:
  1. Initialize an empty set called seenNumbers.
  2. For each number in the array:
    a. Calculate complement = target - number.
    b. If seenNumbers contains complement, return true.
    c. Add number to seenNumbers.
  3. Return false if no match found.
*/

/*
  Explanation:
  I want to know if any two numbers in the array add up to the target.
  To do this efficiently, I store numbers in a Set as I go through the array.
  For each number, I check if the number I would need to pair with it (the complement)
  has already been seen. If it has, i return true. If not, i add the number to the set.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  // Extra tests for thoroughness
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;

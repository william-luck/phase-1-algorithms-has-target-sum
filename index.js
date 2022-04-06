function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // n stesps (depending on the length of the array)
    for (let j = i + 1; j < array.length; j++) {
      // n steps (nested loop)  
      if ((array[i] + array[j]) === target) {
        return true
      }
    }
  } // 1 step: so n^2*1, or n^2
  return false
}

const numbers = [1, 2, 3, 4, 5]

function hasTargetSum2(array, target) {
  let start = 0
  let end = array.length
  let halfTarget = target/2

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] < halfTarget) {
      // check the elements after the midpoint (inclusive)
      start = mid
      //[2, 3, 6] with a target of 5
      // From here, still useful to check the midpoint and compare with halfTarget
      // 3 is more, so check the elements before the midpoint [2,3]
      // How do we know to stop doing the midpoints? 
    } else {
      // check the elements before the midpoint (inclusive)
      end = mid
      //[1, 2, 3] with a target of 5
      // From here, still useful to check the midpoint and compare with with halfTarget
      // 2 is less, so then we would end up with [2,3]
      // How to know to stop checking the midpoints?
          
      // Think we're ultimately on the right track, just not sure how to implement this yet. 
    }
  }

  function hasTargetSum3 (array, target) {
    // From what I remember yesterday with Ali, iterate through the array, and calculate a complement needed to meet the target. 
        // Iterate through the array again, looking for the complement. 
        // This is also 0(n2) time complexity, because iterate twice basically for each element.
    // Another method I guess would be to calculate a complement for each of the elements, store those complemements in another array. Compare those two arrays? 

    // Iterate through the array again, comparing each element with the new array. But that's also quadratic right? 

    // Shit 

    // Using and object

    /*
    As we iterate through, create a new object to keep track of all the numbers we've already seen as keys on the object, then can check if the object has a key we're looking for. 
      On the next iteration, we see if one of the numbers we've aded as a key to our object is a complement to the number we're iterating over. 

    create an object to keep track of all the numbers we've seen (store each iterated number in this object as a key)
    iterate over the array of numbers
      for the current number, identify a complementary number that adds to our target
      (for example: if our number is 2, and the target is 5, the complementary number is 3)
      check if any of the keys in our object is the complement to the current number
        if so, return true
      save the current number as the key on our object so we can check it later against other numbers
    if we reach the end of the array, return false

    */

    // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
    console.log(seenNumbers)
  }
  // if we reach the end of the array, return false
  return false;

  const testArray = [1, 2, 3, 4, 5] // target 6
  }





  // Second solution to the problem, trying to avoid quadratic time complexity 
  // uhhhhhh. 

  // Could we order the array somehow? Like put the numbers in ascending order, then we could possibly have a logarithmic time complexity. Is there a built in method for this? 

  // After we have the sorted array, go to the mid point. 
      // Say we have the array [2, 3, 6, 7, 8] with a target of 5
      // If the midpoint is more than the target, no use looking at the second half, because the target was already exceeded.
      // From here, we would only look at the elements preceeding the midpoint, because those elements before are the only possible elements that could add up to the target. 

      // Say we have an array [1, 2, 3, 4, 5] with the same target of 5 
      // Check the midpoint, and see if that's less than the target.
      // On this one, the midpoint is less than the target, but it would be only be of use if the midpoint is less than or equal to the target divided by two 
          // In the above case, the target/2 is 2.5, and our midpoint is greater than that, so it would be no use to check the elements after that, as any element larger than our midpoint will not get us to our target. 
          // So, if the midpoint < (target/2), can check the remaining elements
              // No need to check the previous elements, because only a value larger than the midpoint would get us to our target.
          // If the midpoint > (target / 2), only need to check the preceeding elements. 

}






// const numbers = [52435, 2345, 2, 5049391, 300];
// numbers.sort((a, b) => a - b);
// console.log(numbers);




/* 
  0(n^2): quadratic. Bit shit with larger number of n elements in the array. 
*/

/* 
  Add your pseudocode here

  Some sort of nested iteration
    Start with the first element in the array, then add that element to each of the remaning elements one at a time. 
      Check that to see if it matches the passed in target number. 
    If no match, then start with the second element, doing the same thing.
*/

/*
  Add written explanation of your solution here

  The function iterates through each element of the array using i
    On the first iteration, a second iteration is done to loop through the remaining elements 
    On each second iteration that is done, we test to see if those elements add up to the target.
    For example, if an array of 1,2,3,4,5. It will first test 1+2, then 1+3, then 1+4, then 1+5 
      After this is completed, it tests 2+3, 2+4, and 2+5. 
    Once it hits a match, the function will return true. 
    If it doesn't hit a match, the last line of the function will execute to return false (instead of undefined)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 69, 156, 304, 2], 157));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([534, 231, 69], 4));
}

module.exports = hasTargetSum;

function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i<array.length; i++){
    for(let j= i+1; j<array.length; j++){
      if(array[i]+array[j]===target){
        return true
      }
    }
  }
  return false
}



/* 
  Write the Big O time complexity of your function here
*/
// n(0)

/* 
  Add your pseudocode here
// *///create an array of Numbers,
// iterate through them using index and sum up two numbers
// if sum is equal to target, return true
// if its not, return false

/*
  Add written explanation of your solution here
*/
// list array according to index value
// declare variable i for first index element
// declare variable j for second index element
// iterate through the whole array, adding i and j
// compare is sum of i, j = target


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
}

module.exports = hasTargetSum;

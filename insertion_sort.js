// Write a function called insertion sort
// Your function should accept one argument, an array

// loop through the array with a for loop
// Select the item at index 1 (remember we don't start at 0!)

// store the item at index one in a variable

// now loop backwards (feel free to google this!) through your array
// comparing from right to left.

// Start moving items depending on size. (Refer to the last walkthrough if you need help here)

// insertionSort([3, 8, 7, 1, 2]))
// [1, 2, 3, 7, 8]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    var counter = i - 1;
    
    while (counter >= 0 && arr[counter] > currentValue) {
      arr[counter + 1] = arr[counter];
      counter--;
    }
    arr[counter + 1] = currentValue;
  }
  return arr;
}

const array = [3, 8, 7, 1, 2];
console.log(insertionSort(array));
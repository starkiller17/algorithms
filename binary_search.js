// Assuming we'll have a sorted array

function binarySearch(list, searchVal) {
  // Track the last item in the array whcih is our last element
  let endIndex = list.length - 1;
  // Track the lowest element in the array 0
  let startIndex = 0;
  // As the middle element is unknown, can be set to 0
  let middleIndex = 0;

  // Loop through the elements with a conditional stop
  while (startIndex <= endIndex) {
    // Set the middle element by adding high and low and dividing by two
    middleIndex = Math.floor((endIndex + startIndex) / 2);

    if (list[middleIndex] === searchVal) {
      return middleIndex;
    }

    if (searchVal > list[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

const array = [1,2,3,4,5,6,7,8,9,10];
const searchValue = 8;

console.log(binarySearch(array, searchValue));
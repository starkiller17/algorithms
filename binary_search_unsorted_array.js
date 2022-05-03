// implement binary search in JavaScript (or the language of your choice)
// but what do you do if the array isn't sorted?

function binarySearch(arr, searchKey) {
  // todo
  const sortedArray = arr.sort((a, z) => a - z );
  let endIndex = sortedArray.length - 1;
  let startIndex = 0;
  let middleIndex = 0;

  while (startIndex <= endIndex) {
    middleIndex = Math.floor((endIndex + startIndex) / 2);

    if (sortedArray[middleIndex] === searchKey) {
      return true;
    }

    if (searchKey > sortedArray[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

}

const array = [1, 8, 2, 6, 3, 10];
const searchValue = 3;

console.log(binarySearch(array, searchValue));

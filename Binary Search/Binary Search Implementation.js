// Basic implementation for Binary Search

const findItemUsingBinarySearch = (arr, value) => {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let mid = parseInt(min + (max - min) / 2, 10);
        if (arr[mid] === value) {
            return mid;
        } else if (arr[mid] > value) {
            max = mid -1;
        } else {
            min = mid + 1;
        }
    }
    return -1;
}

console.log(findItemUsingBinarySearch([1, 2, 13, 44, 55], 55));
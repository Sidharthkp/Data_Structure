function binarySearch(arr, target, first, last) {
    if (first > last) return "Not found";
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) return `Value at ${mid}`;
    if (target < arr[mid]) return binarySearch(arr, target, first, mid - 1);
    if (target > arr[mid]) return binarySearch(arr, target, mid - 1, last);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(array, 6, 0, array.length - 1));
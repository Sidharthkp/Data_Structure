let array = [9,1, 2, 3, 4, 5, 6, 7, 8,  10, 11, 12, 13, 14, 15, 16];
let result = [];
let i = 0;
let flag= false

let isPrime = (array, i, j) => {
    flag = false
    if (j === array[i] || array[i] < 2) return true;
    if (array[i] % j == 0) return flag=true
    j++;
    isPrime(array, i, j)
    if(flag) return true

}

let prime = (array) => {
    let j = 2;
    if (i === array.length-1) return;
    if (!isPrime(array, i, j)) result.push(array[i]);
    i++;
    prime(array)
}

prime(array)

console.log(result);
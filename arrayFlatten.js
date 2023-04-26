let array = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10, 11, [12]]]]];

let count = 0;
const flatten = () => { 
    count++; 
    array = array.flat(); 
    if (count < array.length) flatten()
};
flatten()
console.log(array)
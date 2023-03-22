const arrangeMaxHeap = (arr) => {
    let i = Math.floor(arr.length/2-1);
    while(i>0){
        swap(arr, i, arr.length);
        i -= 1;
    }
}
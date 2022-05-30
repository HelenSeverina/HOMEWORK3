function lastElem(arr, num) {
    let newArr = arr[arr.length-1];
    if (num > 0){
        newArr = arr.slice(-num);
    }
    return newArr;
}
console.log(lastElem([3, 4, -5, 10], 2))

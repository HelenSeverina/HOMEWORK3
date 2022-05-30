//1)
function findUnique(arr) {
    let newArr = arr.sort();
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i-1] === newArr[i])
        return false;
    }
    return true;
}
console.log(findUnique([1, 2, 3, 5, 11]));

//2)
function findUnique(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j])
            return false;
        };
    };
    return true;
};
console.log(findUnique([1, 2, 3, 5, 3]));
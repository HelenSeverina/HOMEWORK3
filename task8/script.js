function capitalizeWords(str) {
    let newStr = "";
    let result = str.split(" ");

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        newStr += result[i] + ' ';
    }
    return newStr;
}

console.log(capitalizeWords('i love java script'));
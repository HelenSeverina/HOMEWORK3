let newArray = [];

function randArray(k) {
    for (let k = 0; k < 5; k++) {
        let rand = Math.floor(Math.random() * 501) + 1;
        newArray.push(rand);
    };
    return newArray;
};

console.log( randArray(5) );




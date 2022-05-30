//1)
let array = [2, 3, 4, 5];
let sum = 1;

for (let i = 0; i < array.length; i ++) {
    sum = sum * array[i];
}
console.log(sum);

//2)
let i = 0;
while (i < array.length) {
    sum = sum * array[i];
    i++;
};
console.log(sum);
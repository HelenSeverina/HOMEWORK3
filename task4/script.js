let a = +prompt('Ведіть число');
let b = +prompt('Введіть степінь');

//1) виправляємо самі на ціле
function raiseToDegree(a, b) {
    let result = Math.pow(Math.round(a), Math.round(b));
    return result;
};

//2) виправляє користувач
function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        let result = Math.pow(a, b);;
        return result;
    } else {
        alert('Обидва значення мають бути ЦІЛИМИ числами');
        a = +prompt('Ведіть будь-ласка число');
        b = +prompt('Ведіть будь-ласка степінь');
        let result = Math.pow(a, b);
        return result;
    }
};

console.log(raiseToDegree(a, b));


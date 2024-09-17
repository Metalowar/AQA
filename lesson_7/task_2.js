// Рекурсивна функція. Ітерує число від n до 0
function recursion (num) {
    console.log(num);
    if (num <= 0) {
        return;
    } else {
        recursion(num - 1);
    }
}

recursion(7);
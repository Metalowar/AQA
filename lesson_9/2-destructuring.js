// Створення об'єкту і деструктирузвання кількох властивостей в окремі змінні
const book = {
    title: "Game of Thrones",
    author: "George Martin",
    year: 1996
};

const {title, author} = book;

console.log(title);
console.log(author);
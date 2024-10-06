import { Book } from './book.js';
import { Ebook } from './ebook.js';

// Створюю екземпляри класів Book
const book1 = new Book("Flowers for Algernon", "Daniel Keyes", 1966);
const book2 = new Book(1984, "George Orwell", 1949);
const book3 = new Book("Dune", "Frank Herbert", 1965);

// Створюю екземпляри класів Ebook
const ebook1 = new Ebook("The Witcher", " Andrzej Sapkowski", 1986, "epub");
const ebook2 = new Ebook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "epub");
const ebook3 = new Ebook("To Kill a Mockingbird", "Harper Lee", 1960, "f2b");



// Виводжу результат для екземпляру Book (1)
console.log(book3.printInfo());

// Виводжу результат для екземпляру Ebook (2)
console.log(ebook3.printInfo());

// Перевірка гетерів і сетерів для обох екземплярів (3)
console.log(book1.title);
book2.title = "1984";
console.log(book2.printInfo());

ebook3.type = "txt";
console.log(ebook3.printInfo());

// Повертаю статичним методом найстарішу книгу (4)
console.log(
    Book.theOldestBook([book1, book2, book3, ebook1, ebook2, ebook3]).printInfo()
);

// Статичний метод створює новий Ebook но основі Book (5)
const newEbook = Ebook.classInstance(book1, "pdf");
console.log(newEbook.printInfo());


import { Book } from './book.js';
import { Ebook } from './ebook.js';

// Створюю екземпляри класів Book
const book1 = new Book("Flowers for Algernon", "Daniel Keyes", 1966);
const book2 = new Book("The Witcher", " Andrzej Sapkowski", 1986);
const book3 = new Book("Dune", "Frank Herbert", 1965);

// Створюю екземпляри класів Ebook
const ebook1 = new Ebook("1984", "George Orwell", 1949, "epub");
const ebook2 = new Ebook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "epub");
const ebook3 = new Ebook("To Kill a Mockingbird", "Harper Lee", 1960, "f2b");

// Виводжу результат для кожного екземпляру Book
console.log(book1.title);
console.log(book2.printInfo());
console.log(book3.printInfo());

// Виводжу результат для кожного екземпляру Ebook
console.log(ebook1.printInfo());
ebook2.type = "txt";
console.log(ebook2.printInfo());
console.log(ebook3.printInfo());
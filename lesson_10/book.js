// Створюю і зразу експортую клас Book з методом
export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        return `"${this.title}" wrote by ${this.author} in ${this.year}`;
    }

    get isOld () {
        if (this.year > 1960) {
            return "Its a classic book, but not old"
        }
        return "This book old, but still relevant"
    }
}
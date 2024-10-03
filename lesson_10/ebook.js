// Імпортую клас Book з попереднього файлу і додаю нову властивість
import { Book } from './book.js';

export class Ebook extends Book {
    constructor(title, author, year, type) {
        super(title, author, year);
        this.type = type;
    }

    printInfo() {
        const parentInfo = super.printInfo();
        return `${parentInfo}, Format: ${this.type}`;
    }

    get isOld () {
        if (this.year > 1960) {
            return "Its a classic book, but not old"
        }
        return "This book old, but actual even now"
    }

    set typeToUpper (typeEbook) {
        if (typeof titleBook !== "string") {
            throw new Error("Title should be strings");
        }
        this.title = this.title.toUpperCase();
    }

}
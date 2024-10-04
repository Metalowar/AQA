// Імпортую клас Book з попереднього файлу і додаю нову властивість
import { Book } from './book.js';

export class Ebook extends Book {
    constructor(title, author, year, type) {
        super(title, author, year);
        this._type = type;
    }

    get type() {
        return this._type;
    }

    set type(newFormat) {
        const validFormats = ["epub", "pdf", "fb2", "txt"];
        if (!validFormats.includes(newFormat.toLowerCase())) {
            throw new Error("Invalid format. Allowed formats are: epub, pdf, fb2, txt");
        }
        this._type = newFormat;
    }

    printInfo() {
        const parentInfo = super.printInfo();
        return `${parentInfo}, Format: ${this._type}`;
    }
}
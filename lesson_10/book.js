// Створюю і зразу експортую клас Book з методом
export class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  //Гетер і Сетер для Назви
  get title() {
    return this._title;
  }

  set title(newTitle) {
    if (typeof newTitle !== "string") {
      throw new Error("Title should be a string");
    }
    this._title = newTitle;
  }

  //Гетер і Сетер для Автора
  get author() {
    return this._author;
  }

  set author(newAuthor) {
    if (typeof newAuthor !== "string") {
      throw new Error("Author should be a string");
    }
    this._author = newAuthor;
  }

  //Гетер і Сетер для року
  get year() {
    return this._year;
  }

  set year(newYear) {
    if (typeof newYear !== "number" || newYear < 0) {
      throw new Error("Year should be a valid number");
    }
    this._year = newYear;
  }

  printInfo() {
    return `"${this._title}" wrote by ${this._author} in ${this._year}`;
  }

  static theOldestBook(books) {
    return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
  }
}

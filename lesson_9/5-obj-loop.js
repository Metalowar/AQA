function UsersContructor (name, age, isAdult, email = "unknown", gender = "unknown") {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.isAdult = isAdult;
}

// Створюю об'єкти за допомогою конструктора
const user1 = new UsersContructor("Alise", 23, true, "alice23@mail.com", "famale");
const user2 = new UsersContructor("John", 20, true);
const user3 = new UsersContructor("Helga", 12, false, "hel12@mail.com");


// Роблю масив зі створеними об'єктами
const users = [
    user1, user2, user3
]

// Деструктурую всі значення об'єктів і виводжу кожне в консоль
for (const {name, age, isAdult, email, gender} of users) {
    console.log(`User have: name - ${name}, age - ${age}, isAdult - ${isAdult}, email - ${email}, and gender - ${gender}`);
}
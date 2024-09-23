function UsersContructor (name, age, gender, email, isAdult) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.isAdult = isAdult;
}

const user1 = new UsersContructor("Alise", 23, "famale", "alice23@mail.com", true);

console.log(user1);
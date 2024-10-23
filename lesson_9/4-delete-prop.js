// Додавання і видалення нової властивості в існуючий об'єкт
const person = {
  firstname: "Vlad",
  lastName: "Cepesh",
  age: 594,
};

person.email = "dracula1430@mail.ro";
delete person.age;

console.log(person.age);
console.log(person.email);
console.log(person);

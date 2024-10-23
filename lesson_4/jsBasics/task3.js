const age1 = 17;
const age2 = 18;
const age3 = 19;

const adult = 18;

// Створив тернарний оператор, щоб вивести відповідний текст
console.log(age1 >= adult ? "Person is adult" : "Person too young");
console.log(age2 >= adult ? "Person is adult" : "Person too young");
console.log(age3 >= adult ? "Person is adult" : "Person too young");

// З булевим значенням:
let isAdult = age1 >= adult;
console.log(isAdult);
isAdult = age2 >= adult;
console.log(isAdult);
isAdult = age3 >= adult;
console.log(isAdult);

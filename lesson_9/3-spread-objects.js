// Об'єднання властивостей двох об'єктів
const car1 = {
  brand: "BMW",
  model: "X3",
  year: 2015
};

const car2 = {
  brand: "Renault",
  model: "Megane",
  owner: 2012
};

const car3 = {...car1, ...car2};

console.log(car3);
// Визначаю рандомний середній бал студента від 0 до 100 (просто, щоб було цікавіше)
const averageGrade = Math.floor(Math.random() * 100);

// const averageGrade = 85; // Розкоментувати ось це, щоб було точно як сказано в умові задачі

// Виводжу рівень успішності відповідно до того, яка оцінка
// Вирішив не писати умову (averageGrade > x && averageGrade <= y), щоб код був чистіший

if (averageGrade < 60) {
  console.log("Незадовільно");
} else if (averageGrade <= 70) {
  console.log("Задовільно");
} else if (averageGrade <= 80) {
  console.log("Добре");
} else if (averageGrade <= 90) {
  console.log("Дуже добре");
} else if (averageGrade <= 100) {
  console.log("Відмінно");
} else {
  console.log("Некоректна оцінка");
}
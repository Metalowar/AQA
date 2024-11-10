// Створення класу з методом виконання самого реквесту
class reqClass {
  constructor(request) {
    this.request = request;
  }

  async makeRequest() {
    try {
      const response = await fetch(this.request);
      if (response.status !== 304) {
        return await response.json();
      } else {
        throw new Error("Status 304 - Not Modified");
      }
    } catch (error) {
      console.error('Error during request:', error);
      throw error;
    }
  }
}

// Створення екземпляру на перший реквест
const classTodo = new reqClass("https://jsonplaceholder.typicode.com/todos/1");
classTodo.makeRequest()
  .then(data => {
    console.log('Успішний результат:', data);
  })
  .catch(error => {
    console.error('Запит завершився з помилкою:', error);
  });

// Створення другого на перший реквест
const classUser = new reqClass("https://jsonplaceholder.typicode.com/users/1");
classUser.makeRequest()
  .then(data => {
    console.log('Успішний результат:', data);
  })
  .catch(error => {
    console.error('Запит завершився з помилкою:', error);
  });

// Не створював методи для Promise.all і Promise.race, тому що це додаткове завдання і щось не пішло швидко вирішити це питання
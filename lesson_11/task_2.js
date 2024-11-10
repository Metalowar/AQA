// Проміси
const firstRequest = "https://jsonplaceholder.typicode.com/todos/1";
const secondRequest = "https://jsonplaceholder.typicode.com/users/1";

// Перший проміс, де отримую через фетч запит, і виводжу відповідь
const promiseTodo = () => new Promise((resolve, reject) => {
  fetch(firstRequest)
    .then(response => {
      if (!response.status === 304) {
        reject(new Error(`Status error! Status: ${response.status}`));
      } else {
        return response.json();
      }
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
});

// Другий проміс, де отримую через фетч запит, і виводжу відповідь
const promiseUser = () => new Promise((resolve, reject) => {
  fetch(secondRequest)
    .then(response => {
      if (!response.status === 304) {
        reject(new Error(`Status error! Status: ${response.status}`));
      } else {
        return response.json();
      }
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
});

// Виводжу 2 результати (об'єкти) промісів
const allPromices = Promise.all([promiseTodo(), promiseUser()]);
allPromices.then(results => {
  console.log('Promise.all results:', results);
});

// Виводжу тільки перший успішний проміс
const racePromices = Promise.race([promiseTodo(), promiseUser()]);
racePromices.then(results => {
  console.log('Fist result from Promise.race:', results);
});
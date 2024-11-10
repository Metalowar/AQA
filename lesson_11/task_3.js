// Асинхронні

const firstRequest = "https://jsonplaceholder.typicode.com/todos/1";
const secondRequest = "https://jsonplaceholder.typicode.com/users/1";

const asyncTodo = async () => {
  const result = await fetch(firstRequest);
  if (result.status !== 304) {
    return result.json();
  }
  else {
    throw new Error("Someting went wrong")
  }
}

asyncTodo().then(console.log)

const asyncUsers = async () => {
  const result = await fetch(secondRequest);
  if (result.status !== 304) {
    return result.json();
  }
  else {
    throw new Error("Someting went wrong")
  }
}

asyncUsers().then(console.log)
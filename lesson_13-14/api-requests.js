import axios from 'axios'

// Ініціалізую інстанс з роутом
const basicUrl = axios.create({
  baseURL: 'https://api.restful-api.dev/objects',
  validateStatus: () => true
});

// Створюю GET запит зі списком об'єктів
export const getAllObj = async () => {
  const response = await basicUrl.get('');
  return response;
};

// Створюю POST запит з пейлоадом
export const addObject = async () => {
  const response = await basicUrl.post('', {
    "name": "Test name",
    "data": {
      "year": 2026,
      "price": 1.9696,
      "hard_disk_size": "1,5 TB"
    }
  });
  return response;
};

// Зберігаю значення id із запиту POST в змінну
export let id;
export const initializeId = async () => {
  const response = await addObject();
  id = response.data.id;
};

// Викликаю функцію для визначення id, щоб підставляти її в подальші роути
await initializeId();

// Створюю PUT запит з новим пейлоадом попереднього запиту
export const updateObj = async () => {
  const response = await basicUrl.put(`/${id}`, {
    "name": "New name with PUT",
    "data": {
      "year": 2024,
      "price": 1999,
      "hard_disk_size": "1 TB"
    }
  });
  return response;
};

// Створюю PATCH запит з новим name, але не міняючи пейлоад попереднього запиту
export const partUpdateObj = async () => {
  const response = await basicUrl.patch(`/${id}`, {
    "name": "PATCH test name"
  });
  return response;
};

// Видаляю створений об'єкт
export const deleteObj = async () => {
  const response = await basicUrl.delete(`/${id}`);
  return response;
};
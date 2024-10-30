import * as apiRequests from './api-requests.js';
import { id } from "./api-requests.js";
import {describe, expect, test} from '@jest/globals';

describe('Test objects with main REST methods', () => {

  // Тест респонсу чи правильні типи даних він повертає (GET)
  test('test main values by type', async () => {
    const response = await apiRequests.getAllObj();
    expect(response.status).toEqual(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data).toEqual(expect.arrayContaining([expect.any(Object)]));
    expect(response.data).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        data: expect.any(Object)
      })
    ]));
  });

  // Тест кожного параметру респонсу на відповідність переданого пейлоаду (Post)
  test('addind new object', async () => {
    const response = await apiRequests.addObject();
    expect(response.status).toEqual(200);
    expect(response.data).toHaveProperty("id");
    expect(response.data).toBeInstanceOf(Object);
    expect(response.data.name).toEqual("Test name");
    expect(response.data.data.year).toEqual(2026);
    expect(response.data.data.price).toEqual(1.9696);
    expect(response.data.data.hard_disk_size).toEqual("1,5 TB");
    expect(response.data.createdAt).toBeDefined();
  });

  // Тест кожного параметру респонсу чи він змінився (PUT)
  test('rewrite full payload', async () => {
    const response = await apiRequests.updateObj();
    expect(response.status).toEqual(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data.id).toEqual(`${id}`);
    expect(response.data).toBeInstanceOf(Object);
    expect(response.data.name).toEqual("New name with PUT");
    expect(response.data.data.year).toEqual(2024);
    expect(response.data.data.price).toEqual(1999);
    expect(response.data.data.hard_disk_size).toEqual("1 TB");
    expect(response.data).not.toHaveProperty('createdAt');
    expect(response.data.updatedAt).toBeDefined();
  });

  // Тест кожного параметру респонсу чи змінився тільки потрібний параметр (PATCH)
  test('rewrite one parameter of object', async () => {
    const response = await apiRequests.partUpdateObj();
    expect(response.status).toEqual(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data.id).toEqual(`${id}`);
    expect(response.data).toBeInstanceOf(Object);
    expect(response.data.name).toEqual("PATCH test name");
    expect(response.data.data.year).toEqual(2024);
    expect(response.data.data.price).toEqual(1999);
    expect(response.data.data.hard_disk_size).toEqual("1 TB");
    expect(response.data).not.toHaveProperty('createdAt');
    expect(response.data.updatedAt).toBeDefined();
  });

  // Видалення створеного об'єкта (DELETE)
  test('deleting object', async () => {
    const response = await apiRequests.deleteObj();
    expect(response.status).toEqual(200);
    expect(response.data.message).toBeDefined();
    expect(response.data.message).toEqual(`Object with id = ${id} has been deleted.`)
  })
})
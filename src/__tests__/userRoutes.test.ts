import request from 'supertest';
import { app } from '../index'; // Ajusta según la ruta de tu servidor
import pool from '../config/db';

jest.setTimeout(30000); // Incrementa el límite a 30 segundos


describe('GET /users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /users/:id', () => {
  it('should return a specific user', async () => {
    const userId = 1; // Ajusta según tus datos
    const response = await request(app).get(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', userId);
  });
});

// Cierre de recursos
afterAll(async () => {
    try {
      await pool.end(); // Cierra todas las conexiones del pool
      console.log("Database connection pool closed.");
    } catch (error) {
      console.error("Error closing database connection pool:", error);
    }
  });
  

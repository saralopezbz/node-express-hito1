import request from 'supertest';
import { app } from '../index'; // Importa `app` desde tu archivo index
import pool from '../config/db'; // Importa el pool para cerrar la conexión a la base de datos

jest.setTimeout(30000); // Incrementa el límite a 30 segundos


describe('Server and basic routes', () => {
  // Prueba para la ruta pública
  it('should return a message from the public route', async () => {
    const response = await request(app).get('/public');
    expect(response.status).toBe(200); // Verifica que la respuesta sea exitosa
    expect(response.body).toHaveProperty('message', 'This is a public route'); // Verifica el mensaje
  });

  // Prueba para una ruta no existente
  it('should return 404 for an unknown route', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404); // Verifica que responde con 404
  });
});

// Cierre del servidor y la conexión a la base de datos después de las pruebas
afterAll(async () => {
    try {
      await pool.end(); // Cierra todas las conexiones del pool
      console.log("Database connection pool closed.");
    } catch (error) {
      console.error("Error closing database connection pool:", error);
    }
  });
  
  
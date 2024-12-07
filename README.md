# Proyecto Node.js - Hito 1

Este proyecto es una aplicación backend creada con **Node.js** y **Express**, que incluye funcionalidades básicas como registro, inicio de sesión y gestión de usuarios. También cuenta con rutas públicas y protegidas para ilustrar el funcionamiento de la autenticación básica.

---

## **Instalación y Configuración**

1. **Clonar el Repositorio**:

   ```bash
   git clone https://github.com/saralopezbz/node-express-hito1.git
   cd node-express-hito1
   ```

2. **Instalar Dependencias**:

   ```bash
   npm install
   ```

3. **Estructura del Proyecto**:

   ```plaintext
   Hito01/
   |-- data/
   |   |-- users.json
   |-- src/
   |   |-- controller/
   |   |   |-- auth.controller.ts
   |   |   |-- user.controller.ts
   |   |-- interfaces/
   |   |   |-- user.interface.ts
   |   |-- routes/
   |   |   |-- auth.route.ts
   |   |   |-- user.route.ts
   |   |-- services/
   |   |   |-- auth.service.ts
   |   |   |-- user.service.ts
   |   |-- index.ts
   |-- .gitignore
   |-- package.json
   |-- tsconfig.json
   ```

4. **Ejecutar el Servidor**:

   ```bash
   npm run dev
   ```

   El servidor estará disponible en: `http://localhost:3000`

---

## **Rutas Disponibles**

### **1. Rutas de Autenticación**

#### **Registro de Usuario**

- **Endpoint:** `/auth/register`
- **Método:** `POST`
- **Body (JSON):**
  ```json
  {
    "email": "test@example.com",
    "password": "123456"
  }
  ```
- **Respuesta Exitosa:**
  ```json
  {
    "message": "User registered successfully",
    "newUser": {
      "id": 1672538123,
      "email": "test@example.com",
      "password": "123456"
    }
  }
  ```

#### **Inicio de Sesión**

- **Endpoint:** `/auth/login`
- **Método:** `POST`
- **Body (JSON):**
  ```json
  {
    "email": "test@example.com",
    "password": "123456"
  }
  ```
- **Respuesta Exitosa:**
  ```json
  {
    "message": "Login successful",
    "user": {
      "id": 1672538123,
      "email": "test@example.com",
      "password": "123456"
    }
  }
  ```

### **2. Gestión de Usuarios**

#### **Obtener Usuarios**

- **Endpoint:** `/users`
- **Método:** `GET`
- **Respuesta Exitosa:**
  ```json
  [
    {
      "id": 1672538123,
      "email": "test@example.com",
      "password": "123456"
    }
  ]
  ```

### **3. Rutas Adicionales**

#### **Ruta Pública**

- **Endpoint:** `/public`
- **Método:** `GET`
- **Respuesta Exitosa:**
  ```json
  {
    "message": "This is a public route"
  }
  ```

#### **Ruta Protegida**

- **Endpoint:** `/protected`
- **Método:** `GET`
- **Headers:**
  ```
  Authorization: simple-secret
  ```
- **Respuesta Exitosa:**
  ```json
  {
    "message": "You have accessed a protected route"
  }
  ```
- **Respuesta de Error:**
  ```json
  {
    "message": "Forbidden: Invalid or missing authorization header"
  }
  ```

---

## **Detalles Técnicos**

- **Lenguaje:** TypeScript
- **Framework:** Express
- **Gestión de Datos:** Los datos de usuarios se almacenan en un archivo `users.json` ubicado en la carpeta `data/`.
- **Middleware:**
  - `body-parser` para parsear solicitudes JSON.
  - Rutas protegidas simples usando encabezados de autorización.

---

## **Licencia**

Este proyecto está bajo la licencia MIT. Puedes consultar más detalles en el archivo `LICENSE`.

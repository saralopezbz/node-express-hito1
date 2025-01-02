Aquí tienes el `README.md` actualizado con la inclusión de los archivos `.prettierrc` y `package-lock.json` en la estructura del proyecto:

---

# Proyecto Node.js - Hito 2

Este proyecto es una evolución del **Hito 1**, implementando la gestión de usuarios y autenticación básica utilizando **PostgreSQL** como base de datos para persistencia. Se han añadido rutas y servicios para manejar operaciones de registro e inicio de sesión.

---

## **Instalación y Configuración**

### **1. Clonar el Repositorio**

```bash
git clone https://github.com/saralopezbz/node-express-hito2.git
cd node-express-hito2
```

### **2. Instalar Dependencias**

```bash
npm install
```

### **3. Configurar la Base de Datos**

Crear la base de datos y la tabla `users` en PostgreSQL:

```sql
CREATE DATABASE hito2_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### **4. Ejecutar el Servidor**

```bash
npm run dev
```

El servidor estará disponible en: `http://localhost:3000`.

---

## **Estructura del Proyecto**

```plaintext
NODE-EXPRESS-HITO2/
|-- imagenes/                  # Capturas de pruebas
|-- node_modules/              # Dependencias del proyecto
|-- src/
|   |-- config/
|   |   |-- db.ts              # Configuración de la conexión a PostgreSQL
|   |-- controller/
|   |   |-- auth.controller.ts # Controlador de autenticación
|   |   |-- user.controller.ts # Controlador de usuarios
|   |-- interfaces/
|   |   |-- user.interface.ts  # Definición de la interfaz de Usuario
|   |-- models/
|   |   |-- user.model.ts      # Modelo de usuario (PostgreSQL)
|   |-- routes/
|   |   |-- auth.route.ts      # Rutas de autenticación
|   |   |-- user.route.ts      # Rutas de usuarios
|   |-- services/
|   |   |-- auth.service.ts    # Servicios de autenticación
|   |   |-- user.service.ts    # Servicios de usuarios
|   |-- index.ts               # Archivo principal del servidor
|-- .gitignore                 # Archivos y carpetas ignorados por Git
|-- .prettierrc                # Configuración de Prettier
|-- package.json               # Dependencias y scripts
|-- package-lock.json          # Versiones exactas de las dependencias instaladas
|-- README.md                  # Documentación del proyecto
|-- tsconfig.json              # Configuración de TypeScript
```

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
      "id": 1,
      "email": "test@example.com"
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
      "id": 1,
      "email": "test@example.com"
    }
  }
  ```

---

## **Tecnologías Utilizadas**

- **Node.js** y **Express** para el servidor.
- **TypeScript** para tipado estático.
- **PostgreSQL** para la base de datos.
- **Prettier** para el formato del código.

---

## **Pruebas**

Se realizaron pruebas de las rutas de autenticación (`/auth/register` y `/auth/login`) utilizando **Thunder Client**, confirmando los siguientes flujos:
- Registro exitoso de nuevos usuarios.
- Validación de credenciales para inicio de sesión.

---

## **Licencia**

Este proyecto está bajo la licencia MIT. Puedes consultar más detalles en el archivo `LICENSE`.

---

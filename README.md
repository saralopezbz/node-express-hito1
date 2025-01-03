# **Proyecto Node.js - Hito 3**

Este proyecto es una evolución del **Hito 2**, en el que se han implementado pruebas automatizadas utilizando **Jest** y **ts-jest** para garantizar el correcto funcionamiento de las rutas y la interacción con la base de datos PostgreSQL. El objetivo de este hito es asegurar la calidad del backend mediante pruebas unitarias e integradas.

---

## **Características Principales**

- Configuración y uso de **TypeScript**.
- Gestión de usuarios y autenticación básica.
- Conexión a **PostgreSQL** para la persistencia de datos.
- Pruebas automatizadas con **Jest** y **ts-jest** para validar el correcto funcionamiento del sistema.

---

## **Instalación y Configuración**

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/saralopezbz/node-express-hito3.git
cd node-express-hito3
```

### **2. Instalar Dependencias**
```bash
npm install
```

### **3. Configurar la Base de Datos**
Asegúrate de que PostgreSQL esté en funcionamiento y crea la base de datos y la tabla `users`:

```sql
CREATE DATABASE hito3_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### **4. Configurar Variables de Entorno**
Crea un archivo `.env` en la raíz del proyecto y agrega las configuraciones necesarias para la conexión a la base de datos. Ejemplo:
```
DB_USER=tu_usuario
DB_HOST=localhost
DB_NAME=hito3_db
DB_PASSWORD=tu_contraseña
DB_PORT=5432
```

### **5. Ejecutar el Servidor**
Inicia el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor estará disponible en: `http://localhost:3000`.

---

## **Estructura del Proyecto**

```plaintext
NODE-EXPRESS-HITO3/
|-- src/
|   |-- config/
|   |   |-- db.ts              # Configuración de la conexión a PostgreSQL
|   |-- controller/
|   |   |-- auth.controller.ts # Controlador de autenticación
|   |   |-- user.controller.ts # Controlador de usuarios
|   |-- interfaces/
|   |   |-- user.interface.ts  # Definición de la interfaz de Usuario
|   |-- models/
|   |   |-- user.model.ts      # Modelo de usuario
|   |-- routes/
|   |   |-- auth.route.ts      # Rutas de autenticación
|   |   |-- user.route.ts      # Rutas de usuarios
|   |-- services/
|   |   |-- auth.service.ts    # Servicios de autenticación
|   |   |-- user.service.ts    # Servicios de usuarios
|   |-- __tests__/
|   |   |-- app.test.ts        # Pruebas de rutas generales
|   |   |-- userRoutes.test.ts # Pruebas de rutas de usuarios
|   |-- index.ts               # Archivo principal del servidor
|-- jest.config.js             # Configuración de Jest
|-- tsconfig.json              # Configuración de TypeScript
|-- package.json               # Dependencias y scripts
|-- README.md                  # Documentación del proyecto
```

---

## **Pruebas**

### **1. Ejecución de Pruebas**
Este proyecto utiliza **Jest** y **ts-jest** para pruebas automatizadas. Para ejecutar las pruebas:
```bash
npm test
```

### **2. Pruebas Realizadas**
#### **Ruta Pública (`/public`)**
- **Método:** `GET`
- **Prueba:** Devuelve un mensaje confirmando que la ruta está accesible.
- **Respuesta Esperada:**
  ```json
  {
    "message": "This is a public route"
  }
  ```

#### **Ruta Protegida (`/protected`)**
- **Método:** `GET`
- **Prueba:** Acceso permitido solo con un header de autorización válido.
- **Respuesta Esperada:**
  ```json
  {
    "message": "You have accessed a protected route"
  }
  ```

#### **Ruta de Usuarios (`/users`)**
- **Método:** `GET`
- **Prueba:** Devuelve una lista de usuarios en formato JSON.
- **Respuesta Esperada:** Un arreglo de usuarios.

#### **Ruta de Usuario por ID (`/users/:id`)**
- **Método:** `GET`
- **Prueba:** Devuelve un usuario específico.
- **Respuesta Esperada:**
  ```json
  {
    "id": 1,
    "email": "test@example.com"
  }
  ```

---

## **Tecnologías Utilizadas**

- **Node.js** y **Express** para el backend.
- **TypeScript** para tipado estático.
- **PostgreSQL** para la base de datos.
- **Jest** y **ts-jest** para pruebas automatizadas.

---

## **Conclusión**
Con este hito, se han integrado pruebas automatizadas para garantizar la estabilidad y calidad del backend. El proyecto ahora incluye pruebas para rutas clave y está preparado para ser extendido con nuevas funcionalidades.

---

## **Licencia**
Este proyecto está bajo la licencia MIT.

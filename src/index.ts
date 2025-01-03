import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import pool from "./config/db";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Log para verificar que el servidor se inicializó correctamente
console.log("Server initialization complete.");

// Rutas
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

// Ruta pública de ejemplo
app.get("/public", (req, res) => {
  res.json({ message: "This is a public route" });
});

// Ruta protegida simple
app.get("/protected", (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader === "simple-secret") {
    res.json({ message: "You have accessed a protected route" });
  } else {
    res
      .status(403)
      .json({ message: "Forbidden: Invalid or missing authorization header" });
  }
});

// Inicia el servidor solo si el archivo es ejecutado directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export { app };

import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

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

// Servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

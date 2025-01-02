import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "sara",
  host: "localhost",
  database: "hito2",
  password: "123",
  port: 5432, // Puerto por defecto de PostgreSQL
});

pool.on("connect", () => {
    console.log("Connected to the database");
});


export default pool;

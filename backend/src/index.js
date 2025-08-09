const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./src/config/db"); // koneksi PG

dotenv.config();

const app = express();
const port = 3000;
const routes = require("./src/routes/routes");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("public/uploads"));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});

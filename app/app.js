import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as userController from "./controllers/usuarios.controller.js";

const app = express();

//middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});
//Rutas para usuarios
app.get("/api/usuarios", userController.findAll);
app.post("/api/usuarios", userController.create);

//rutas por defecto
app.all("*", (req, res) => {
  res.status(404).send("Ruta no encontrada");
});

export default app;

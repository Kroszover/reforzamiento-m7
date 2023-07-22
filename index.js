import app from "./app/app.js";
import sequelize from "./app/config/database.config.js";

import "./app/models/asociaciones.js";

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la Base de datos");
    await sequelize.sync({ force: true, alter: true });
    console.log("BDD sincronizada");
    app.listen(3000, () => {
      console.log("Escuchando al servidor en el puerto 3000");
    });
  } catch (error) {
    console.error("No se pudo conectar a la Base de datos:", error);
  }
};

main();

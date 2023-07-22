import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "reforzamiento_m7",
  "postgres",
  "Camiloignacio1",
  {
    host: "localhost",
    dialect: "postgres",
    pool: {
      max: 5, // maximo de conexiones
      min: 0, // minimo de conexiones
      acquire: 30000, // tiempo de espera
      idle: 10000, // tiempo maximo de espera
    },
  }
);

export default sequelize;

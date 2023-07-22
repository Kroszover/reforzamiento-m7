import Usuario from "../models/Usuario.model.js";

export const findAll = async (req, res) => {
  try {
    let usuarios = await Usuario.findAll();
    if (usuarios.length === 0) {
      return res.status(404).send({
        //Siempre return en ejecuciones intermedias
        message: "No hay usuarios en la base de datos",
      });
    }
    res.json({
      code: 200,
      message: "Lista de usuarios",
      data: usuarios,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error al obtener los usuarios",
    });
    console.error("No se pudo conectar a la Base de datos:", error);
  }
};

export const create = async (req, res) => {
  try {
    let { nombre, apellido, email } = req.body;
    let usuario = await Usuario.create({
      nombre,
      apellido,
      email,
    });
    console.log("Usuario credo:", usuario);
    res.status(201).json({
      message: "Usuario creado con exito",
      data: usuario,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error al crear el usuario",
    });
    console.error("No se pudo conectar a la Base de datos:", error);
  }
};

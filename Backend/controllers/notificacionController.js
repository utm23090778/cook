/*const Notificacion = require("../models/Notificacion");

exports.crearNotificacion = async (req, res) => {
  try {
    if (!req.body.tipo || !req.body.mensaje || !req.body.usuario_id) {
      return res.status(400).json({ message: "Faltan datos en la notificación" });
    }

    const notificacion = new Notificacion(req.body);
    const resultado = await notificacion.save();

    res.status(201).json({ id: resultado._id, message: "Notificación creada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la notificación", error: error.message });
  }
};*/

import Notificacion from "../models/Notificacion.js";

export const crearNotificacion = async (req, res) => {
  try {
    const { tipo, detalles, idUsuario } = req.body;

    if (!tipo || !detalles || !idUsuario) {
      return res.status(400).json({ message: "Faltan datos en la notificación" });
    }

    const notificacion = new Notificacion({ tipo, detalles, idUsuario });
    const resultado = await notificacion.save();

    res.status(201).json({ id: resultado._id, message: "Notificación creada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la notificación", error: error.message });
  }
};


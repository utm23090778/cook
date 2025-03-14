/*const Receta = require("../models/Receta");

exports.crearReceta = async (req, res) => {
  try {
    if (!req.body.nombre || !req.body.instrucciones) {
      return res.status(400).json({ message: "Faltan datos en la receta" });
    }

    const receta = new Receta(req.body);
    const resultado = await receta.save();
    res.status(201).json({ id: resultado._id, message: "Receta creada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la receta", error: error.message });
  }
};

exports.obtenerRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las recetas", error: error.message });
  }
};

exports.darLike = async (req, res) => {
  try {
    const { usuario_id } = req.body;

    if (!usuario_id) {
      return res.status(400).json({ message: "Se requiere el ID del usuario para dar like" });
    }

    const receta = await Receta.findById(req.params.receta_id);

    if (!receta) {
      return res.status(404).json({ message: "Receta no encontrada" });
    }

    if (receta.likes.includes(usuario_id)) {
      return res.status(400).json({ message: "Ya has dado like a esta receta" });
    }

    receta.likes.push(usuario_id);
    await receta.save();

    res.status(200).json({ message: "Like agregado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al dar like a la receta", error: error.message });
  }
};*/


import Receta from "../models/Receta.js";

export const crearReceta = async (req, res) => {
  try {
    const receta = new Receta(req.body);
    const resultado = await receta.save();
    res.json({ id: resultado._id });
  } catch (error) {
    res.status(500).json({ message: "Error al crear receta", error: error.message });
  }
};

export const obtenerRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find().populate("autor", "nombre");
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener recetas", error: error.message });
  }
};

export const darLike = async (req, res) => {
  try {
    const { usuario_id } = req.body;
    const receta = await Receta.findById(req.params.receta_id);

    if (!receta) {
      return res.status(404).json({ message: "Receta no encontrada" });
    }

    if (receta.likes.includes(usuario_id)) {
      receta.likes = receta.likes.filter((id) => id.toString() !== usuario_id);
    } else {
      receta.likes.push(usuario_id);
    }

    await receta.save();
    res.json({ message: "Like actualizado", likes: receta.likes.length });
  } catch (error) {
    res.status(500).json({ message: "Error al dar like", error: error.message });
  }
};


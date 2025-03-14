/*exports.crearComentario = async (req, res) => {
  try {
    if (!req.body.comentario || !req.body.usuario_id) {
      return res.status(400).json({ message: "Faltan datos en el comentario" });
    }

    
    const receta = await Receta.findById(req.params.receta_id);
    if (!receta) {
      return res.status(404).json({ message: "Receta no encontrada" });
    }

    const comentario = new Comentario({ ...req.body, idReceta: req.params.receta_id });
    const resultado = await comentario.save();

    res.status(201).json({ id: resultado._id, message: "Comentario creado exitosamente" });
  } catch (error) {
   
    res.status(500).json({ message: "Error al crear el comentario", error: error.message });
  }
};*/

import Comentario from "../models/Comentario.js"; 
import Receta from "../models/Receta.js"; 

export const crearComentario = async (req, res) => {
  try {
    const { comentario, usuario_id, valoracion } = req.body;
    const { receta_id } = req.params;

    if (!comentario || !usuario_id) {
      return res.status(400).json({ message: "Faltan datos en el comentario" });
    }

    const receta = await Receta.findById(receta_id);
    if (!receta) {
      return res.status(404).json({ message: "Receta no encontrada" });
    }

    const nuevoComentario = new Comentario({
      idReceta: receta_id,
      autor: usuario_id,
      comentario,
      valoracion,
    });

    const resultado = await nuevoComentario.save();

    res.status(201).json({ id: resultado._id, message: "Comentario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el comentario", error: error.message });
  }
};



/*const Usuario = require("../models/Usuario");  

exports.crearUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const resultado = await usuario.save();
    res.json({ id: resultado._id });  
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error: error.message });  
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios); 
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });  
  }
};

exports.seguirUsuario = async (req, res) => {
  try {
    const { seguir_id } = req.body;
    
    const usuario = await Usuario.findById(req.params.usuario_id);
    const usuarioASeguir = await Usuario.findById(seguir_id);
    
    if (!usuario || !usuarioASeguir) {
      return res.status(404).json({ message: "Usuario no encontrado" }); 
    }

    await Usuario.findByIdAndUpdate(req.params.usuario_id, { $addToSet: { siguiendo: seguir_id } });
    await Usuario.findByIdAndUpdate(seguir_id, { $addToSet: { seguidores: req.params.usuario_id } });

    res.json({ message: "Ahora sigues a este usuario" });  
  } catch (error) {
    res.status(500).json({ message: "Error al seguir al usuario", error: error.message });  
  }
};*/


import Usuario from "../models/Usuario.js";

export const crearUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const resultado = await usuario.save();
    res.json({ id: resultado._id });
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error: error.message });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
  }
};

export const seguirUsuario = async (req, res) => {
  try {
    const { seguir_id } = req.body;
    const usuario = await Usuario.findById(req.params.usuario_id);
    const usuarioASeguir = await Usuario.findById(seguir_id);

    if (!usuario || !usuarioASeguir) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    usuario.siguiendo.addToSet(seguir_id);
    usuarioASeguir.seguidores.addToSet(req.params.usuario_id);

    await usuario.save();
    await usuarioASeguir.save();

    res.json({ message: "Ahora sigues a este usuario" });
  } catch (error) {
    res.status(500).json({ message: "Error al seguir al usuario", error: error.message });
  }
};


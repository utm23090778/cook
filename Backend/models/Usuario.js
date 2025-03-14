/*const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fotoPerfil: { type: String, default: "default.jpg" },
    recetasFavoritas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Receta" }],
    seguidores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
    siguiendo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
    publicaciones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Publicacion" }],
    fechaCreacion: { type: Date, default: Date.now },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Usuario", usuarioSchema);
*/

import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fotoPerfil: { type: String, default: "default.jpg" },
    recetasFavoritas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Receta" }],
    seguidores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
    siguiendo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
    publicaciones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Publicacion" }],
    fechaCreacion: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Usuario", usuarioSchema);

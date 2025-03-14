/*const mongoose = require("mongoose");

const recetaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    ingredientes: [{ type: String, required: true }],
    pasos: [{ type: String, required: true }],
    tiempoPreparacion: { type: String, required: true },
    dificultad: { type: String, required: true },
    etiquetas: [{ type: String }],
    imagenUrl: { type: String },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }, 
    fechaCreacion: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }], 
    compartidoPor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }], 
    estado: { type: String, default: "Publicado" },
    ediciones: [{ type: String }],
    fechaActualizacion: { type: Date }, 
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Receta", recetaSchema);*/

import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    ingredientes: [{ type: String, required: true }],
    pasos: [{ type: String, required: true }],
    tiempoPreparacion: { type: String, required: true },
    dificultad: { type: String, required: true },
    etiquetas: [{ type: String }],
    imagenUrl: { type: String },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
    fechaCreacion: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
    compartidoPor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
    estado: { type: String, default: "Publicado" },
    ediciones: [{ type: String }],
    fechaActualizacion: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Receta", recetaSchema);

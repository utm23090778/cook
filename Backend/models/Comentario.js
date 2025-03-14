/*const mongoose = require("mongoose");

const comentarioSchema = new mongoose.Schema(
  {
    idReceta: { type: mongoose.Schema.Types.ObjectId, ref: "Receta", required: true }, 
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }, 
    comentario: { type: String, required: true }, 
    valoracion: { type: Number, min: 1, max: 5 }, 
    fecha: { type: Date, default: Date.now },
    respuestas: [
      {
        autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
        comentario: { type: String, required: true },
        fecha: { type: Date, default: Date.now },
      },
    ],
    reportado: { type: Boolean, default: false },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Comentario", comentarioSchema);
*/



import mongoose from "mongoose";

const comentarioSchema = new mongoose.Schema(
  {
    idReceta: { type: mongoose.Schema.Types.ObjectId, ref: "Receta", required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
    comentario: { type: String, required: true },
    valoracion: { type: Number, min: 1, max: 5 },
    fecha: { type: Date, default: Date.now },
    respuestas: [
      {
        autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
        comentario: { type: String, required: true },
        fecha: { type: Date, default: Date.now },
      },
    ],
    reportado: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Comentario", comentarioSchema);

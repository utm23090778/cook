/*const mongoose = require("mongoose");

const notificacionSchema = new mongoose.Schema(
  {
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }, 
    tipo: { 
      type: String, 
      required: true,
      enum: ["Mensaje", "Like", "Comentario", "Seguidor", "Otro"], 
    },
    detalles: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    leido: { type: Boolean, default: false },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Notificacion", notificacionSchema);
*/

import mongoose from "mongoose";

const notificacionSchema = new mongoose.Schema(
  {
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
    tipo: {
      type: String,
      required: true,
      enum: ["Mensaje", "Like", "Comentario", "Seguidor", "Otro"],
    },
    detalles: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    leido: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Notificacion", notificacionSchema);

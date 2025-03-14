/*const express = require("express");
const { crearComentario } = require("../controllers/comentarioController.js");

const router = express.Router();

router.post("/:receta_id/comentarios", crearComentario);

module.exports = router;*/

import express from "express";
import { crearComentario } from "../controllers/comentarioController.js";

const router = express.Router();

router.post("/:receta_id/comentarios", crearComentario);

export default router;

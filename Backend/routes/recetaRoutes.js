/*const express = require("express");
const { crearReceta, obtenerRecetas, darLike } = require("../controllers/recetaController.js");

const router = express.Router();

router.post("/", crearReceta);
router.get("/", obtenerRecetas);
router.post("/:receta_id/like", darLike);

module.exports = router;*/


import express from "express";
import { crearReceta, obtenerRecetas, darLike } from "../controllers/recetaController.js";

const router = express.Router();

router.post("/", crearReceta);
router.get("/", obtenerRecetas);
router.post("/:receta_id/like", darLike);

export default router;

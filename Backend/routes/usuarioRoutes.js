/*const express = require("express");
const { crearUsuario, obtenerUsuarios, seguirUsuario } = require("../controllers/UsuarioController.js");

const router = express.Router();

router.post("/", crearUsuario);
router.get("/", obtenerUsuarios);
router.post("/:usuario_id/seguir", seguirUsuario);

module.exports = router;*/


import express from "express";
import { crearUsuario, obtenerUsuarios, seguirUsuario } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/", crearUsuario);
router.get("/", obtenerUsuarios);
router.post("/:usuario_id/seguir", seguirUsuario);

export default router;

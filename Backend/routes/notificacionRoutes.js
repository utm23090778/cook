/*const express = require("express");
const { crearNotificacion } = require("../controllers/notificacionController.js");

const router = express.Router();

router.post("/", crearNotificacion);

module.exports = router;*/

import express from "express";
import { crearNotificacion } from "../controllers/notificacionController.js";

const router = express.Router();

router.post("/", crearNotificacion);

export default router;

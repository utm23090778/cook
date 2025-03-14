/*import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from "./Backend/routes/usuarioRoutes.js";
import recetaRoutes from "./Backend/routes/recetaRoutes.js";
import comentarioRoutes from "./Backend/routes/comentarioRoutes.js";
import notificacionRoutes from "./Backend/routes/notificacionRoutes.js";
import { usuario } from "./Backend/controllers/UsuarioController.js";

dotenv.config();


mongoose.connect(process.env.url_db)
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos", error);
  });

const app = express();


app.use(cors());
app.use(express.json());

// Rutas
app.use("/usuarios", usuarioRoutes);
app.use("/recetas", recetaRoutes);
app.use("/comentarios", comentarioRoutes);
app.use("/notificaciones", notificacionRoutes);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

usuario();

app.use((req, res) => {
  res.status(400).json({ message: `Recurso no encontrado: ${req.url}` });
});

export default app;

*/

import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from "./Backend/routes/usuarioRoutes.js";
import recetaRoutes from "./Backend/routes/recetaRoutes.js";
import comentarioRoutes from "./Backend/routes/comentarioRoutes.js";
import notificacionRoutes from "./Backend/routes/notificacionRoutes.js";

// Cargar variables de entorno desde un archivo .env
dotenv.config();

// Conexión a MongoDB
mongoose.connect(process.env.url_db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Conexión a la base de datos exitosa"))
  .catch((error) => console.error("❌ Error al conectar con la base de datos", error));

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/usuarios", usuarioRoutes);
app.use("/recetas", recetaRoutes);
app.use("/comentarios", comentarioRoutes);
app.use("/notificaciones", notificacionRoutes);

// Iniciar el servidor
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 Servidor en ejecución en el puerto ${port}`));

// Manejo de rutas no encontradas
app.use((req, res) => res.status(404).json({ message: `Recurso no encontrado: ${req.url}` }));

export default app;

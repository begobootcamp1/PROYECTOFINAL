import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import usuarioRouter from "./routes/usuarioRoute.js";
import contactoRouter from "./routes/contactoRoute.js";
import medicinaRouter from "./routes/medicinaRoute.js";
import eventoRouter from "./routes/eventoRoute.js";
import imagenesRouter from "./routes/imagenesRoute.js";
import fileUpload from "express-fileupload";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Añadimos el método config de dotenv para utilizar las variables de entorno
dotenv.config();

export function currentDir() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return { __dirname, __filename }; //los redefinimos para poder utilizarlos en cualquier sitio. podíamos haber puesto otros nombres, pero así mantenemos la nomenclatura
}

const { __dirname } = currentDir();
// instanciamos express
const app = express();

// --- middlewares de express ---
app.use(express.json());
app.use(express.text());
app.use(logger("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.static(join(__dirname, "public")));
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: "Imagen demasiado grande",
    uploadTimeout: 0,
  })
);

//----api middlewares-----
app.use("/usuario", usuarioRouter);
app.use("/contacto", contactoRouter);
app.use("/medicina", medicinaRouter);
app.use("/evento", eventoRouter);
app.use("/imagenes", imagenesRouter);

export default app;

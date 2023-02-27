import express from "express";
import usuarioController from "../controller/usuarioController.js";
//import validateLoginDto from "../utils/validateLoginDto.js";

const usuarioRouter = express.Router();
usuarioRouter.post("/", usuarioController.addUsuario);
userRouter.post("/login", usuarioController.loginUsuario);
usuarioRouter.delete("/:id", usuarioController.deleteUsuario);
usuarioRouter.patch("/", usuarioController.updateUsuario);

export default usuarioRouter;

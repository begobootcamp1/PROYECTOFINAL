import express from "express";
import contactoController from "../controller/contactoController.js";
//import validateLoginDto from "../utils/validateLoginDto.js";

const contactoRouter = express.Router();
contactoRouter.post("/", contactoController.addContacto);
//usuarioRouter.post("/login", contactoController.loginContacto);
contactoRouter.delete("/:id", contactoController.deleteContacto);
contactoRouter.patch("/", contactoController.updateContacto);
contactoRouter.get("/contactos", contactoController.getContacto);
contactoRouter.get("/contactos/id", contactoController.getContacto3);

export default contactoRouter;

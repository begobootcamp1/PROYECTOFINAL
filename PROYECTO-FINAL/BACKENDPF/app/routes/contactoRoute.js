import express from "express";
import contactoController from "../controller/contactoController.js";

const contactoRouter = express.Router();
contactoRouter.post("/", contactoController.addContacto);
contactoRouter.delete("/:id", contactoController.deleteContacto);
contactoRouter.patch("/", contactoController.updateContacto);
contactoRouter.get("/contactos", contactoController.getContacto);
contactoRouter.get("/contactos/id", contactoController.getContacto3);

export default contactoRouter;

import express from "express";
import eventoController from "../controller/eventoController.js";

const eventoRouter = express.Router();
eventoRouter.post("/", eventoController.addEvento);
eventoRouter.delete("/:id", eventoController.deleteEvento);
eventoRouter.get("/evento", eventoController.getEvento);

export default eventoRouter;

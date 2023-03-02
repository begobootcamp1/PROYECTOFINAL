import express from "express";
import medicinaController from "../controller/medicinaController.js";

const medicinaRouter = express.Router();
medicinaRouter.post("/", medicinaController.addMedicina);
medicinaRouter.delete("/:id", medicinaController.deleteMedicina);
medicinaRouter.patch("/", medicinaController.updateMedicina);
medicinaRouter.get("/medicina", medicinaController.getMedicina);

export default medicinaRouter;

import express from "express";
import imagenesController from "../controller/imagenesController.js";

const imagenesRouter = express.Router();
imagenesRouter.post("/", imagenesController.addimagen);
imagenesRouter.delete("/:id", imagenesController.deleteimagen);
imagenesRouter.patch("/", imagenesController.updateimagen);
imagenesRouter.get("/allimagenes", imagenesController.getimagenAlbum);
export default imagenesRouter;

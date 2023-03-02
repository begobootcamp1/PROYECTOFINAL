import dao from "../services/dao.js";
// import { SignJWT, jwtVerify } from "jose";

const imagenesController = {};

imagenesController.addimagen = async (req, res) => {
  const { textoImagen, path } = req.body;
  if (!textoImagen || !path)
    return res.status(400).send("Error al recibir el body");
  try {
    const imagen = await dao.getimagenalbumId(id);
    if (imagenesalbum.length > 0)
      return res.status(409).send("imagen ya registrada");
    const addimagen = await dao.addimagen(req.body);
    if (addimagen)
      return res.send(`Imagen ${textoImagen} con id:${addEvento} registrada`);
  } catch (e) {
    console.log(e.message);
  }
};

imagenesController.deleteimagen = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.senStatus(401);
  const token = authorization.split(" ")[1];
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );
    if (!payload.role)
      return res.status(409).send("no tiene permiso de administrador");
    const imagen = await dao.getimagenalbumbyId(req.params.id);
    if (imagenesalbum.lenght <= 0)
      return res.status(404).send("la imagen no existe");
    await dao.deleteimagen(req.params.id);
    return res.send(`Imagen con id ${req.params.id} eliminada`);
  } catch (e) {
    console.log(e.message);
  }
};

imagenesController.updateimagen = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.senStatus(401);

  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("error al recibir el body");
    await dao.updateimagen(req.params.id, req.body);
    return res.send(`Imagen con id ${re.params.id} modificada`);
  } catch (e) {
    console.log(e.message);
  }
};
imagenesController.getimagenAlbum = async (req, res) => {
  const { textoImagen, path } = req.body;
  try {
    const addimagen = await dao.getimagenAlbum();
    if (addimagen) return res.send(addimagen);
  } catch (e) {
    console.log(e.message);
  }
};
export default imagenesController;

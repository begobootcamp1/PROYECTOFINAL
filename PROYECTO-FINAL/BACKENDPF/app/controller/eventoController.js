import dao from "../services/dao.js";
// import { SignJWT, jwtVerify } from "jose";

const eventoController = {};

eventoController.addEvento = async (req, res) => {
  const { nombre, fecha } = req.body;
  if (!nombre || !fecha)
    return res.status(400).send("Error al recibir el body");
  try {
    const evento = await dao.getEventobyId(id);
    if (evento.length > 0) return res.status(409).send("evento ya registrado");
    const addEvento = await dao.addEvento(req.body);
    if (addEvento)
      return res.send(`Evento ${nombre} con id:${addEvento} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

eventoController.deleteEvento = async (req, res) => {
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
    const evento = await dao.getEventobyId(req.params.id);
    if (evento.lenght <= 0) return res.status(404).send("el evento no existe");
    await dao.deleteEvento(req.params.id);
    return res.send(`Evento con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

eventoController.updateEvento = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.senStatus(401);

  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("error al recibir el body");
    await dao.updateEvento(req.params.id, req.body);
    return res.send(`Evento con id ${re.params.id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};

export default eventoController;

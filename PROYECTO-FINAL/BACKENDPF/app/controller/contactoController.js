import dao from "../services/dao.js";
// import { SignJWT, jwtVerify } from "jose";

const contactoController = {};

contactoController.addContacto = async (req, res) => {
  const { nombre, fechaNacimiento, telefono, rol, fotoContacto } = req.body;
  if (!nombre || !fechaNacimiento || !telefono || !rol || !fotoContacto)
    return res.status(400).send("Error al recibir el body");
  try {
    const contacto = await dao.getContactobyId(id);
    if (contacto.length > 0)
      return res.status(409).send("contacto ya registrado");
    const addContacto = await dao.addContacto(req.body);
    if (addContacto)
      return res.send(`Contacto ${nombre} con id:${addContacto} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

contactoController.deleteContacto = async (req, res) => {
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
    const contacto = await dao.getContactobyId(req.params.id);
    if (contacto.lenght <= 0)
      return res.status(404).send("el contacto no existe");
    await dao.deleteContacto(req.params.id);
    return res.send(`Contacto con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

contactoController.updateContacto = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.senStatus(401);

  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("error al recibir el body");
    await dao.updateContacto(req.params.id, req.body);
    return res.send(`Contacto con id ${re.params.id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};
contactoController.getContacto = async (req, res) => {
  // const { authorization } = req.headers;
  // if (!authorization) return res.senStatus(401);

  try {
    let contacto = await dao.getContacto();
    return res.send(contacto);
  } catch (e) {
    console.log(e.message);
  }
};

export default contactoController;

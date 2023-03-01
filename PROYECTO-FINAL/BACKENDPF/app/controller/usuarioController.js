import dao from "../services/dao.js";
// import { SignJWT, jwtVerify } from "jose";
// import md5 from "md5";

const usuarioController = {};

usuarioController.addUsuario = async (req, res) => {
  const { nombre, fechaNacimiento, telefono, fotoUsuario, rol } = req.body;
  if (!nombre || !fechaNacimiento || !telefono || !fotoUsuario || !rol)
    return res.status(400).send("Error al recibir el body");
  try {
    const usuario = await dao.getUsuariorbyId(id);
    if (usuario.length > 0)
      return res.status(409).send("usuario ya registrado");
    const addUsuario = await dao.addUsuario(req.body);
    if (addUsuario)
      return res.send(`Usuario ${nombre} con id:${addUsuario} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};
usuarioController.loginUsuario = async (req, res) => {
  const { nombre, fechaNacimiento, telefono, rol } = req.body;
  if (!nombre || !fechaNacimiento || !telefono || !rol)
    return res.status(400).send("Error al recibir el body");
  try {
    let usuario = await dao.getUsuariobyId(id);
    if (usuario.length <= 0)
      return res.status(404).send("el usuario no está registrado");
    const clienPassword = md5(password);
    [usuario] = usuario;
    if (usuario.password != clienPassword)
      return res.status(401).send("password incorrecta");
    const jwtConstructor = new SignJWT({
      id: usuario.id,
      telefono: usuario.telefono,
      role: usuario.rol,
    });
    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_SECRET));
    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

usuarioController.deleteUsuario = async (req, res) => {
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
    const usuario = await dao.getUsuariobyId(req.params.id);
    if (usuario.lenght <= 0)
      return res.status(404).send("el usuario no existe");
    await dao.deleteUsuario(req.params.id);
    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

usuarioController.updateUsuario = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.senStatus(401);

  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("error al recibir el body");
    await dao.updateUsuario(req.params.id, req.body);
    return res.send(`Usuario con id ${re.params.id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};

export default usuarioController;

import dao from "../services/dao.js";

const medicinaController = {};

medicinaController.addMedicina = async (req, res) => {
  const { nombreMedicina, indicacion, fotoMedicina } = req.body;
  if (!nombreMedicina || !indicacion || !fotoMedicina)
    return res.status(400).send("Error al recibir el body");
  try {
    const medicina = await dao.getMedicinaId(id);
    if (medicina.length > 0)
      return res.status(409).send("medicina ya registrada");
    const addMedicina = await dao.addMedicina(req.body);
    if (addMedicina)
      return res.send(
        `Medicina ${nombreMedicina} con id:${addEvento} registrada`
      );
  } catch (e) {
    console.log(e.message);
  }
};

medicinaController.deleteMedicina = async (req, res) => {
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
    const medicina = await dao.getMedicinabyId(req.params.id);
    if (medicina.lenght <= 0)
      return res.status(404).send("la medicina no existe");
    await dao.deleteMedicina(req.params.id);
    return res.send(`Medicina con id ${req.params.id} eliminada`);
  } catch (e) {
    console.log(e.message);
  }
};

medicinaController.updateMedicina = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.senStatus(401);

  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("error al recibir el body");
    await dao.updateMedicina(req.params.id, req.body);
    return res.send(`Medicina con id ${re.params.id} modificada`);
  } catch (e) {
    console.log(e.message);
  }
};

medicinaController.getMedicina = async (req, res) => {
  try {
    let medicina = await dao.getMedicina();
    return res.send(medicina);
  } catch (e) {
    console.log(e.message);
  }
};

export default medicinaController;

import contactoQueries from "./mysqlQueries/contactoQueries.js";
import usuarioQueries from "./mysqlQueries/usuarioQueries.js";

const dao = {};

dao.getUsuariobyId = async (id) => await usuarioQueries.getUsuariobyId(id);
dao.addUsuario = async (usuarioData) =>
  await usuarioQueries.addUsuario(usuarioData);
dao.deleteUsuario = async (id) => await usuarioQueries.deleteUsuario(id);
dao.updateUsuario = async (id, usuarioData) =>
  await usuarioQueries.updateUsuario(id, usuarioData);

dao.getContactobyId = async (id) => await contactoQueries.getContactobyId(id);
dao.addContacto = async (contactoData) =>
  await contactoQueries.addContacto(contactoData);
dao.deleteContacto = async (id) => await contactoQueries.deleteContacto(id);
dao.updateContacto = async (id, contactoData) =>
  await contactoQueries.updateContacto(id, contactoData);

dao.getEventobyId = async (id) => await eventoQueries.getEventobyId(id);
dao.addEvento = async (eventoData) => await eventoQueries.addEvento(eventoData);
dao.deleteEvento = async (id) => await eventoQueries.deleteEvento(id);
dao.updateEvento = async (id, eventoData) =>
  await eventoQueries.updateEvento(id, eventoData);

dao.getMedicinabyId = async (id) => await medicinaQueries.getMedicinabyId(id);
dao.addMedicina = async (medicinaData) =>
  await medicinaQueries.addMedicina(medicinaData);
dao.deleteMedicina = async (id) => await medicinaQueries.deleteMedicina(id);
dao.updateMedicina = async (id, medicinaData) =>
  await medicinaQueries.updateMedicina(id, medicinaData);
dao.getContacto = async () => await contactoQueries.getContacto();

export default dao;

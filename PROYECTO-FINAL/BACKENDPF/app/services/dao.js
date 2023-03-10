import contactoQueries from "./mysqlQueries/contactoQueries.js";
import usuarioQueries from "./mysqlQueries/usuarioQueries.js";
import imagenesQueries from "./mysqlQueries/imagenesQueries.js";
import medicinaQueries from "./mysqlQueries/medicinaQueries.js";
import eventoQueries from "./mysqlQueries/eventoQueries.js";

const dao = {};

dao.getUsuariobyId = async (id) => await usuarioQueries.getUsuariobyId(id);
dao.addUsuario = async (usuarioData) =>
  await usuarioQueries.addUsuario(usuarioData);
dao.deleteUsuario = async (id) => await usuarioQueries.deleteUsuario(id);
dao.updateUsuario = async (id, usuarioData) =>
  await usuarioQueries.updateUsuario(id, usuarioData);

dao.getContactobyId = async (id) => await contactoQueries.getContactobyId(id);
dao.addContacto = async (contacto) =>
  await contactoQueries.addContacto(contacto);
dao.deleteContacto = async (id) => await contactoQueries.deleteContacto(id);
dao.updateContacto = async (id, contactoData) =>
  await contactoQueries.updateContacto(id, contactoData);
dao.getContacto = async () => await contactoQueries.getContacto();
dao.getContacto3 = async () => await contactoQueries.getContacto3();

dao.getEventobyId = async (id) => await eventoQueries.getEventobyId(id);
dao.getEvento = async (fecha) => await eventoQueries.getEvento(fecha);
dao.addEvento = async (eventoData) => await eventoQueries.addEvento(eventoData);
dao.deleteEvento = async (id) => await eventoQueries.deleteEvento(id);
dao.updateEvento = async (id, eventoData) =>
  await eventoQueries.updateEvento(id, eventoData);

dao.getMedicina = async () => await medicinaQueries.getMedicina();
dao.getMedicinaByDia = async (dia, turno) =>
  await medicinaQueries.getMedicinaByDia(dia, turno);
dao.addMedicina = async (medicinaData) =>
  await medicinaQueries.addMedicina(medicinaData);
dao.deleteMedicina = async (id) => await medicinaQueries.deleteMedicina(id);
dao.updateMedicina = async (id, medicinaData) =>
  await medicinaQueries.updateMedicina(id, medicinaData);

dao.getimagenAlbum = async () => await imagenesQueries.getimagenAlbum();
dao.addimagen = async (imagenData) =>
  await imagenesQueries.addimagen(imagenData);
dao.deleteimagen = async (id) => await imagenesQueries.deleteimagen(id);
dao.updateimagen = async (id, imagenData) =>
  await imagenesQueries.updateimagen(id, imagenData);

export default dao;

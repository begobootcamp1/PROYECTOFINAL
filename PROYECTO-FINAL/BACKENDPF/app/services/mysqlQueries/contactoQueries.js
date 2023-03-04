import db from "../mysql.js";
import utils from "../../utils/utils.js";

const contactoQueries = {};

contactoQueries.getContactobyId = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "SELECT * FROM contacto WHERE id=?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

contactoQueries.addContacto = async (contactoData) => {
  let conn = null;
  try {
    conn = await db.createConection();
    let contactoObj = {
      nombre: contactoData.nombre,
      telefono: contactoData.telefono,
      parentesco: contactoData.parentesco,
      fechaNacimiento: contactoData.fechaNacimiento,
      fotoContacto: contactoData.fotoContacto,
      comentario: contactoData.contactoComentario,
    };
    return await db.query(
      "INSERT INTO contacto SET?",
      contactoObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

contactoQueries.deleteContacto = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "DELETE FROM contacto WHERE id=?",
      id,
      "delete",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

contactoQueries.updateContacto = async (id, contactoData) => {
  let conn = null;
  try {
    conn = await deb.createConnection();
    let contactoObj = {
      nombre: contactoData.nombre,
      telefono: contactoData.telefono,
      fechaNacimiento: contactoData.fechaNacimiento,
      //fotoContacto: contactoData.fotoContacto,
      rol: contactoData.rol,
    };
    contactoObj = await utils.removeUndefinedKeys(contactoObj);
    return await db.query(
      "UPDATE contacto SET ? WHERE id =?",
      [contactoObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

contactoQueries.getContacto = async () => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query("SELECT * FROM contacto", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

contactoQueries.getContacto3 = async () => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "SELECT * FROM contacto WHERE id=3",
      [],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
export default contactoQueries;

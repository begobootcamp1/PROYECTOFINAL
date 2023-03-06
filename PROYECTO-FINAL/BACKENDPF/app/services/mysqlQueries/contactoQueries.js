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

contactoQueries.addContacto = async (contacto) => {
  let conn = null;
  try {
    conn = await db.createConection();

    return await db.query(
      "INSERT INTO contacto SET ?",
      contacto,
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
  console.log(contactoData);
  try {
    conn = await db.createConection();

    return await db.query(
      "UPDATE contacto SET ? WHERE id =?",
      [contactoData, id],
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

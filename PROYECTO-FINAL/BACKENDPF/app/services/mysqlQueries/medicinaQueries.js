import db from "../mysql.js";
import utils from "../../utils/utils.js";

const medicinaQueries = {};

medicinaQueries.getMedicinabyId = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "SELECT * FROM medicina WHERE id=?",
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

medicinaQueries.addMedicina = async (medicinaData) => {
  let conn = null;
  try {
    conn = await db.createConection();
    let medicinaObj = {
      nombreMedicina: medicinaData.nombreMedicina,
      indicacion: medicinaData.indicacion,
      fotoMedicina: medicinaData.fotoMedicina,
    };
    return await db.query(
      "INSERT INTO medicina SET?",
      medicinaObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

medicinaQueries.deleteMedicina = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "DELETE FROM medicina WHERE id=?",
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

medicinaQueries.updateEvento = async (id, medicinaData) => {
  let conn = null;
  try {
    conn = await deb.createConnection();
    let medicinaObj = {
      nombreMedicina: medicinaData.nombreMedicina,
      indicacion: medicinaData.indicacion,
      fotoMedicina: medicinaData.fotoMedicina,
    };
    medicinaObj = await utils.removeUndefinedKeys(medicinaObj);
    return await db.query(
      "UPDATE medicina SET ? WHERE id =?",
      [medicinaObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

medicinaQueries.getMedicina = async () => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query("SELECT * FROM medicina", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default medicinaQueries;

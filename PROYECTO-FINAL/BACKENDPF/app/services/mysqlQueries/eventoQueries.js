import db from "../mysql.js";
import utils from "../../utils/utils.js";

const eventoQueries = {};

eventoQueries.getEventobyId = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "SELECT * FROM evento WHERE id=?",
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
eventoQueries.getEvento = async (fecha) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "SELECT * FROM evento WHERE fechaEvento =?",
      fecha,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

eventoQueries.addEvento = async (eventoData) => {
  let conn = null;
  try {
    conn = await db.createConection();
    let eventoObj = {
      nombre: eventoData.nombre,
      fecha: eventoData.fecha,
    };
    return await db.query("INSERT INTO evento SET?", eventoObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

eventoQueries.deleteEvento = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query("DELETE FROM evento WHERE id=?", id, "delete", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

eventoQueries.updateEvento = async (id, eventoData) => {
  let conn = null;
  try {
    conn = await deb.createConnection();
    let eventoObj = {
      nombre: eventoData.nombre,
      fecha: eventoData.fecha,
    };
    eventoObj = await utils.removeUndefinedKeys(eventoObj);
    return await db.query(
      "UPDATE evento SET ? WHERE id =?",
      [eventoObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default eventoQueries;

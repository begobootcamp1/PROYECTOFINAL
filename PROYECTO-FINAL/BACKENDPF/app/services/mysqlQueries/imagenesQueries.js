import db from "../mysql.js";
import utils from "../../utils/utils.js";

const imagenesQueries = {};

imagenesQueries.getimagenAlbum = async () => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query("SELECT * FROM imagenalbum ", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

imagenesQueries.addimagen = async (imagenData) => {
  let conn = null;
  try {
    conn = await db.createConection();
    let imagenObj = {
      textoImagen: imagenData.textoImagen,
      path: imagenData.path,
    };
    return await db.query(
      "INSERT INTO imagenalbum SET?",
      imagenObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

imagenesQueries.deleteimagen = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "DELETE FROM imagenalbum WHERE id=?",
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

imagenesQueries.updateEvento = async (id, imagenData) => {
  let conn = null;
  try {
    conn = await deb.createConnection();
    let imagenObj = {
      textoImagen: imagenData.textoImagen,
      path: imagenData.path,
    };
    imagenObj = await utils.removeUndefinedKeys(imagenObj);
    return await db.query(
      "UPDATE imagenalbum SET ? WHERE id =?",
      [imagenObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default imagenesQueries;

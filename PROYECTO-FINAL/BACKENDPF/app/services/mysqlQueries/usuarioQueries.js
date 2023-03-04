import db from "../mysql.js";
import utils from "../../utils/utils.js";

const usuarioQueries = {};

usuarioQueries.getUsuariobyId = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query(
      "SELECT * FROM usuario WHERE id=?",
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

usuarioQueries.addUsuario = async (usuarioData) => {
  let conn = null;
  try {
    conn = await db.createConection();
    let usuarioObj = {
      nombre: usuarioData.nombre,
      telefono: usuarioData.telefono,
      fechaNacimiento: usuarioData.fechaNacimiento,
      fotoUsuario: usuarioData.fotoUsuario,
      rol: usuarioData.rol,
    };
    return await db.query(
      "INSERT INTO usuario SET?",
      usuarioObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

usuarioQueries.deleteUsuario = async (id) => {
  let conn = null;
  try {
    conn = await db.createConection();
    return await db.query("DELETE FROM usuario WHERE id=?", id, "delete", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

usuarioQueries.updateUsuario = async (id, usuarioData) => {
  let conn = null;
  try {
    conn = await deb.createConnection();
    let usuarioObj = {
      nombre: usuarioData.nombre,
      telefono: usuarioData.telefono,
      fechaNacimiento: usuarioData.fechaNacimiento,
      //password: md5(userData.password), //ponemos md5 para codificar
      fotoUsuario: usuarioData.fotoUsuario,
      rol: usuarioData.rol,
    };
    usuarioObj = await utils.removeUndefinedKeys(usuarioObj);
    return await db.query(
      "UPDATE usuario SET ? WHERE id =?",
      [usuarioObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default usuarioQueries;

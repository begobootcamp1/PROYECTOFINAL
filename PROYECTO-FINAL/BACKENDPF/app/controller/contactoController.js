import dao from "../services/dao.js";
import { currentDir } from "../index.js";

const __dirname = currentDir().__dirname;

const contactoController = {};

contactoController.addContacto = async (req, res) => {
  const { nombre, fechaNacimiento, telefono, parentesco, contactoComentario } =
    req.body;

  try {
    // Controlamos cuando el objeto files sea null
    if (req.files === null) return res.status(400).send();
    // Controlamos si nos viene algún tipo de archivo en el objeto files
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send();
    }
    // 1 archivo [{}] , >1 archivo [[{},{},...]]
    // Obtenemos un array de objetos con todas las imagenes
    const images = !req.files.length
      ? [req.files.fotoContacto]
      : req.files.fotoContacto;
    // Recorremos el array para procesar cada imagen
    images.forEach(async (image) => {
      // Ya podemos acceder a las propiedades del objeto image.
      // Obtenemos la ruta de la imagen.
      let uploadPath = __dirname + "/public/images/images/" + image.name;
      let bbddPath = "images/images/" + image.name;
      // Usamos el método mv() para ubicar el archivo en nuestro servidor
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      let contactoObj = {
        nombre: nombre,
        telefono: telefono,
        parentesco: parentesco,
        fechaNacimiento: fechaNacimiento,
        fotoContacto: bbddPath,
        contactoComentario: contactoComentario,
        rol: 0,
      };
      await dao.addContacto(contactoObj);
    });
    const contactos = await dao.getContacto();
    return res.send(contactos);
  } catch (e) {
    console.log(e.message);
  }
};

contactoController.deleteContacto = async (req, res) => {
  const { id } = req.params;
  try {
    const contacto = await dao.getContactobyId(id);
    if (contacto.lenght <= 0)
      return res.status(404).send("el contacto no existe");
    await dao.deleteContacto(id);
    const contactos = await dao.getContacto();
    return res.send(contactos);
  } catch (e) {
    console.log(e.message);
  }
};

contactoController.updateContacto = async (req, res) => {
  const { id } = req.params;
  try {
    // 1 archivo [{}] , >1 archivo [[{},{},...]]
    // Obtenemos un array de objetos con todas las imagenes
    const images = !req.files.length
      ? [req.files.fotoContacto]
      : req.files.fotoContacto;
    // Recorremos el array para procesar cada imagen
    images.forEach(async (image) => {
      // Ya podemos acceder a las propiedades del objeto image.
      // Obtenemos la ruta de la imagen.
      let uploadPath = __dirname + "/public/images/images/" + image.name;
      let bbddPath = "images/images/" + image.name;
      // Usamos el método mv() para ubicar el archivo en nuestro servidor
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      let contactoObj = {
        telefono: req.body.telefono,
        parentesco: req.body.parentesco,
        fotoContacto: bbddPath,
        contactoComentario: req.body.contactoComentario,
      };
      await dao.updateContacto(id, contactoObj);
    });
    const contactos = await dao.getContacto();
    return res.send(contactos);
  } catch (e) {
    console.log(e.message);
  }
};

contactoController.getContacto = async (req, res) => {
  // const { authorization } = req.headers;
  // if (!authorization) return res.senStatus(401);

  try {
    let contacto = await dao.getContacto();
    return res.send(contacto);
  } catch (e) {
    console.log(e.message);
  }
};

contactoController.getContacto3 = async (req, res) => {
  // const { authorization } = req.headers;
  // if (!authorization) return res.senStatus(401);

  try {
    let contacto = await dao.getContacto3();

    return res.send(contacto);
  } catch (e) {
    console.log(e.message);
  }
};

export default contactoController;

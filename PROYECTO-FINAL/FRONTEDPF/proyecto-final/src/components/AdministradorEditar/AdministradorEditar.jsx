export default function AdministradorEditar() {
  const [editarUsuario, setEditarUsuario] = useState([]);
  async function onSubmit() {
    const response = await fetch(
      `http://localhost:3000/user/updateEmpresa/${authorization.id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editarUsuario),
      }
    );
  }
  function handleInput(e) {
    let cambio = { ...editarUsuario, [e.target.name]: e.target.value };
    setEditarUsuario(cambio);
  }
  return (
    <>
      <div>
        <form>
          <label>Parantesco</label>
          <input type="text" name="parentesco" onChange={handleInput} />
          <label>Foto contacto</label>
          <input type="text" name="foto contacto" onChange={handleInput} />
          <label>Telefono</label>
          <input type="text" name="telefono" onChange={handleInput} />
          <label>Contacto comentario</label>
          <input type="text" name="contactoComentario" onChange={handleInput} />
        </form>
      </div>
    </>
  );
}

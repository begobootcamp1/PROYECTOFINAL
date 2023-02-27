import { Link as ReactRouterLink } from "react-router-dom";

//el nombre de la constante va a ser el nombre de nuestro componente
const Link = styled(ReactRouterLink)(() => ({
  //dentro de la función styled le pasamos el componente que queremos estilizar
  textDecoration: "none", //la función recibe un callback que devuelve los estilos directamente, pej este del text decoration
}));

export default function Link({ children, to }) {
  //estamos desestructurando el objeto props
  return <Link to={to}> {children} </Link>; //el to lo recibe de la propiedad to y en el medio los children
}
//el link necesita envolver algo, en este caso la card pero puede ser un  botón o lo que sea

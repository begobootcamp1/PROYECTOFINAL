import {canciones} from "../../../public/canciones";
export default Musica(){
    let cancionesMusica=[];
    return(
<div className="listaReproduccion" autoplay infinitedLoop>
{cancionesMusica.map((cancion)=>(
    <div key={cancion}>
        {/* FORMATO PLAYLIST CANCION */}
    </div>
))}

<div/>
    )
}
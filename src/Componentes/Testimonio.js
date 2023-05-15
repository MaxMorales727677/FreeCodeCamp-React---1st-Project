import React from "react"; //Esto indica que se importen todas las funcionalidades de React 
import '../Stylesheets/Testimonios.css';

export function Testimonio(props) { //"props" sirve para añadir propiedades personalizables a la función (texto, imágenes, formatos, etc...)
  return ( //Toda función regresa un argumento o parámetro 
    <div className="contenedor-testimonio"> 
      <img 
        className='imagen-testimonio'
        src={require(`../Images/${props.imagen}.png`)}
        alt="Foto de Emma"
      />
      
      <div className="contenedor-texto-testimonio"> 
        <p className="nombre-testimonio"><b>{props.nombre}</b> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

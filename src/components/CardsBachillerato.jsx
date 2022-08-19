import React from 'react'
import CardBachillerato from './CardBachillerato';
import "../styles/CardsBachillerato.css";
import estudioVirtual from "../assets/images/estudioVirtual.jpg";
import estudioCorreo from "../assets/images/estudioCorreo.jpg";
import estudioModulos from "../assets/images/estudioModulos.jpg";

const CardsBachillerato = () => {
  return (
    <div className="cards__container">
            <h1 className="cards__title">
              Bachillerato Académico - Metodologías
            </h1>
        <div className="cards">
            <CardBachillerato
              src={estudioCorreo}
              title="Bachillerato por correo"
              state="enabled"
              text="El bachillerato por correo es la forma de estudio
                más sencilla con la cual usted puede realizar su bachillerato,
                Consta de módulos de estudio en PDF y Actividades con sus
                respectivas Evaluaciones en Excel."
            />
            <CardBachillerato
              src={estudioVirtual}
              title="Bachillerato virtual"
              state="disabled"
              text="Estudia mediante nuestra plataforma académica (100% Virtual)
                desde cualquier lugar de Colombia. Solo se necesita acceso a
                internet, disponible para cualquier dispositivo móvil como celular,
                tablet ó computador."
            />
            <CardBachillerato
              src={estudioModulos}
              title="Bachillerato por Módulos"
              state="disabled"
              text="Nuestra nueva modalidad de estudio consta de cartillas de estudio
                las cuales hacemos llegar a su lugar de residencia.
                Buscamos llegar a
                todas las personas que no tienen conocimientos informáticos."
            />
        </div>
    </div>
    
  )
}

export default CardsBachillerato
import React from 'react'
import CardBachillerato from './CardBachillerato';
import "../styles/CardsBachillerato.css"

const CardsBachillerato = () => {
  return (
    <div className="cards__container">
            <h1 className="cards__title">
              Bachillerato Académico - Metodologías
            </h1>
        <div className="cards">
            <CardBachillerato
              src="https://cdn.pixabay.com/photo/2022/05/17/02/54/zoom-7201517_1280.png"
              title="Bachillerato por correo"
              state="enabled"
              text="El bachillerato por correo es la forma de estudio
                más sencilla con la cual usted puede realizar su bachillerato,
                Consta de módulos de estudio en PDF y Actividades con sus
                respectivas Evaluaciones en Excel."
            />
            <CardBachillerato
              src="https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?cs=srgb&dl=pexels-torsten-dettlaff-193003.jpg&fm=jpg"
              title="Bachillerato por correo"
              state="enabled"
              text="El bachillerato por correo es la forma de estudio
                más sencilla con la cual usted puede realizar su bachillerato,
                Consta de módulos de estudio en PDF y Actividades con sus
                respectivas Evaluaciones en Excel."
            />
        </div>
    </div>
    
  )
}

export default CardsBachillerato
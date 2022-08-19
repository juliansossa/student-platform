import React from 'react'
import "../styles/CardBachillerato.css";

const CardBachillerato = ({src, title, state, text}) => {
  let ClassNameBtn = "";
  let ClassNameSpan = "";
  let textSpan = "";
  let textBtn = "";
  if (state === "disabled") {
    ClassNameBtn = "card__button card__button-disabled";
    ClassNameSpan = "card__span card__span-disabled"
    textSpan = "¡Proximamente!";
    textBtn = "Mas información"
  } else {
    ClassNameBtn = "card__button";
    ClassNameSpan = "card__span"
    textSpan = "¡Cupos Disponibles!";
    textBtn = "Inscribirme"
  }

  return (
      <div className="card">
        <div className="card__media">
          <a href="bachillerato-virtual.jsx">
            <img src={src} alt={title} />
          </a>
        </div>
        <div className="card__info">
          <h3>{title}</h3>
          <span className={ClassNameSpan} >{textSpan}</span>
          <div className="card__text">
            <p>{text}</p>
          </div>
          <button className={ClassNameBtn}>
            <div className="card__icon">
              <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="icomoon-ignore"></g>
                <path d="M31.514 11.177l-15.514-7.467-15.514 7.467 2.186 1.318v11.529h1.066v-10.886l3.199 1.929v13.223h18.126v-13.219l6.451-3.894zM16 4.893l13.275 6.39-13.267 8.008-13.282-8.009 13.274-6.39zM23.997 27.224h-15.994v-11.514l8.005 4.827 7.989-4.823v11.51z" fill="#000000" />
              </svg>
            </div>
            <p>{textBtn}</p>
          </button>    
        </div>
      </div>
  )
}

export default CardBachillerato;
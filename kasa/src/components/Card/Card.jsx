import "./card.scss"
import { Link } from "react-router-dom"
import React from "react";


function Card({ id, cover, title }) {
  return (
    <Link to={`/Host/${id}`}>
      <div className="cardContainer__card">
        <img src={cover} alt={title} className="cardContainer__img" />
        <h3 className="cardContainer__title">{title}</h3>
      </div>
    </Link>
  )

}

export default Card
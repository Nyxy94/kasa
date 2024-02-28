import "./card.scss"



function Card({ cover, title }) {
  return (
    <div className="cardContainer__card">
      <img src={cover} alt={title} className="cardContainer__img" />
      <h3 className="cardContainer__title">{title}</h3>
    </div>
  )

}

export default Card
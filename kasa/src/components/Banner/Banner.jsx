import "./banner.scss"


function Banner({ imgSrc, altText, text }) {
    return (
        <div className="home ">
            <img className="home__img" src={imgSrc} alt={altText} />
            {text && <p className="home__text">{text}</p>}
        </div>
    )
}

export default  Banner
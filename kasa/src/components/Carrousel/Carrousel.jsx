import "./carrousel.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

function Carrousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const showNavigation = pictures.length > 1;

    return (
        <div className="carrousel">
            <img className="carrousel__img"
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />

            {showNavigation && (
                <>
                    <FontAwesomeIcon icon={faAngleRight}
                        className="carrousel__previous"
                        onClick={handleNext}
                    />

                    <FontAwesomeIcon icon={faAngleLeft}
                        className="carrousel__next"
                        onClick={handlePrev}
                    />
                    <p className="carrousel__counter">{`${currentIndex + 1}/${pictures.length
                        }`}</p>
                </>
            )}
        </div>
    )
}

export default Carrousel



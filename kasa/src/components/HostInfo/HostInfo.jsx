import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import "./hostinfo.scss"

function HostInfo({ logement }) {
    const { host, rating } = logement
    const { name, picture } = host


    const renderStars = () => {
        const stars = []
        const maxStars = 5

        for (let i = 1; i <= maxStars; i++) {
            // Vérifie si l'indice actuel est inférieur ou égal au rating
            if (i <= rating) {
                stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
            } else {
                stars.push(
                    <FontAwesomeIcon key={i} icon={solidStar} className="colorStar" />
                );
            }
        }

        return stars;

    }

    return (
        <div className="hostInfo">
            <div className="hostInfo__container">
                <div className="hostInfo__details">
                    <h3 className="hostInfo__name">{name}</h3>
                    <img src={picture} alt={name} className="hostInfo__picture" />
                </div>
            </div>
            <div className="hostInfo__rating">{renderStars()}</div>
        </div>
    );
}

export default HostInfo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';


function StarRating({ rating }) {
    const renderStars = () => {
        const stars = [];
        const maxStars = 5;

        for (let i = 1; i <= maxStars; i++) {
            // Vérifie si l'indice actuel est inférieur ou égal au rating
            if (i <= rating) {
                stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
            } else {
                stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="colorStar" />);
            }
        }
        return stars;
    };

    return <div className="hostInfo__rating">{renderStars()}</div>;
}
export default StarRating



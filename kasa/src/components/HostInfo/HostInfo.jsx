import StarRating from "../Rating/Rating";
import "./hostinfo.scss"

function HostInfo({ logement }) {
    const { host, rating } = logement
    const { name, picture } = host

    return (
        <div className="hostInfo">
            <div className="hostInfo__container">
                <div className="hostInfo__details">
                    <h3 className="hostInfo__name">{name}</h3>
                    <img src={picture} alt={name} className="hostInfo__picture" />
                </div>
            </div>
            <StarRating rating={rating} />
        </div>
    );
}

export default HostInfo
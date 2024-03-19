import "./logementsinfo.scss"
import Tags from "../Tags/Tags"

function LogementsInfo({ tags, location, title }) {
    return (
        <div className="logementsInfo">
            <h2 className="logementsInfo__title">{title}</h2>
            <p className="logementsInfo__location">{location}</p>
            <Tags tags={tags}/>
        </div>
    )
}

export default LogementsInfo
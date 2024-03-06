import "./logementsinfo.scss"

function LogementsInfo({ tags, location, title }) {
    return (
        <div className="logementsInfo">
            <h2 className="logementsInfo__title">{title}</h2>
            <p className="logementsInfo__location">{location}</p>
            <div className="logementsInfo__tagsContainer">
                {tags.map((tag, index) => (
                    <div className="logementsInfo__tags" key={index}>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogementsInfo
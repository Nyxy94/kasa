function Tags({tags}) {
    return (
        <div className="logementsInfo__tagsContainer">
            {tags.map((tag, index) => (
                <div className="logementsInfo__tags" key={index}>
                    {tag}
                </div>
            ))}
        </div>
    )
}

export default Tags
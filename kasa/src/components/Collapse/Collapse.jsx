import "./collapse.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import  { useState } from "react";




function Collapse ({title, content}) {
     const [isOpen, setIsOpen] = useState(false);

     const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };
      return (
        <div className={`collapseContainer ${isOpen ?  "open" : ""}`}>
            <div className="collapseContainer__banner" onClick={toggleCollapse}>
                <span>{title}</span>
                <span className={`arrow ${isOpen ?  "open" : ""}`}>
                <FontAwesomeIcon icon={faAngleUp} />
                </span>
            </div> 
            <div className={`collapseContent ${isOpen ? "open" : ""}`}>
        {Array.isArray(content) ? (
          <ul className="collapseContent__list">
            {content.map((equipment, index) => (
              <li className="collapseContent__list--li" key={index}>
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
        </div>
      )
}

export default Collapse
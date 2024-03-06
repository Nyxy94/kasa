import "./about.scss"

import aboutImg from "../../assets/aboutImg.png"
import about from "../../about.json"
import Collapse from "../../components/Collapse/Collapse"
import Banner from "../../components/Banner/Banner"

function About() {
    return (
        <section className="aboutContainer">
            <div className="aboutContainer__img">
                <Banner imgSrc={aboutImg} altText="about banner" text="" />
            </div>

            <div className="aboutContainer__content">
                {about.map((item, index) => (
                    <Collapse
                        key={index}
                        title={item.title}
                        content={item.description}
                    />
                ))}
            </div>
        </section>

    )

}

export default About

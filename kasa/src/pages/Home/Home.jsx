import { useState, useEffect } from "react"
import Card from "../../components/Card/Card"
import Banner from "../../components/Banner/Banner.jsx"
import homeImg from "../../assets/homeImg.png"

import {logementsData} from "../../Services/LocationServices.jsx"

function Home(){
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const logements = async () => {
      try {
        const logements = await logementsData();
        setLogements(logements);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des logements:', error);
      }
    };

    logements();
  }, []);
return(
    <section>
        <Banner
            imgSrc={homeImg}
            altText="home"
            text="Chez vous, partout et ailleurs"
        />
        <div className="cardContainer">
        {logements.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            cover={card.cover}
            title={card.title}
          />
        ))}
      </div>
    </section>
)
}

export default Home


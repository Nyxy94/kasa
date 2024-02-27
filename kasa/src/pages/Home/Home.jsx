import "./home.scss"
import Card from "../../components/Card/Card"
import Banner from "../../components/Banner/Banner.jsx"
import homeImg from "../../assets/homeImg.png"
import logements from "../../logements.json"

function Home(){
    
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


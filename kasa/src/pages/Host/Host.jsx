import "./host.scss"
import Collapse from "../../components/Collapse/Collapse"
import Carrousel from "../../components/Carrousel/Carrousel"
import LogementsInfo from "../../components/LogementsInfo/LogementsInfo"
import HostInfo from "../../components/HostInfo/HostInfo"
import Error from "../Error/Error"
import { getLogementById } from "../../Services/LocationServices"
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"



function Host() {
    const { id } = useParams()
    const [logement, setLogement] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getLogement = async () => {
            try {
                const logementResponse = await getLogementById(id);
                setLogement(logementResponse);
                console.log(logementResponse)
                setLoading(false)
            } catch (error) {
                alert(error)
                console.error('Erreur lors de la récupération des données de logement:', error);
            }
        };

        getLogement();
    }, [id]);

    if (!logement) {
        return <Error />
    }
    if (!loading) {
        return (

            <div>
                <section>
                    <Carrousel pictures={logement.pictures} />
                </section>
                <div className="LogementHostContainer">
                    <section>
                        <LogementsInfo
                            title={logement.title}
                            location={logement.location}
                            tags={logement.tags}
                        />
                    </section>
                    <section>
                        <HostInfo logement={logement} />
                    </section>
                </div>
                <section className="collapse-Container">
                    <div className="collapse-Container__elements">
                        <Collapse title="Description" content={logement.description} />
                    </div>
                    <div className="collapse-Container__elements">
                        <Collapse title="Équipements" content={logement.equipments} />
                    </div>
                </section>
            </div>

        )
    }

}

export default Host
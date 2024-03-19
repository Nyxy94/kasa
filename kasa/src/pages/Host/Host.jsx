import "./host.scss"
import Collapse from "../../components/Collapse/Collapse"
import Carrousel from "../../components/Carrousel/Carrousel"
import LogementsInfo from "../../components/LogementsInfo/LogementsInfo"
import HostInfo from "../../components/HostInfo/HostInfo"
import Error from "../Error/Error"
import logements from "../../logements.json"
import {  useParams } from "react-router-dom"
import React from "react"



function Host() {
    const { id } = useParams()

    const logement = logements.find((element) => element.id === String(id));

    if (!logement) {
        return <Error />
    }

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

export default Host
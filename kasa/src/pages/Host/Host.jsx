import "./host.scss"
import Collapse from "../../components/Collapse/Collapse"
import Carrousel from "../../components/Carrousel/Carrousel"
import logements from "../../logements.json"
import { Navigate, useParams } from "react-router-dom"
import React from "react"



function Host() {
    const { id } = useParams()

    const logement = logements.find((element) => element.id === String(id));


    if (!logement) {

        return <Navigate to="/error" />
    }

    return (
        <div>
            <section>
                <Carrousel pictures={logement.pictures} />
            </section>
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
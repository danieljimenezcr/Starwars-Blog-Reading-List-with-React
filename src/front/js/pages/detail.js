import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PersonDetail from "./personDetail"
import PlanetDetails from "./planetDetails";
import SpeciesDetail from "./speciesDetail";
import StarshipDetail from "./starshipDetail";
import VehicleDetails from "./vehicleDetail";
import FilmsDetail from "./filmsDetail";

const Detail = () => {
    const { element, id } = useParams();
    const { store, actions } = useContext(Context);
    const [elementData, setElementData] = useState(null);
    const imageCard = `https://starwars-visualguide.com/assets/img/${element == "people" ? "characters" : element
        }/${id}.jpg`

    useEffect(() => {
        async function getData() {
            setElementData(await actions.getDetail(element, id));
        }
        getData();
    }, [id]);

    function renderDetail(type) {
        if (elementData == null) return "";
        switch (type) {
            case "people":
                return <PersonDetail element={elementData} />
                break;
             case "species":
                return <SpeciesDetail element={elementData} />
                break;
            case "vehicles":
                return <VehicleDetails element={elementData} />
                break;
            case "films":
                return <FilmsDetail element={elementData} />
                break;
            case "starships":
                return <StarshipDetail element={elementData} />
                break;
            case "planets":
                return <PlanetDetails element={elementData} />
                break;
            default:
                break;
        }
    }

    return elementData == null ? <h2> No se encontro el {element}</h2> :
        <div className="card card-detail">
            <img className="card-img-top" src={imageCard} alt="Star Wars" style={{ width: 300 }} />
            <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <div className="card-text card-info">{renderDetail(element)}</div>
            </div>
        </div >
};

export default Detail;

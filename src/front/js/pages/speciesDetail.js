import React from "react";

const SpeciesDetail = (props) => {

    return <ul className="list-element">
        <li><span>Name: </span>{props.element.properties.name}</li>
        <li><span>Classification: </span>{props.element.properties.classification}</li>
        <li><span>Designation: </span>{props.element.properties.designation}</li>
        <li><span>Average Height: </span>{props.element.properties.average_height}</li>
        <li><span>Hair Colors: </span>{props.element.properties.hair_colors}</li>
        <li><span>Eye Colors: </span>{props.element.properties.eye_colors}</li>
        <li><span>Average Lifespan: </span>{props.element.properties.average_lifespan}</li>
        <li><span>Language: </span>{props.element.properties.language}</li>
    </ul>
};

export default SpeciesDetail

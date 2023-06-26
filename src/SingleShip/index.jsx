import React, { useContext } from "react";
import { PrimaryContext } from "./PrimaryContext";
import { useParams } from "react-router-dom";


const SingleShip = () => {
    const { ships } = useContext(PrimaryContext);
    const { name } = useParams();

    const singleShip = ships.find((ship) => ship.name === name);

    return (
        <div>
            {singleShip && (
                <div>
                    <h1>Single Ship Details</h1>
                    <p>Ship Name: {singleShip.name}</p>
                    <p>Model: {singleShip.model}</p>
                    <p>Class: {singleShip.starship_class}</p>
                </div>
            )}
            {!singleShip && (
                <div>No ships were found with {name} name</div>
            )}
        </div>
    )
}

export default SingleShip;
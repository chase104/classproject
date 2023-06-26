import React, { useContext } from "react";
import { PrimaryContext } from './PrimaryContext'


const singleShip = () => {
    const { singleShip } = useContext(PrimaryContext);

    return(
        <div>
            <h1>Single Ship Details</h1>
            <p>Ship Name: {singleShip.name}</p>
            <p>Model {singleShip.model}</p>
            <p>Class {singleShip.starship_class}</p>

        </div>
    )
}

export default sShip;
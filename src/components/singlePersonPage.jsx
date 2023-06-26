import React, { useContext } from "react";
import { primaryContext } from "../contexts/PrimaryContext";
import { useParams } from "react-router-dom";

const singlePersonPage = () => {
  // Take people state from context
  const { people } = useContext(primaryContext);

  // Take params from url (using useParams hook from react-router-dom)
  const { name } = useParams();

  // Show people's name

  const personToShow = people.filter((person) => person.name === name);

  return (
    <div>
      {personToShow.map((person) => (
        <div>{person.name}</div>
      ))}
    </div>
  );
};

export default singlePersonPage;

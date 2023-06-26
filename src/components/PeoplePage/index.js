import React,{useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {primaryContext} from "../../contexts/primaryContext"

const PeoplePage = () => {
   const {people,setPeople}= useContext(primaryContext);
   const display=people.map((person)=> (
      <li key={person.name}>

<Link to={`/singlePersonPage/${person.name}`}>{person.name}</Link>
    </li>
    ));
  return (
    <ul>
      {display}
    </ul>
  );
};

export default PeoplePage

import React,{useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {primaryContext} from "../../contexts/PrimaryContext.jsx"


const PeoplePage = () => {
   const {people,setPeople}= useContext(primaryContext);
   console.log(people)
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

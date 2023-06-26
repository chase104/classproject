import React, { useContext} from 'react';
import { PrimaryContext } from '../../contexts/PrimaryContext';
import { Link } from 'react-router-dom';




const shipsPage = () => {

    const { ships } = useContext(PrimaryContext)

    let shipsJsxArray = ships.map((object) => {
            
            return <Link to={`/singleShip/${object.id}`}><h4 key={object.id}>{object.name}</h4></Link> 
        }
    )

  return (
    <div>{shipsJsxArray}</div>
  )
}

export default shipsPage
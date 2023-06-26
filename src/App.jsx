import './App.css'
import {useEffect, useContext} from 'react';
import primaryContext from './contexts/PrimaryContext.js';
import axios from 'axios';

function App() {

  const {setShips} = useContext(primaryContext)

  useEffect(() => {
    try {
      const getShips = async () => {
        const response = await axios.get("https://swapi.dev/api/starships")
        const ships = response.data.results
        setShips(ships)
      }
  
      getShips()
    }
    catch (error) {
      console.error(error)
    }    

  }, [])

  return (
    <>
      <h1>Our Class Project</h1>
    </>
  )
}

export default App

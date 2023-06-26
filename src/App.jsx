import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { primaryContext } from "./contexts/PrimaryContext";
import Navbar from './components/Navbar'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SinglePersonPage from './components/PeoplePage/index';
import PeoplePage from './components/PeoplePage/index';
import SinglePersonPage from './components/singlePersonPage.jsx'
import Ships from './components/shipsPage/shipsPage.jsx'
import SingleShips from './SingleShip'

function App() {
  // You can use this state variable to manage network state (for showing loaders / errors etc.)
  const [fetchingPeople, setFetchingPeople] = useState({
    isLoading: false,
    isSuccess: false,
    error: "",
  });
  // Taking callback to setPeople from context
  const { setPeople, setShips } = useContext(primaryContext);

  // Once App component is mounted - this useEffect will be executed
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setFetchingPeople({
          isLoading: true,
          isSuccess: false,
          error: "",
        });

        const response = await axios.get("https://swapi.dev/api/people");

        setFetchingPeople({
          isLoading: false,
          isSuccess: true,
          error: "",
        });

        // People here - is the array of people from API
        const people = response.data.results;

        setPeople(people);
      } catch (e) {
        setFetchingPeople({
          isLoading: false,
          isSuccess: false,
          error: "An error occured while trying to fetch people...",
        });
      }
    };

    fetchPeople();
  }, []);


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
      setShips({error: "something went wrong during the request!"})
    }    

  }, [])

  return (
    <>
    <Navbar />
      <h1>Our Class Project</h1>
     
        <Routes>
          {/* <Route path="/singlePersonPage/:name" element={SinglePersonPage}/> */}
          <Route path="/people" element={<PeoplePage/>}/>
          <Route path="/singlePersonPage/:name" element={<SinglePersonPage/>}/>
          <Route path="/singleShip/:name" element={<SingleShips/>}/>
          <Route path="/ships" element={<Ships/>}/>
          {/* <Route path="/singleShipPage/:id" element={SingleShipPage}/>
          <Route path="/ships" element={ShipsPage}/> */}
        </Routes>
      
    </>
  );
}

export default App;

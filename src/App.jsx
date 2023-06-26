import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // You can use this state variable to manage network state (for showing loaders / errors etc.)
  const [fetchingPeople, setFetchingPeople] = useState({
    isLoading: false,
    isSuccess: false,
    error: "",
  });

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

        // You can put it to context here...
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

  return (
    <>
      <h1>Our Class Project</h1>
    </>
  );
}

export default App;

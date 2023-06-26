
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <h1>Our Class Project</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ships" element={<Ships/>} />
          <Route path="/singleships" element={<Singleships/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/singlePeople" element={<SinglePeople/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

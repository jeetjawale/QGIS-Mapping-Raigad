import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import DataFetcher from './components/DataFetcher'
import Navbar from './components/Navbar';
import Project from './components/Project';
import AboutUs from './components/AboutUs';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DataFetcher />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
      {/* <div>
        <h1 style={{ textAlign: "center", margin: "0.5rem 0" }}>Raigad Map</h1>
        <DataFetcher />
        <h4 style={{ textAlign: "left", margin: "0.5rem 0" }}>Phase 1 Project 2024</h4>
        <ul style={{textAlign: "left", listStyle: "none"}}>
          <li>Swanand Bhuskute - 2130331245033</li>
          <li>Ashish Magar - 2130331245040</li>
          <li>Jeet Jawale - 2130331245046</li>
        </ul>
      </div> */}
    </>
  )
}

export default App;

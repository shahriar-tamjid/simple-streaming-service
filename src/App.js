import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Home from "./pages/Home";
import BreakingBad from "./movies/BreakingBad";
import CallMeByYourName from "./movies/CallMeByYourName";
import PeakyBlinders from "./movies/PeakyBlinders";
import IronMan from "./movies/IronMan";
import TheAdamProject from "./movies/TheAdamProject";
import Loki from "./movies/Loki";
import Luca from "./movies/Luca";
import SpiderManNoWayHome from "./movies/SpiderManNoWayHome";
import Raya from "./movies/Raya";
import Euphoria from "./movies/Euphoria";
import ShangChi from "./movies/ShangChi";
import Moana from "./movies/Moana";
import Uncharted from "./movies/Uncharted";
import DrStrangeMultiverseOfMadness from "./movies/DrStrangeMultiverseOfMadness";
import TheNorthman from "./movies/TheNorthman";
import SquidGame from "./movies/SquidGame";
import OriginalsPage from "./pages/OriginalsPage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/originals" element={<OriginalsPage />} />
          <Route exact path="/movies" element={<MoviesPage />} />
          <Route exact path="/series" element={<SeriesPage />} />
          <Route exact path="/BreakingBad" element={<BreakingBad />} />
          <Route exact path="/CallMeByYourName" element={<CallMeByYourName />} />
          <Route exact path="/PeakyBlinders" element={<PeakyBlinders />} />
          <Route exact path="/IronMan" element={<IronMan />} />
          <Route exact path="/TheAdamProject" element={<TheAdamProject />} />
          <Route exact path="/Loki" element={<Loki />} />
          <Route exact path="/Luca" element={<Luca />} />
          <Route exact path="/SpiderManNoWayHome" element={<SpiderManNoWayHome />} />
          <Route exact path="/Raya" element={<Raya />} />
          <Route exact path="/Euphoria" element={<Euphoria />} />
          <Route exact path="/ShangChi" element={<ShangChi />} />
          <Route exact path="/Moana" element={<Moana />} />
          <Route exact path="/Uncharted" element={<Uncharted />} />
          <Route exact path="/DrStrangeMultiverseOfMadness" element={<DrStrangeMultiverseOfMadness />} />
          <Route exact path="/TheNorthman" element={<TheNorthman />} />
          <Route exact path="/SquidGame" element={<SquidGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

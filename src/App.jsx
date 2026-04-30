
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import "./styles/App.css";


function App() {
  return (
      <Router>
          <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Services /> } />
              </Route> 
          </Routes>
      </Router>
  );
}

export default App;

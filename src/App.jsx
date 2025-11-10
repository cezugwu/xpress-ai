import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login"; 
import Register from "./page/Register";
import Recover from "./page/Recover";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover" element={<Recover />} />
      </Routes>
    </Router>
  );
}

export default App;
import { NavBar } from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import User from "./User/User";
import Admin from "./Contact/Admin";
import Polisi from "./Contact/Polisi";
import Damkar from "./Contact/Damkar";
const Routing = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="admin" element={<Admin />} />
            <Route path="polisi" element={<Polisi />} />
            <Route path="damkar" element={<Damkar />} />
          </Route>
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;

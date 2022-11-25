// import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navigation">
      <Link to="/" className="link">
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link to="/contact" className="link">
        <FontAwesomeIcon icon={faAddressBook} />
        Contact
      </Link>
      <Link to="/user" className="link">
        <FontAwesomeIcon icon={faUser} />
        User
      </Link>
    </div>
  );
};

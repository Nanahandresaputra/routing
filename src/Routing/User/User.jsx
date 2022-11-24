import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./user.css";

const User = () => {
  return (
    <div>
      <h1> Ini Halaman User</h1>
      <div className="user">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <p className="text">USER</p>
    </div>
  );
};

export default User;

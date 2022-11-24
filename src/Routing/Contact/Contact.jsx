import { Link, Outlet } from "react-router-dom";
import style from "./style.module.css";
const Contact = () => {
  return (
    <div>
      <ul className={`${style.listStyle}`}>
        <li>
          <Link to="admin" className={`${style.textStyle}`}>
            Nomor Admin
          </Link>
        </li>
        <li>
          <Link to="polisi" className={`${style.textStyle}`}>
            Nomor Polisi
          </Link>
        </li>
        <li>
          <Link to="damkar" className={`${style.textStyle}`}>
            Nomor Damkar
          </Link>
        </li>
      </ul>

      <hr />
      <Outlet />
    </div>
  );
};
export default Contact;

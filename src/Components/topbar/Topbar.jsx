import { Link } from "react-router-dom";
import {
  useNavigate ,
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const navigate=useNavigate();
  return (
    <div className="top">
      <div className="topLeft">
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/Home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Allblogs">
              ALLBLOGS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Myblogs">
              UPLOADS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Contest">
              CONTEST
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/Contactus">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
      <ul className="topListItem"><Link className="link" to="/">
          LOGOUT
         </Link></ul>
      </div>
    </div>
  );
}

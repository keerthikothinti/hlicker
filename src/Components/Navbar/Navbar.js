import { Link } from "react-router-dom";
import "./navbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Aboutus">
                ABOUT
              </Link></li>
          <li className="topListItem">
          <Link className="link" to="/Contactus">
                CONTACTUS
              </Link>
          </li>
          <li className="topListItem">
              <Link className="link" to="/AdminLogin">
                ADMIN LOGIN
              </Link>
            </li>
        </ul>
      </div>
      <div className="topRight">
      <ul className="topList">
         
         <li className="topListItem">
           <Link className="link" to="/Login">
             LOGIN
           </Link>
         </li>
         <li className="topListItem">
           <Link className="link" to="/Register">
             REGISTER
           </Link>
         </li>
       </ul>
      </div>
    </div>
  );
}
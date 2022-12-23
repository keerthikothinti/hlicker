import React from "react";
import "./contest.css";
import Topbar from "../../Components/topbar/Topbar";
import { useNavigate, Link } from "react-router-dom";


export default function Contest() {
  return (
<div>
<Topbar/>
<div className="contestcard">
        <div className="text">
            <div className="textsm">
            <h1 className="title">PICTURESQUE CONTEST</h1>
            <h3 className="theme">'ALIVE' THEME</h3>
            <p className="description">SHOW YOUR BEST PHOTOWORKS</p>
            <p className="description">REGISTER TO PARTICIPATE</p><br></br>
            <h3 className="prize">TAKE A CHANCE TO WIN A GRAND PRIZE $2500 !!!</h3>
            <h5 className="deadline">Deadline: November 5</h5>
            <Link to="/Contestregistration">
            <button className="participate">PARTICIPATE</button>
            </Link>
            
            </div>
            
            {/* <p>Contact us:<br>Email: pictursque@gmail.com</br><br>Phone no.:9346184951</br></p> */}
        </div>
      <img src="../images/contestpage.jpg" alt="contestbackground" />
      </div>
</div>
  );
}

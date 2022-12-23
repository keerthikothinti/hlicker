import "./landingpage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Landingpage() {
  return (
    <div className="landingpage">
      <Navbar />
      <div className="div2">
        <div className="left">
          <img className="leftimg" src="../images/a-1.jpg" alt="home" />
        </div>
        <div className="center">
          <div className="centerup">
            <h1 className="title">PICTURESQUE</h1>
            <p className="tag">
              "We take photos as a return ticket to a moment,<br></br>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;otherwise
              gone"
            </p>
          </div>
          <div className="centerright1">
            <img className="img" src="../images/img-3.jpg" alt="home" />
          </div>
          <div className="centerright2">
            <img className="img" src="../images/img-5.jpg" alt="home" />
          </div>
        </div>
        <div className="right">
          <div className="centerdown">
            <img
              className="centerimg img3"
              src="../images/img-8.jpg"
              alt="home"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

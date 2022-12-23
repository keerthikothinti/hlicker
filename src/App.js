import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/homepage/home"
import Aboutus from "./Pages/about/Aboutus"
import Contactus from "./Pages/contact/ContactUs"
import Post from "./Components/post/Post";
import Contest from "./Pages/Contest/Contest";
import AdminLogin from "./Pages/adminlogin/AdminLogin"
import Contestregistration from "./Pages/Contest/Contestregistration";
import Admin from "./Pages/adminlogin/Admin"
import Writeblog from "./Pages/Writeblog/Writeblog";
import Myblogs from "./Components/Myblogs/Myblogs"
import Blogcards from "./Components/Blogcards/Blogcards";
import Landingpage from "./Pages/Landingpage/Landingpage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <MainHomepage />
      <Post/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/Myblogs" element={<Myblogs/>} />
          <Route path="/Allblogs" element={<Blogcards/>} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Write" element={<Writeblog />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Myblogs" element={<Myblogs />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/Contest" element={<Contest/>} />
          <Route path="/Contestregistration" element={<Contestregistration/>} />

          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

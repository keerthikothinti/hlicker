import { useLocation } from "react-router";
import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";

import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <div className="home">
      <div className="hometopbar"><Topbar /></div>
      <div className="homeheader"><Header /></div>
      <div className="homediv">
        <div className="homeposts"><Posts /></div>
        <Sidebar />
        {/* <Allblogs/> */}
      </div>
    </div>
   
    </>
  );
}

import "./Blogcard.css";
import React, { Component } from "react";

export default function Blogcard({img,title,desc}) {
    return (
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
          <h2>Title</h2>
          <p>
            {desc}
          </p>
          <h5></h5>
        </div>
      </div>
    );
}

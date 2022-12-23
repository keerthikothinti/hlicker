import React from "react";
import { useState, useEffect, Link } from "react";
import axios from "axios";

export default function Admin() {
  const [qs, setqs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/qs")
      .then((res) => {
        setqs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        Queries:
        {qs.map((q) => {
          return (
            <div>
              <h>
                {q.query} : {q.username}
              </h>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState({
    xovis: {
      fw: "",
      bw: "",
    },
  });

  useEffect(() => {
    async function fetchMyAPI() {
      await axios({
        method: "get",
        url: `http://192.168.150.73:8085/get-data-2`,
      })
        .then(function (response) {
          setdata({
            xovis: {
              fw: response.data["0"]["value"],
              bw: response.data["1"]["value"],
            },
          });
          console.log(data.xovis);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <b>ทดสอบจำนวนครั้ง Sensor กล้อง Xovis การเข้าและออก</b>
        </h1>
        <div>
          <span style={{ color: "green" }}>
            ไปข้างหน้า : {data.xovis.fw} ครั้ง |{" "}
          </span>
          <span style={{ color: "red" }}>
            ย้อนกลับมา : {data.xovis.bw} ครั้ง{" "}
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;

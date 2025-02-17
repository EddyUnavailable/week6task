import React, { useEffect, useState } from "react";
import "./App.css";
import ButtonShop from "../components/ButtonShop";

// import Api_get from "../components/Api_get";
import Shop from "../components/Shop";
// import ClearLS from "../components/ClearLS";

export default function App() {
  const [cookies, setCookies] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("cookie_value");
    if (data) {
      setCookies(JSON.parse(data));
    } else {
      setCookies(100);
    }
  }, []);

  useEffect(() => {
    if (cookies) {
      localStorage.setItem("cookie_value", JSON.stringify(cookies));
    }
  }, [cookies]);

  useEffect(() => {
    const id = setInterval(() => {
      setCookies((prevCookies) => prevCookies + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <section className="mainContainer">
      <div className="firstDiv leftDiv">
        <h1 className="cctitle">Cookie Clicker</h1>
        <p
          width={100}
          height={100}
          className="bounce cookieBox"
          alt="The world"
          onClick={() => setCookies(cookies + 1)}
        >
          I am a Cookie
        </p>

        <p className="card bounce"></p>

        <p className="box">I am not a cookie</p>
        <p>
          {/* <ClearLS /> */}
          <ButtonShop />
          <p className="card"> </p>
        </p>
      </div>
      <div className="firstDiv midDiv">
        <p className="display">{cookies}</p>
        <p className="display">1</p>
      </div>
      <div className="firstDiv rightDiv">
        <Shop />
      </div>
    </section>
  );
}

// "https://cookie-upgrade-api.vercel.app/api/upgrades"

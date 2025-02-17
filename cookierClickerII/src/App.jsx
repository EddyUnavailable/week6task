import React, {useEffect, useState} from "react";
import "./App.css";
import ButtonShop from "../components/ButtonShop";
import "./Animation.css";

// import Api_get from "../components/Api_get";
import Shop from "../components/Shop";

// import ClearLS from "../components/ClearLS";

const defaultState = {
  cookies: 100,
  cps: 1,
  purchasedItems: [],
};

export default function App() {
  const [cookies, setCookies] = useState(() => {
    const savedData = localStorage.getItem("cookies.cookies");
    return savedData != null
      ? JSON.parse(localStorage.getItem("cookies.cookies"))
      : defaultState;
  });

  useEffect(() => {
    if (cookies) {
      localStorage.setItem("cookies.cookies", JSON.stringify(cookies));
    }
  }, [cookies]);

  useEffect(() => {
    const id = setInterval(() => {
      setCookies((currentState) => ({
        ...currentState,
        cookies: currentState.cookies + currentState.cps,
      }));
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
          className="ball_def ball_pink ball_large bounce_med"
          alt="The world"
          onClick={() =>
            setCookies((currentState) => ({
              ...currentState,
              cookies: currentState.cookies + 1,
            }))
          }
        >
          I am a Cookie
        </p>

        <p className="card bounce"></p>
        <p className="box">I am not a cookie</p>
        <p className="ball_def ball_small ball_red bounce_slow">
          I am not a cookie
        </p>
        <p className="ball_def ball_tiny ball_blue bounce_med">
          I am not a cookie
        </p>
        <p className="bounce_slow ball_def ball_yellow ball_tiny"></p>

        <ButtonShop />
        <p className="card"> </p>
      </div>
      <div className="firstDiv midDiv">
        <p className="display">{cookies.cookies}</p>
        <p className="display">{cookies.cps}</p>
      </div>
      <div className="firstDiv rightDiv">
        <Shop />
      </div>
    </section>
  );
}

// "https://cookie-upgrade-api.vercel.app/api/upgrades"

import React, { useEffect, useState } from "react";
import "./App.css"
// import Api_get from "../components/Api_get";
import Shop from "../components/Shop";

// const cookiesStored = localStorage.getItem(Cookies)

export default function App() {
    const [cookies, setCookies] = useState(100 || cookiesStored)

    useEffect(() => {
      const data = localStorage.getItem("cookie_value");
      if ( data !== null ) setCookies(JSON.parse(data))
      }, [])

    // useEffect(() => {
    //   const data = localStorage.getItem("cookie_value");
    //   if (data) setCookies(JSON.parse(data))
    //   }, []) 

    useEffect(() => {
      localStorage.setItem("cookie_value",JSON.stringify(cookies))
    }, [cookies])
      
    useEffect(() => {
      const id = setInterval(() => {
        setCookies((prevCookies) => prevCookies + 1)
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])


  return (
    <section class = "mainContainer">
      <div class = "firstDiv">
        <p class = "display" >{cookies}</p>
              
      </div>
      <div class = "firstDiv">
        <img src="./src/600.jpg" width={100}   alt="The world" onClick={() => setCookies(cookies + 1)} />
      </div>
      <div class = "firstDiv">
      </div>
        <Shop />
    </section>
  );
}

// "https://cookie-upgrade-api.vercel.app/api/upgrades"
import { useEffect, useState } from "react";
import "../src/App.css";
import Autoclicker from "./Autoclicker";

export default function Shop() {
  console.log("running shop");
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://cookie-upgrade-api.vercel.app/api/upgrades`
      );
      const data = await res.json();
      console.log(upgrades);
      setUpgrades(data);
    }
    fetchData();
  }, []);

  return (
    <section>
      <h1 className="upgrades">Upgrades</h1>
      {upgrades.map((upgrade) => (
        <div key={upgrade.id} className="shopRows border_left">
          <p className="shop_boxes">{upgrade.name}</p>
          <p className="shop_boxes">{upgrade.cost}</p>
          <p className="shop_boxes">{upgrade.increase}</p>
          <button
            className="buyButton"
            onClick={() => {
              handleBuyUpgrade(upgrade);
            }}
          >
            buy
          </button>
        </div>
      ))}
    </section>
  );
}

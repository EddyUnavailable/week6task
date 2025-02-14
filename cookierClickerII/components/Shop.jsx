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
      setUpgrades(data);
    }
    fetchData();
  }, []);

  return (
    <section>
      {upgrades.map((upgrade) => (
        <div key={upgrade.id} class="shopRows">
          <p class="shop_boxes">{upgrade.name}</p>
          <p class="shop_boxes">{upgrade.cost}</p>
          <p class="shop_boxes">{upgrade.increase}</p>
          <button>Buy</button>
        </div>
      ))}
    </section>
  );
}

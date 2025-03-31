import {useEffect, useState} from "react";

export default function Shop({cookies, setCookies}) {
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

  // figure out if the user can buy something
  function handlePurchase(upgrades) {
    // the user has enough cookies to buy the upgrades
    if (cookies.cookies >= upgrades.cost) {
      setCookies((currentState) => ({
        
        ...currentState,
        cookies: currentState.cookies - upgrades.cost,
        cps: currentState.cps + upgrades.increase,
        purchasedItems: [...currentState.purchasedItems, upgrades],
        
      }));
      console.log(cookies);
    }
    
  }

  // a small function to find out how many of each items I've bought

  return (
    <section>
      <h1 className="upgrades">Upgrades</h1>
      {upgrades.map((item) => (
        <div key={item.id} className="shopRows border_left">
          <p className="shop_boxes">{item.name}</p>
          <p className="shop_boxes">{item.cost}</p>
          <p className="shop_boxes">{item.increase}</p>
          <button
            className="buyButton"
            onClick={() => {
              handlePurchase(item);
            }}
          >
            buy
          </button>
        </div>
      ))}
    </section>
  );
}

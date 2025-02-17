import { useEffect, useState } from "react";

export default function ButtonShop() {
  const [style, setStyle] = useState("light");

  const changeStyle = () => {
    console.log("you just clicked");
    if (style !== "light") setStyle("light");
    else setStyle("card");
  };
  return (
    <div className="App">
      <h3 className={style}>{"I don't do anything"}</h3>
      <button className={style} onClick={changeStyle}>
        Click me!
      </button>
    </div>
  );
}

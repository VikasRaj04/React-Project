import { useState } from "react"
import "./index.css"


function App() {
  const [color, setColor] = useState("olive")
  const [colorName, setColorName] = useState("Olive");

  const btn = document.querySelectorAll("button");
  const heading = document.querySelector(".heading");
  const btnArr = Array.from(btn);
  btnArr.forEach(btn => {
    btn.addEventListener("click", () => {
      const btnColor = btn.textContent;
      setColorName(btnColor);
    })
  });


  return (
    <div className="w-full h-screen duration-2" style={{ backgroundColor: color }} id="body">
      <h1 className="heading">{colorName}</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "orange" }}>Orange</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>Purple</button>

          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>Black</button>

          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "olive" }}>Olive</button>

          <button onClick={() => setColor("silver")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "silver" }}>Silver</button>

        </div>
      </div>
    </div>
  )
}

export default App

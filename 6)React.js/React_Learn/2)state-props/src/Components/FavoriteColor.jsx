import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("blue");
  const [newColor, setNewColor] = useState("");

  let style = { color: color }

  return (
    <div>
      <h2>My Favorite Color</h2>
      <p>It is <span style={style}>{color}</span></p>

      <input
        type="text"
        placeholder="Enter a color"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />

      {/* Button to update */}
      <br />
      <button onClick={() => setColor(newColor)} style={style}>Change Color</button>
      <button onClick={() => { setColor("blue"); setNewColor("") }} style={style}>Reset</button>
    </div>
  );
}

export default FavoriteColor;
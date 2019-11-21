import React from "react";
import Card from "../components/card";
import items from "./items";

function App() {
  return items.length ? (
    <Card items={items} />
  ) : (
    <p className="text-center">Tidak ada data</p>
  );
}

export default App;

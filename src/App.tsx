import React from "react";

import { Route, Routes } from "react-router-dom";
import FavoritePage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;

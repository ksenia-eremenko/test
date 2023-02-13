import React, { useState } from "react";
import "./App.scss";
import "./styles/main.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import BgOverlay from "./components/Common/BgOverlay/BgOverlay";
import NotFound from "./components/NotFound/NotFound";
import Customers from "./components/Customers/Customers";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <BgOverlay setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Sidebar setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/home/" element={<Customers />} />
          <Route path="/home2/" element={<Customers />} />
          <Route path="/home3/" element={<Customers />} />
          <Route path="/home4/" element={<Customers />} />
          <Route path="/home5/" element={<Customers />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

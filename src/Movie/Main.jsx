import React, { useState } from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Footer from "./Footer";

const Main = () => {
  const [search, SetSearch] = useState("");
  return (
    <div>
      <Navbar setSearch={SetSearch} search={search} />
      <Herosection search={search} />

      <Footer />
    </div>
  );
};

export default Main;

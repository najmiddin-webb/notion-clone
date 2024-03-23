import React from "react";
import Heroes from "./components/heroes";
import { Clients, Footer, Pricing } from "./components";

export default function page() {
  return (
    <>
      <div>
        <Heroes />
        <Clients />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}

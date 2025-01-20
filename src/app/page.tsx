import Hero from "./components/Hero";
import Peace from "./components/Peace";
import Products from "./components/Products";
import SubSection from "./components/SubSection";

import LastSec from "./components/LastSec";

export default function Home() {

  
  return (
    <div className="w-full h-auto bg-white">
      <Hero />

      <SubSection />

      <Products />

      <Peace />

      <LastSec />
    </div>
  );
}

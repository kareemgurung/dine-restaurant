import Events from "@/sections/Events";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Highlights from "@/sections/Highlights";
import Reservation from "@/sections/Reservation";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Highlights />
      <Events />
      <Reservation />
    </div>
  );
}

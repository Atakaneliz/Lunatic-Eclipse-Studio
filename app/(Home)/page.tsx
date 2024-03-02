import Image from "next/image";
import Dashboard from "./components/items/dashboard";
import About from "./components/items/about";
import Games from "./components/items/games";

export default function Home() {
  return (
    <main>
      <Dashboard />
      <About />
      <div className="w-full h-[200px] relative">
        <Image src="/banner.png" fill alt="banner" />
      </div>
      <Games />
    </main>
  );
}

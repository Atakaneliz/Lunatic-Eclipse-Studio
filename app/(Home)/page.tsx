import Image from "next/image";
import Dashboard from "./components/items/dashboard";
import About from "./components/items/about";
import Games from "./components/items/games";
import ContactUs from "./components/items/contact";

export default function Home() {
  return (
    <main>
      <Dashboard />
      <About />
      <div className="w-full lg:h-[200px] relative">
        <Image src="/banner.png" fill alt="banner" className="object-contain" />
      </div>
      <Games />
      <ContactUs />
    </main>
  );
}

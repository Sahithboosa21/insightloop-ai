import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Timeline from "../components/sections/Timeline";
import LiveDemo from "../components/sections/LiveDemo";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Timeline />
      <LiveDemo />
    </div>
  );
}

export default Home;
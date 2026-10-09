
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Expertise from "./components/sections/Expertise";
import Industries from "./components/sections/Industries";
import Services from "./components/sections/Services";
import ImpactMetrics from "./components/sections/ImpactMetrics";
import Showcase from "./components/sections/Showcase";
import Credentials from "./components/sections/Credentials";
import Reels from "./components/sections/reels";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Reels />
      <Expertise />
      <Industries />
      <Services />
      <ImpactMetrics />
      <Showcase />
      <Credentials />
      <Footer />
    </main>
  );
}

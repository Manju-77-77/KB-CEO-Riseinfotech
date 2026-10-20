import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Showcase from "./components/sections/Showcase";
import Credentials from "./components/sections/Credentials";
import Reels from "./components/sections/reels";
import ConsultationForm from "./components/sections/ConsultationForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Reels />
      <Services />
      <Showcase />
      <Credentials />
      <ConsultationForm />
      <Footer />
    </main>
  );
}
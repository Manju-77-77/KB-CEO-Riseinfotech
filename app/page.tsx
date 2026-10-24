
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Credentials from "./components/sections/Credentials";
import Industries from "./components/sections/Industries";
import Expertise from "./components/sections/Expertise";
import Reels from "./components/sections/reels";
import Services from "./components/sections/Services";
import Showcase from "./components/sections/Showcase";
import ConsultationForm from "./components/sections/ConsultationForm";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* 1. Home */}
      <Hero />

      {/* 2. Executive Profile */}
      <About />

      {/* 3. Professional Journey */}
      <Experience />

      {/* 4. Certifications & Credentials */}
      <Credentials />

      {/* 5. Industries Served */}
      <Industries />

      {/* 6. Core Expertise */}
      <Expertise />

      {/* 7. Instagram Highlights */}
      <Reels />

      {/* 8. SAP Consulting & Professional Development */}
      <Services />

      {/* 9. Rise Infotech */}
      <Showcase />

      {/* 10. Free Consultation */}
      <ConsultationForm />

      <Footer />
    </main>
  );
}

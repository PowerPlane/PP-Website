import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PlaneCanvas from "@/components/PlaneCanvas";

export default function Home() {
  return (
    <>
      <PlaneCanvas />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-14">
          <About />
          <Services />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

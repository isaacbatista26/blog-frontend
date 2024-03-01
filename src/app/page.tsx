import Image from "next/image";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative">
      {<Navbar />}
      <Background />
      <Sobre />
      <Footer />
    </div>
  );
}

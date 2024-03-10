import Background from "@/components/Background";
import Sobre from "@/components/Sobre";
import Apoio from "@/components/Apoio";
import Coleta from "@/components/Inicio/Coleta";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Participantes from "@/components/participantes/participantes";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Background />
      <Sobre />
      <Coleta />
      <Apoio />
      <Participantes />
      <Footer />
    </div>
  );
}

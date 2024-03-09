import Background from "@/components/Background";
import Sobre from "@/components/Sobre";
import Apoio from "@/components/Apoio";
import Navbar from "@/components/Navbar";
import Coleta from "@/components/Inicio/Coleta";
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Background />
      <Sobre />
      <Coleta />
      <Apoio />
    </div>
  );
}

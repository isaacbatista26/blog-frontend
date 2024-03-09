import Background from "@/components/Background";
import Sobre from "@/components/Sobre";
import Apoio from "@/components/Apoio";
import Coleta from "@/components/Inicio/Coleta";
export default function Home() {
  return (
    <div className="relative">
      <Background />
      <Sobre />
      <Coleta />
      <Apoio />
    </div>
  );
}

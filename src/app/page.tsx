import Background from "@/components/Background";
import Sobre from "@/components/Sobre";
import Apoio from "@/components/Apoio";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Background />
      <Sobre />
      <Apoio />
    </div>
  );
}

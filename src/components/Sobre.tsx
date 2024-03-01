import Image from "next/image";
const obj1 = "/background/object-1.svg";
export default function Sobre() {
  return (
    <div className="flex flex-col gap-10 my-[500px] px-10">
      <h1 className="text-5xl text-center font-black text-zinc-800">
        VECTOR TRACKING SYSTEM
      </h1>
      <div className="w-fit flex md:flex-row flex-col mx-auto items-center gap-10">
        <p className="md:w-[560px] w-full md:text-left text-center md:text-[26px] text-[20px] font-light text-zinc-800">
          <span className="font-normal">
            Nosso inovador módulo de captura, equipado com câmera e inteligência
            artificial, diferencia mosquitos Aedes de outras espécies.
          </span>
          Os insetos capturados são segregados em duas camadas: uma para
          mosquitos Aedes, permitindo análise detalhada, e outra para outros
          insetos, otimizando a eficiência do mapeamento e estratégias de
          controle.
        </p>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/home/imagem-1.jpg"
            alt="Sobre"
            width={564}
            height={735}
          />
        </div>
      </div>
      <Image
        src={obj1}
        alt="Object 1"
        width={1076}
        height={389}
        className="absolute top-[1200px] left-[-250px] blur-xl"
      />
    </div>
  );
}

import Image from "next/image";
const obj1 = "/background/object-1.svg";

export default function Coleta() {
  return (
    <div className=" my-[500px] px-10">
      <div className="flex flex-row -space-x-20 w-fit mx-auto ">
        <div className="w-fit h-[761px]">
          <Image
            src="/home/imagem-4.png"
            alt="Sobre"
            width={612}
            height={767}
            style={{
              borderRadius: "35px",
              zIndex: 1,
              position: "relative",
              top: "0px",
              left: "0px",
            }}
          />
        </div>
        <div className=" flex flex-col gap-10 justify-center items-end">
          <h1 className="text-3xl text-right font-black text-zinc-800">
            COLETA, MAPEAMENTO E TRATAMENTO
            <br /> DE DADOS
          </h1>
          <p className=" md:w-[560px] w-full md:text-right text-center md:text-[26px] text-[20px] font-thin text-zinc-800">
            O mapa de calor integrado ao
            <span className="font-semibold"> Vector Tracking </span>
            System oferece uma visualização abrangente dos focos do Aedes
            aegypti em Brasília. Combinando dados de localização, sexo, data,
            clima e temperatura média, proporcionamos uma ferramenta eficaz para
            identificação de áreas críticas, impulsionando estratégias de
            controle e prevenção direcionadas.
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <Image
          src="/home/imagem-2.png"
          alt="Sobre"
          width={425}
          height={479}
          style={{
            borderRadius: "35px",
            zIndex: 1,
            position: "relative",
            top: "0px",
            left: "0px",
          }}
        />
        <Image
          src="/home/imagem-3.png"
          alt="Sobre"
          width={425}
          height={479}
          style={{
            borderRadius: "35px",
            zIndex: 2,
            position: "relative",
            right: "200px",
            bottom: "-250px",
          }}
        /> */
}

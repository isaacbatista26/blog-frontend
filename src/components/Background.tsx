import Image from "next/image";

export default function Background() {
return (
<section className="relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center">
        <Image 
          priority
          quality={100}
          fill
          className='pointer-events-none rounded-bl-[350px] select-none'
          src="/background.svg"
          style={{objectFit: 'cover', objectPosition: '75%'}}
          alt="Drone"
          />

      </section>   
);
}
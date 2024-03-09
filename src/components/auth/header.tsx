import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <Image
        src="/login/Logo_Variação.png"
        width={344}
        height={174}
        alt="Logo"
      />
      <p className="text-muted-foreground text-sm">{}</p>
    </div>
  );
};

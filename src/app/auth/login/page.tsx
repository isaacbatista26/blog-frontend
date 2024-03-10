import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className=" w-screen h-screen flex flex-row gap-0">
      <div className=" w-1/2 h-screen relative overflow-hidden">
        <Image
          src="/login/code.png"
          layout="fill"
          className="object-cover object-center"
          alt="Code"
        />
      </div>
      <div className=" flex flex-col justify-center items-center h-screen w-1/2">
        <LoginForm />
      </div>
      <div className="w-36 h-screen relative overflow-hidden top-0 right-10">
        <Image
          src="/login/Adornos.png"
          fill
          alt="adornos"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default LoginPage;

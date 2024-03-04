import Image from "next/image"

export default function Login() {
    return(
        <div className=" h-screen">
    <div className="flex">
        <div className="flex-1">
            <Image
                src="/login/code.png"
                width={720}
                height={1080}
                alt="Code"
            />
        </div>
        <div className="flex-1  flex flex-col justify-center items-center">
            <div className="bg-yellow-">
                <Image
                    src="/login/Logo_Variação.png"
                    width={344}
                    height={174}
                    alt="Logo"
                />
            </div>
            <form className="mt-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Login:
                    </label>
                    <input
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Escreva seu endereço de email "
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Senha:
                    </label>
                    <input
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Escreva sua senha"
                    />
                </div>
                <div className="flex flex-col items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-4"
                        type="button"
                    >
                        Entrar
                    </button>
                    <button
                        className="bg-[#F5F5F5] hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Registrar
                    </button>
                </div>
            </form>
        </div>
        <div className="w-1/6 flex justify-center">
            <Image
                src="/login/Adornos.png"
                width={123}
                height={1080}
                alt="adornos"
            />
        </div>
    </div>
</div>
    )
}
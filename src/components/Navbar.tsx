"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import BlueButton from "@/components/BlueButton";
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isClick, setisClick] = useState(false);
  const router = useRouter()

  const toggleNavBar = () => {
    setisClick(!isClick);
  };
  return (
    <div className="max-w-[1800px] mx-auto sm:px-6 lg:px-8 absolute top-0 left-0 right-0 z-10 justify-between px-6 py-4">
      <nav>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8_13)">
                    <path
                      d="M41.7515 17.7661H41.2965C35.0575 17.7661 30.0068 12.7179 30.0068 6.50253V6.47474C30.0068 3.28832 27.7043 0.43537 24.5383 0.0463314C20.741 -0.407547 17.5101 2.53803 17.5101 6.2339V6.79894C17.5101 12.8568 12.5894 17.7661 6.51743 17.7661H6.48958C3.30505 17.7661 0.454765 20.0448 0.0555383 23.1942C-0.417963 26.9734 2.5066 30.2061 6.20177 30.2339H6.25747C12.4687 30.2339 17.5101 35.2544 17.5101 41.4605V41.5253C17.5101 44.7025 19.794 47.5554 22.96 47.9444C26.7573 48.4168 29.9882 45.4898 30.0068 41.7939V41.7383C30.0068 35.384 35.1689 30.2246 41.5472 30.2246C44.5182 30.2246 47.2478 28.2517 47.8606 25.3524C48.7147 21.3138 45.6509 17.7569 41.7608 17.7569L41.7515 17.7661ZM35.5031 24.0371V24C35.4474 30.4006 30.2203 35.5508 23.8049 35.5322H23.7956H23.7863H23.7584C17.5472 35.5322 12.5058 30.5118 12.5058 24.3057V23.7314C12.5058 17.516 17.5565 12.4771 23.7863 12.4771H23.7956H23.8049C30.2203 12.4493 35.4474 17.6087 35.5031 24.0093V23.9722L35.5403 24.0093L35.5031 24.0463V24.0371Z"
                      fill="white"
                    />
                    <path
                      d="M24 22.9533C23.4151 22.9533 22.9509 23.4257 22.9509 24C22.9509 24.5743 23.4151 25.0467 24 25.0467C24.5849 25.0467 25.0492 24.5743 25.0492 24C25.0492 23.4257 24.5757 22.9533 24 22.9533ZM25.5876 14.626C19.0793 13.5793 13.5459 19.1092 14.6043 25.6025C15.2449 29.5392 18.4201 32.7163 22.366 33.374C28.9022 34.4578 34.482 28.8815 33.3865 22.3605C32.7273 18.4238 29.5335 15.2559 25.5876 14.626ZM15.6163 24.0093C15.6163 20.5913 17.6681 17.655 20.602 16.3582C19.1907 18.0903 18.2809 20.8692 18.2809 24.0093C18.2809 27.1494 19.2 29.9282 20.602 31.6511C17.6681 30.3543 15.6163 27.418 15.6163 24.0093ZM24 32.3736C22.9787 32.3736 21.8646 31.6789 20.9362 30.1413C20.0263 28.6314 19.4321 26.4639 19.4321 24.0093C19.4321 21.5546 20.0263 19.3871 20.9362 17.8773C21.8646 16.3397 22.9787 15.6449 24 15.6449C25.0213 15.6449 26.1354 16.3397 27.0546 17.8773C27.9737 19.3871 28.5679 21.5546 28.5679 24.0093C28.5679 26.4639 27.9737 28.6222 27.0546 30.1413C26.1354 31.6789 25.012 32.3736 24 32.3736ZM27.3888 31.6604C28.8 29.9282 29.7099 27.1494 29.7099 24.0185C29.7099 20.8877 28.8 18.0996 27.3888 16.3674C30.3227 17.6642 32.3745 20.6006 32.3745 24.0185C32.3745 27.4365 30.3227 30.3728 27.3888 31.6604ZM24 22.9626C23.4151 22.9626 22.9509 23.435 22.9509 24.0093C22.9509 24.5836 23.4151 25.056 24 25.056C24.5849 25.056 25.0492 24.5836 25.0492 24.0093C25.0492 23.435 24.5757 22.9626 24 22.9626ZM24 22.9626C23.4151 22.9626 22.9509 23.435 22.9509 24.0093C22.9509 24.5836 23.4151 25.056 24 25.056C24.5849 25.056 25.0492 24.5836 25.0492 24.0093C25.0492 23.435 24.5757 22.9626 24 22.9626Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_13">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-white">VECTOR TRACKING SYSTEM</p>
              </div>
            </div>
            <div className="hidden lg:flex gap-11">
              <div className="ml-4 flex items-center gap-11">
                <Link href="#" className="text-white hover:text-stone-600 p-2">
                  <p>Sobre nós</p>
                </Link>
                <Link href="#" className="text-white hover:text-stone-600 p-2">
                  <p>Contato</p>
                </Link>
                <Link href="#" className="text-white hover:text-stone-600 p-2">
                  <p>Publicações</p>
                </Link>
              </div>

              <div className="flex items-center gap-11">
                <BlueButton>Mapa de Calor</BlueButton>
                <button type="button" onClick={() => router.push('/login')}>
                  <Image
                    src="/Botão_login_init.svg"
                    width={30}
                    height={30}
                    alt="Login"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

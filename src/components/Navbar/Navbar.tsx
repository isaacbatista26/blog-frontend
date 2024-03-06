"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BlueButton from "@/components/BlueButton";
import { NavIconDefault, NavIconMain, NavLoginDefault, NavLoginMain } from "./NavIcon";


export default function Navbar() {
  const pathname = usePathname();
  const [isClick, setisClick] = useState(false);

  const toggleNavBar = () => {
    setisClick(!isClick);
  };

  useEffect(() => {
    setisClick(false);

  }, [pathname]);

  return (
    <header className={pathname === '/' ?
      "max-w-[1800px] mx-auto sm:px-6 lg:px-8 absolute top-0 left-0 right-0 z-10 justify-between px-6 py-4 box-border" : 
      "max-w-[1800px] mx-auto sm:px-6 lg:px-8 relative top-0 left-0 right-0 z-10 justify-between px-6 py-4 box-border"
      }>
      <nav className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                {pathname === "/" ? <NavIconMain /> : <NavIconDefault />}
                <p className={pathname === '/' ? "navbar_white" : "navbar_blue"}>
                  VECTOR TRACKING SYSTEM
                </p>
              </div>
            </div>
            <div className="hidden lg:flex gap-11">
              <div className="ml-4 flex items-center gap-11">
                <Link href="#" className={pathname === '/' ? "navbar_white navbar_hover" : "navbar_blue navbar_hover"}>
                  <p>Sobre nós</p>
                </Link>
                <Link href="#" className={pathname === '/' ? "navbar_white navbar_hover" : "navbar_blue navbar_hover"}>
                  <p>Contato</p>
                </Link>
                <Link href="#" className={pathname === '/' ? "navbar_white navbar_hover" : "navbar_blue navbar_hover"}>
                  <p>Publicações</p>
                </Link>
              </div>

              <div className="flex items-center gap-11">
                <BlueButton>Mapa de Calor</BlueButton>
                <button>
                  {pathname === "/" ? <NavLoginMain /> : <NavLoginDefault />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

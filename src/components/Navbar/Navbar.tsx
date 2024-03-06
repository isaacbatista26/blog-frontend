"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BlueButton from "@/components/Navbar/BlueButton";
import { NavIconDefault, NavIconMain, NavLoginDefault, NavLoginMain } from "@/components/Navbar/NavIcon";


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
      "navbar_header absolute" : "navbar_header relative"}>
      <nav className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <Link href="/">
                  {pathname === "/" ? <NavIconMain /> : <NavIconDefault />}
                </Link>
                <Link href="/">
                  <p className={pathname === '/' ? 
                  "navbar_white" : "navbar_blue"}>
                  VECTOR TRACKING SYSTEM
                  </p>
                </Link>
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
                <Link href="/posts" className={pathname === '/' ? "navbar_white navbar_hover" : "navbar_blue navbar_hover"}>
                  <p>Publicações</p>
                </Link>
              </div>

              <div className="flex items-center gap-11">
                <Link href="/mapa">
                  <BlueButton>Mapa de Calor</BlueButton>
                </Link>
                <Link href="/login">
                  <button>
                    {pathname === "/" ? <NavLoginMain /> : <NavLoginDefault />}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

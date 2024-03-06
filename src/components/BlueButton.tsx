import React from "react";
import Link from "next/link";
export default function BlueButton({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <button className="rounded-full py-2 px-6 bg-gradient-to-r from-[#1C2337] to-[#5C86F2]">
      <Link href={link} className="text-white hover:text-stone-300">
        {children}
      </Link>
    </button>
  );
}

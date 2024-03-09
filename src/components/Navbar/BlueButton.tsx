import React from "react";

export default function BlueButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded-full py-2 px-6 bg-gradient-to-r from-[#1C2337] to-[#5C86F2]">
      <span className="text-white hover:text-stone-300">{children}</span>
    </button>
  ); //fixed hydratation code -> button can't be in 'a' tag
}
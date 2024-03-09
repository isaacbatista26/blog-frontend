import React from "react";

export default function BlueButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded-full py-2 px-6 bg-gradient-to-r from-[#1C2337] to-[#5C86F2]">
      <a className="text-white hover:text-stone-300">{children}</a>
    </button>
  );
}

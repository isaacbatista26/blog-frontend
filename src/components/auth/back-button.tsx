"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" className="text-[#0077C2] w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BackButton() {
  return (
    <Button
      variant="link"
      className="text-[#0077C2] w-full justify-end items-start"
      size="sm"
      asChild
    >
      <Link href="/esqueceu-senha">Esqueceu a senha?</Link>
    </Button>
  );
}

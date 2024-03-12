"use client";
import { ShareIcon } from "@/components/ShareIcons/ShareIcons";

export default function CopyToClipboard({ url }: { url: string }) {
  const copy = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <button onClick={copy}>
      <ShareIcon />
    </button>
  );
}

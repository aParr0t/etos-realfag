"use client";

import { Button } from "./ui/button";

export default function CtaButton({ className }: { className?: string }) {
  return (
    <Button
      variant="secondary"
      className={`text-background text-md px-12 py-7 rounded-full mt-6 ${className}`}
      onClick={() => {
        window.location.href = "#kontakt";
      }}
    >
      BLI KUNDE
    </Button>
  );
}

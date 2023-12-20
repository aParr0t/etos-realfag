import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Undervisning i realfag for ungdommer og studenter - Etos Realfag",
  description:
    "Undervisning i matte, koding og andre realfag. Vi hjelper deg over nett, hvor enn du er. Sammen lager vi en plan for hvordan du kan nå dine mål.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}

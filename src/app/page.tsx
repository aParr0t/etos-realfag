import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import TeacherImage from "/public/static/images/teacher drawing.png";
import PortraitImage from "/public/static/images/portrait.jpg";
import { ContactForm } from "@/components/ContactForm";
import Services from "@/components/Services";
import HoverIn from "@/components/HoverIn";
import Classes from "@/components/Classes";
import Reviews from "@/components/Reviews";
import CtaButton from "@/components/CtaButton";

function Divider({
  className,
  side,
  position,
}: {
  className?: string;
  side?: "left" | "right";
  position?: "top" | "bottom";
}) {
  const translate =
    position === "top" ? "translate-y-[-98%]" : "translate-y-[98%]";
  const ellipseY = position === "top" ? "bottom" : "top";
  const absolutePosition = position === "top" ? "top-0" : "bottom-0";

  return (
    <div
      className={`w-full ${translate} absolute h-20 bg-inherit ${absolutePosition} left-0 overflow-visible z-10 ${className}`}
      style={{
        clipPath: `ellipse(110% 40% at ${side} ${ellipseY})`,
      }}
    ></div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-stretch justify-between">
      <nav className="fixed top-0 w-full flex flex-row justify-between p-2 max-sm:pr-4 bg-primary z-50 gap-8 text-white">
        <ul className="flex flex-row w-full gap-6 place-content-end sm:place-content-center text-lg">
          <li>
            <a href="#hero">Hjem</a>
          </li>
          <li>
            <a href="#fag">Fag</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
      <section
        id="hero"
        className="flex flex-col sm:flex-row-reverse items-center sm:flex-1 sm:place-content-center gap-8 py-10 bg-primary p-8 pb-4 relative overflow-visible sm:py-20"
      >
        <Image
          src={TeacherImage}
          alt="Hero-bilde"
          className="w-full aspect-auto max-h-[40vh] sm:max-h-[600px] self-start object-contain sm:w-fit"
          width={200}
          height={200}
          priority
        />
        <div className="sm:place-self-end">
          <HoverIn>
            <h1 className="text-background text-4xl font-sans font-bold sm:text-5xl">
              Vi hjelper
              <br /> med matte
              <br /> og koding
            </h1>
          </HoverIn>
          <HoverIn delay={0.5}>
            <p className="text-background text-xl font-bold mt-2">
              Fra ungdom, til ungdom
            </p>
            <CtaButton />
          </HoverIn>
        </div>
        <Divider side="right" position="bottom" />
      </section>
      <section
        id="fag"
        className="flex flex-col items-center bg-white py-20 sm:py-28 px-4 relative"
      >
        <HoverIn delay={0.5}>
          <h2 className="text-3xl font-bold font-sans">Her er fagene:</h2>
        </HoverIn>
        <HoverIn delay={0.5}>
          <Classes />
        </HoverIn>
      </section>
      <section className="flex flex-col items-center bg-secondary text-background py-12 px-10 relative">
        <Divider position="top" side="left" />
        <HoverIn>
          <h2 className="text-primary text-3xl font-sans font-bold text-center">
            Hva vi tilbyr
          </h2>
        </HoverIn>
        <Services />
        <CtaButton className="bg-primary" />
        <Divider position="bottom" side="left" />
      </section>
      <section className="bg-primary py-14 sm:py-20 sm:pb-14 px-10 relative">
        <HoverIn>
          <h2 className="text-3xl text-secondary font-bold text-center">
            Om læreren
          </h2>
        </HoverIn>
        <HoverIn
          delay={0.5}
          className="flex flex-col items-center gap-2 mt-4 bg-background rounded-3xl p-6 max-w-md mx-auto"
        >
          <Image
            className="rounded-full"
            src={PortraitImage}
            alt="Bilde av læreren"
            width={140}
            height={140}
          />
          <p className="text-secondary text-xl font-bold">Atas Lapenas</p>
          <p className="text-lg text-secondary">
            Hei, jeg er elev ved Lillestrøm Vgs. Jeg synes realfag er veldig gøy
            og jeg presterer veldig godt i det. Uten å skryte for mye, så tar
            jeg universitetsmatte og vil gjerne dele min kunnskap. I fritiden
            min programmerer jeg nettsider og{" "}
            <a href="_blank" className="">
              annet diverse som du kan sjekke ut her.
            </a>{" "}
            Sammen skal vi nå målene dine!
          </p>
        </HoverIn>
        {/* <Divider position="bottom" side="right" /> */}
      </section>
      {/* <section className="flex flex-col items-center px-10 gap-4 bg-white py-24">
        <HoverIn>
          <h2 className="text-3xl text-primary text-center font-bold">
            Hva elevene syns
          </h2>
        </HoverIn>
        <HoverIn delay={0.5}>
          <Reviews />
        </HoverIn>
        <CtaButton />
      </section> */}
      <footer className="bg-black rounded-t-3xl text-white p-6 py-10 sm:px-20 flex flex-col sm:flex-row justify-center gap-8 text-lg">
        <div id="kontakt" className="w-full">
          <h2 className="text-center sm:text-left mb-4 text-3xl font-bold">
            Kontakt oss
          </h2>
          <ContactForm className="bg-secondary rounded-3xl p-4 text-background max-w-md" />
        </div>
        <div className="flex flex-col gap-4 w-full sm:place-self-end">
          <div className="">
            <p className="text-primary font-bold">Epost:</p>
            <p className="">a.lapenas04@gmail.com</p>
          </div>
          <div className="">
            <p className="text-primary font-bold">Følg oss:</p>
            <ul className="flex flex-row gap-4 mt-2">
              <li>
                <a href="https://www.instagram.com/atas_lapenas/">
                  <FaInstagram size={48} color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/atas.lapenas">
                  <FaFacebook size={48} color="white" />
                </a>
              </li>
              <li>
                <a href="www.linkedin.com/in/atas2005">
                  <FaLinkedin size={48} color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import TeacherImage from "/public/static/images/teacher drawing.png";
import PortraitImage from "/public/static/images/portrait.jpg";
import { classes, services, feedback } from "@/home-page-data";

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
      <nav></nav>
      <section className="flex flex-col gap-8 bg-primary p-8 pb-4 relative overflow-visible">
        <Image
          src={TeacherImage}
          alt="Hero-bilde"
          className="w-full aspect-auto max-h-[40vh] object-contain"
          width={200}
          height={200}
        />
        <div className="">
          <h1 className="text-background text-4xl font-sans font-bold">
            Vi hjelper
            <br /> med matte
            <br /> og koding
          </h1>
          <p className="text-background text-xl font-bold mt-2">
            Fra ungdom, til ungdom
          </p>
          <Button
            variant="secondary"
            className="text-background text-md px-12 py-7 rounded-full mt-4"
          >
            BLI KUNDE
          </Button>
        </div>
        <Divider side="right" position="bottom" />
      </section>
      <section className="flex flex-col items-center bg-white py-16 pt-14 px-4 relative">
        <h2 className="text-3xl font-bold font-sans">Her er fagene:</h2>
        {classes.map((cls) => (
          <div key={cls.school} className="mt-6">
            <h3 className="text-center text-2xl">{cls.school}</h3>
            <ul className="flex flex-row justify-center items-center flex-wrap mt-2 gap-3 px-6">
              {cls.subjects.map((s) => (
                <li
                  key={s}
                  className="py-2 px-4 bg-background rounded-xl text-lg"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Button
          variant="secondary"
          className="text-background text-md px-12 py-7 rounded-full mt-6"
        >
          BLI KUNDE
        </Button>
      </section>
      <section className="bg-secondary text-background py-8 px-10 relative">
        <Divider position="top" side="left" />
        <h2 className="text-primary text-3xl font-sans font-bold text-center">
          Hva vi tilbyr
        </h2>
        <div className="flex flex-col gap-8 mt-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-secondary-light rounded-3xl p-6"
            >
              <service.icon
                size={70}
                style={{ color: "hsl(var(--primary))" }}
              />
              <h3 className="text-2xl text-primary font-bold">
                {service.title}
              </h3>
              <p className="text-lg mt-2">{service.text}</p>
            </div>
          ))}
        </div>
        <Divider position="bottom" side="left" />
      </section>
      <section className="bg-primary py-14 px-10 relative">
        <h2 className="text-3xl text-secondary font-bold text-center">
          Om læreren
        </h2>
        <div className="flex flex-col items-center gap-2 mt-4 bg-background rounded-3xl p-6">
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
            og jeg presterer veldig godt i det. Jeg har forsert matte og vil
            gjerne dele min kunnskap. I fritiden min programmerer jeg nettsider
            og{" "}
            <a href="_blank" className="">
              annet diverse som du kan sjekke ut her.
            </a>{" "}
            Sammen skal vi nå målene dine!
          </p>
        </div>
        <Divider position="bottom" side="right" />
      </section>
      <section className="flex flex-col items-center px-10 py-14 bg-white">
        <h2 className="text-3xl text-primary text-center font-bold">
          Hva elevene syns
        </h2>
        <div className="flex flex-col items-center gap-6 mt-6">
          {feedback.map((f) => (
            <div
              key={f.author}
              className="flex flex-col items-center bg-background rounded-3xl p-6 gap-3 text-lg"
            >
              <Image
                className=""
                src={f.avatar}
                alt="Avatar"
                width={76}
                height={76}
              />
              <div className="">{f.text}</div>
              <div className="text-primary font-bold">{f.author}</div>
            </div>
          ))}
        </div>
        <Button
          variant="secondary"
          className="text-background text-md px-12 py-7 rounded-full mt-6"
        >
          BLI KUNDE
        </Button>
      </section>
      <footer className="bg-black rounded-t-3xl text-white p-6 py-10">
        <h2 className="text-center text-3xl font-bold">Kontakt oss</h2>
        <div className="flex flex-col gap-8 text-lg">
          <div className="mt-8">
            <p className="text-primary font-bold">Ring meg:</p>
            <p className="">967 42 298</p>
          </div>
          <div className="">
            <p className="text-primary font-bold">Email:</p>
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

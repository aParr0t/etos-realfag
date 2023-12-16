import { MdChecklist } from "react-icons/md";
import { FaPersonChalkboard } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

export const classes = [
  {
    school: "Ungdomsskole",
    subjects: ["Matematikk", "Naturfag", "Programmering"],
  },
  {
    school: "Videregående skole",
    subjects: [
      "IT-1",
      "IT-2",
      "1T",
      "1P",
      "2P",
      "R1",
      "R2",
      "Naturfag",
      "Fysikk 1",
    ],
  },
];

export const services = [
  {
    title: "Planlegging",
    icon: MdChecklist,
    text: "Vi tar oss tid til å utarbeide en strategi for å tilpasse undervisningen til dine behov på best mulig måte!",
  },
  {
    title: "Undervisning",
    icon: FaPersonChalkboard,
    text: "Sammen går vi gjennom alt det nødvendige for at faget ditt skal gå på skinner. Ingen pugging slår god og reel forståelse. Dette sikrer vi.",
  },
  {
    title: "Resultater",
    icon: GoGraph,
    text: "Sammen med oss går karakterene kun én vei, opp. I tillegg sørger vi for at kunnskapen forblir etter prøver.",
  },
];

export const feedback = [
  {
    avatar: "https://via.placeholder.com/76x76",
    text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    author: "Carly Ferris, Strews Inc",
  },
  {
    avatar: "https://via.placeholder.com/76x76",
    text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    author: "Imani Olowe, Golstra Inc",
  },
];

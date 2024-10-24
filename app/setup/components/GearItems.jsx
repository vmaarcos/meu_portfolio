import { LuLaptop2 } from "react-icons/lu";

import { BsFillMouseFill } from "react-icons/bs";
import { TbDeviceAirpods } from "react-icons/tb";
import { FaKeyboard } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import {
  SiWindows,
  SiNotion,
  SiMiro,
  SiMysql,
  SiOpenai,
  SiFramer,
  SiGooglechrome,
  SiVisualstudiocode,
} from "react-icons/si";

const GearItem = ({ icon, title }) => (
  <li className="flex items-center gap-6">
    {icon}
    <h1>{title}</h1>
  </li>
);

const GearItemsSection = ({ title, items }) => (
  <section className="flex flex-col gap-8 animate-in" style={{ "--index": 3 }}>
    <h2 className="text-secondary">{title}</h2>
    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-4 mb-4 lg:-mb-5   animated-list">
      {items.map((item, index) => (
        <GearItem key={index} {...item} />
      ))}
    </ul>
  </section>
);

const GearItems = () => {
  const Setup = [
    { icon: <LuLaptop2 className="w-7 h-7" />, title: "Dell latitude 3440" },
    {
      icon: <BsFillMouseFill className="w-7 h-7" />,
      title: "Logitech Pebble 2 M350S",
    },
    {
      icon: <FaKeyboard className="w-7 h-7" />,
      title: "machenike k500 b61",
    },
    {
      icon: <TbDeviceAirpods className="w-7 h-7" />,
      title: "tws 12 JBL",
    },
  ];

  const ferramentas = [
    {
      icon: <SiWindows className="w-7 h-7" />,
      title: "Windows 11 Home Edition",
    },
    {
      icon: <SiVisualstudiocode className="w-7 h-7" />,
      title: "Visual Studio Code",
    },
    {
      icon: <SiMysql className="w-7 h-7" />,
      title: "Mysql",
    },
    {
      icon: <SiGooglechrome className="w-7 h-7" />,
      title: "Google Chrome",
    },
    {
      icon: <SiOpenai className="w-7 h-7" />,
      title: "Chat GPT",
    },
  ];

  const designTools = [
    {
      icon: <FaFigma className="w-7 h-7" />,
      title: "Figma",
    },
    { icon: <SiFramer className="w-7 h-7" />, title: "Framer" },
  ];

  const productivityApps = [
    { icon: <SiNotion className="w-7 h-7" />, title: "Notion" },
    { icon: <SiMiro className="w-7 h-7" />, title: "Miro" },
  ];

  return (
    <>
      <GearItemsSection title="Setup" items={Setup} />
      <GearItemsSection title="ferramentas" items={ferramentas} />
      <GearItemsSection title="UI/UX Design" items={designTools} />
      <GearItemsSection title="Apps de Produtividade" items={productivityApps} />
    </>
  );
};

export default GearItems;

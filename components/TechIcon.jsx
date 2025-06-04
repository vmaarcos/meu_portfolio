"use client";
import {
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython, 
  SiMysql
} from "react-icons/si";

import Halo from "@/components/ui/Halo";
import clsx from "clsx";

export default function TechIcon() {
  return (
    <Halo>
      <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-secondaryA p-6 mb-8 lg:mb-0 text-center lg:p-16">
        <h1 className="pb-8 uppercase text-lg text-secondary">
          Técnologias favoritas para trabalhar com expêriencia
        </h1>
        <div className="flex gap-5">
          <SiReact className={clsx("w-[2.4rem] h-[2.4rem] text-react")} />
          <SiJavascript className={clsx("w-[2.4rem] h-[2.4rem] text-javascript")} />
          <SiTailwindcss className={clsx("w-[2.4rem] h-[2.4rem] text-tailwind")} />
          <SiNextdotjs className={clsx("w-[2.4rem] h-[2.4rem] text-next dark:text-white")} />
          <SiPython className={clsx("w-[2.4rem] h-[2.4rem] text-python")} /> 
          <SiMysql className={clsx("w-[2.4rem] h-[2.4rem] text-mysql")} />
        </div>
      </div>
    </Halo>
  );
}

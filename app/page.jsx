import Link from "next/link";
import Image from "next/image";
import TechIcon from "@/components/TechIcon";
import me from "@/public/images/me.jpg";
import { EnvelopeIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Marcos Vinicios
          </h1>
          <p className="animate-in text-secondary" style={{ "--index": 1 }}>
            Eu desenvolvo algumas idéias, Bem vindo ao meu portfolio
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 }}
        >
          <Image
            src={me}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-secondary"
          />
          <QuickLinks />
        </div>
        <p
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 }}
        >
          Olá, sou o Marcos, tenho 18 anos e comecei a estudar programação em junho de 2023. 
          Atualmente, trabalho como analista de rentabilidade, onde utilizo bastante Python e SQL no dia a dia.
           Paralelamente, faço freelancers desenvolvendo aplicações com Next.js e TailwindCSS, 
           e já tive experiências trabalhando com Java e Spring Boot em projetos anteriores.
        </p>
        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 }}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:eumarcosalvess@gmail.com"
              className="flex items-center gap-2 no-underline"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>Meu Email</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="/contato"
              className="flex items-center gap-2 no-underline"
            >
              <UserGroupIcon className="h-5 w-5" />
              <span>Mais formas de contato</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="animate-in" style={{ "--index": 2 }}>
        <TechIcon />
      </div>
    </div>
  );
}

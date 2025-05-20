import Section from "@/components/Section";
import Image from "next/image";
import parttida from "@/public/images/parttida.jpeg";
import ecommerce from "@/public/images/ecommerce.jpeg";
import resumeAI from "@/public/images/resumeAI.jpeg";
import Verbum from "@/public/images/verbum.png";

export const metadata = {
  title: "v.maarcos | Projetos",
  description: "Todos meus projetos",
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Projetos
        </h1>
        <p className="text-secondary animate-in" style={{ "--index": 1 }}>
          Aqui estão alguns dos projetos que eu fiz e alguns ainda estão em
          andamento.
        </p>
      </div>
      <div
        className="flex flex-col gap-6 w-full animate-in"
        style={{ "--index": 3 }}
      >
        <Section heading="Projetos" headingAlignment="right">
  <div className="flex flex-col w-full gap-6">
      {/* Projeto Verbum */}
      <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold text-green-300">Verbum</h2>
      <p className="text-secondary text-center mb-4">
      O Verbum é a plataforma ideal para quem deseja entender e interpretar a Bíblia de forma clara e acessível. Com explicações teológicas, contexto bíblico e recursos para todos, buscamos proporcionar uma experiência de aprendizado profunda e enriquecedora.<a href="https://verbum-tau.vercel.app/" className="text-blue-500 underline">aqui</a>.
      </p>
      <Image
        src={Verbum}
        alt="Imagem do projeto Parttida"
        width={700}
        height={600}
        className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
      />
    </div>

     {/* Projeto Resume-AI */}
     <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold text-blue-600">Resume-AI</h2>
      <p className="text-secondary text-center mb-4">
        Projeto Resumir videos em textos, curtos e objetivos. 
        Acesse o projeto <a href="https://resume-ai-gamma.vercel.app/" className="text-blue-500 underline">aqui</a>.
      </p>
      <Image
        src={resumeAI}
        alt="Imagem do projeto Parttida"
        width={700}
        height={600}
        className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
      />
    </div>
    {/* Projeto Parttida */}
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold text-green-600">Parttida</h2>
      <p className="text-secondary text-center mb-4">
        Um projeto onde criei uma plataforma para facilitar a organização de partidas esportivas. 
        Acesse o projeto <a href="https://parttida.vercel.app/" className="text-blue-500 underline">aqui</a>.
      </p>
      <Image
        src={parttida}
        alt="Imagem do projeto Parttida"
        width={600}
        height={400}
        className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
      />
    </div>

    {/* Projeto E-commerce */}
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold text-blue-600">E-commerce</h2>
      <p className="text-secondary text-center mb-4">
        Um projeto de E-commerce com API. Veja o código no GitHub <a href="https://github.com/vmaarcos/E-commerce" className="text-blue-500 underline">aqui</a>.
      </p>
      <Image
        src={ecommerce}
        alt="Imagem do projeto E-commerce"
        width={600}
        height={400}
        className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
      />
    </div>
  </div>
</Section>

      </div>
    </div>
  );
}

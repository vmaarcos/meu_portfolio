import Section from "@/components/Section";

export const metadata = {
  title: "v.maarcos | About",
  description:
    "Eu sou um desenvolvedor/analista que basicamente gosta de criar algumas coisas.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <div>
        <h1
          className="animate-in text-3xl font-bold tracking-tight"
          style={{ "--index": 1 }}
        >
          Sobre mim
        </h1>
        <p className="text-secondary animate-in" style={{ "--index": 2 }}>
          Um Pouco sobre minha vida
        </p>
      </div>
      <div className="flex flex-col gap-16 animate-in md:gap-24">
        <Section
          heading="Sobre minha vida"
          headingAlignment="right"
          style={{ "--index": 3 }}
        >
          <div
            className="flex flex-col gap-6 animate-in"
            style={{ "--index": 4 }}
          >
            <h1>Hello World, Eu sou Marcos!</h1>
            <p>
           Meu nome é Marcos Vinicios, nasci em 2006 e sempre vivi na periferia no extremo leste de São Paulo.
Aos 17 anos, no meu último ano do ensino médio, descobri na tecnologia uma oportunidade de transformar a minha vida. Sempre fui apaixonado por computadores e passava horas neles, então a programação surgiu como algo que se encaixava perfeitamente comigo.
Além da tecnologia, também sou apaixonado por esportes. Pratico corrida, faço academia e boxe. E, é claro, nunca dispenso uma boa viagem para a praia!
            </p>
          </div>
        </Section>
        <Section
          heading="Software"
          headingAlignment="right"
          style={{ "--index": 5 }}
        >
          <div
            className="flex flex-col gap-6 animate-in"
            style={{ "--index": 6 }}
          >
            <p>
Atualmente, sou analista no Itaú, onde atuo com foco em dados e inteligência de negócio. No dia a dia, trabalho principalmente com Python, SQL Server, visualização de dados e apoio na tomada de decisões estratégicas e analíticas.
Também sou apaixonado por desenvolvimento web e gosto muito de criar projetos usando Next.js e TailwindCSS.
            </p>
            <p>
Quando não estou no quarto ou no escritório estudando ou trabalhando, é bem provável que você me encontre em alguma cafeteria por aí, recarregando as ideias.
            </p>
          </div>
        </Section>

        <Section
          heading="Como iniciei?"
          headingAlignment="right"
          style={{ "--index": 7 }}
        >
          <div
            className="flex flex-col mb-4 lg:-mb-20 gap-6 animate-in"
            style={{ "--index": 8 }}
          >
           Como mencionei, comecei em 2023 com o PROA. Tive a sorte de ter amigos muito experientes, O que me ajudou a me desenvolver mais rápido. Em 6 meses, 
           já estava trabalhando com Next.js, TailwindCSS, Java com Spring Boot, e também explorando React Native e cibersegurança.
          </div>
        </Section>
      </div>
    </div>
  );
}

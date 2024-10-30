import Section from "@/components/Section";

export const metadata = {
  title: "v.aarcos | About",
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
            Meu nome é Marcos Vinicios, tenho 18 anos e nasci em 2006. sempre morei na periferia. 
            Nasci em Taboão da Serra, mas atualmente moro em Ferraz de Vasconcelos, no extremo leste de São Paulo. 
            Aos 17 anos, no meu último ano do ensino médio, vi na tecnologia uma oportunidade de transformar minha vida. 
            Sempre gostei de passar o dia no computador, então foi algo que se encaixou perfeitamente.
            Além da programação, sou apaixonado por esportes — pratico corrida, academia e boxe. E claro, 
            nunca dispenso uma viagem para a praia!
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
            Em geral trabalho com Python, SQL Server, gráficos, e tomadas de decisões estratégicas e analíticas. 
            também adoro projetos em NextJS e TailwindCSS e backend com api. 
            Coisas que embora ainda não esteja no nível que desejo, acho que um dia chegarei ao nível que desejo.
            </p>
            <p>
            Quando não estou no quarto ou no escritorio estudando ou trabalhando, 
            provavelmente estou em alguma cafeteria. 
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
           Como mencionei, comecei em 2023 com o PROA. Tive a sorte de ter amigos muito experientes, no nível pleno
           , o que me ajudou a me desenvolver mais rápido. Em 6 meses, 
           já estava trabalhando com Next.js, JSX, TailwindCSS, Java com Spring Boot, e também explorando React Native e cibersegurança.
          </div>
        </Section>
      </div>
    </div>
  );
}

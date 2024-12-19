import { ComponentCard } from "../ui/card-hover-effect";

export default function CardProjetos() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-5xl ml-2 font-bold text-neutral-950 dark:text-white">Projetos</h1>
            <p className="ml-2 mt-7 text-neutral-950 dark:text-white">Projetos pessoiais desenvolvidos e suas tecnologias</p>
            <ComponentCard items={projetos} />
        </div>
    );
}
export const projetos = [
    {
        title: "WeatherNow",
        description:"Este projeto permite que o usuário pesquise as condições climáticas de qualquer cidade e obtenha informações detalhadas de forma rápida e eficiente. Além de funcional, ele é totalmente responsivo, garantindo uma experiência agradável em qualquer dispositivo.",
        link: "/projetos/weather-now",
        tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "EcoBreathe",
        description: "Este projeto permite o monitoramento ambiental e coleta dados, como, temperatura, umidade e partículas PM10 e PM2.5 em tempo real com um dispositivo IoT.",
        link: "/projetos/ecobreathe",
        tecnologias: ["React", "Tailwind", "C++", "Python", "AWS"],
    },
    {
        title: "Portfolio",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "/projetos/portfolio",
        tecnologias: ["React", "Tailwind", "TypeScript"],
    },
    {
        title: "Organizador de Arquivos",
        description:"Este projeto permite a organização de arquivos em um diretório, movendo-os para pastas específicas de acordo com suas extensões. Além disso, ele também pode mover arquivos de volta para o diretório raiz a partir de pastas organizadas.",
        link: "/projetos/organizador-de-arquivos",
        tecnologias: ["Python"],
    },
    {
        title: "Locadora de Veiculos",
        description:"Este projeto permite que o usuário alugue um veiculo por um determinado periodo de tempo e possa devolve-lo após o prazo de aluguel.",
        link: "/projetos/locadora-de-veiculos",
        tecnologias: ["Python"],
    },
];

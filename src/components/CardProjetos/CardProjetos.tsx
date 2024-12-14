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
        title: "Portfolio",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "/projetos/portfolio",
        tecnologias: ["React", "Tailwind", "TypeScript"],
    },
    {
        title: "EcoBreathe",
        description: "O EcoBreathe é um projeto de monitoramento ambiental que coleta dados de temperatura, umidade e partículas PM10 e PM2.5 em tempo real.",
        link: "/projetos/ecobreathe",
        tecnologias: ["React", "Tailwind", "C++", "Python", "AWS"],
    },
    {
        title: "WeatherNow",
        description:"Esse projeto, WeatherNow, permite que o usuário pesquise as condições climáticas de qualquer cidade e obtenha informações detalhadas de forma rápida e eficiente. Além de funcional, ele é totalmente responsivo, garantindo uma experiência agradável em qualquer dispositivo.",
        link: "/projetos/weather-now",
        tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Organizador de Arquivos",
        description:"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "/projetos/organizador-de-arquivos",
        tecnologias: ["Python"],
    },
    {
        title: "Web App Gestão Financeira",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "/projetos/web-app-gestão-financeira",
        tecnologias: ["Python"],
    },
    {
        title: "Gerenciador de Jogos",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "/projetos/gerenciador-de-jogos",
        tecnologias: ["Python", "Flask", "SQL"],
    },

];

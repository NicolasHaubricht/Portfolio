import { HoverEffect } from "../ui/card-hover-effect";

export default function Teste() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-5xl ml-2 font-bold text-neutral-950 dark:text-white">Projetos</h1>
            <p className="ml-2 mt-7 text-neutral-950 dark:text-white">Projetos pessoiais desenvolvidos e suas tecnologias</p>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "EcoBreathe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "/projetos/ecobreathe",
    },
    {
        title: "Organizador de Arquivos",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "WeatherNow",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Web App Gestão Financeira",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://meta.com",
    },
    {
        title: "Gerenciador de Jogos",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://meta.com",
    },
    {
        title: "Portfolio",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "/projetos/portfolio",
    },
];

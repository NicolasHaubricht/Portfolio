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
        title: "Analise Dados Preço Gasolina no Brasil",
        description:"Este projeto tem como objetivo a análise de dados sobre o preço da gasolina no Brasil. Com base nesses dados, o projeto fornece informações sobre o aumento e diminuição do preço em diferentes estados e regiões do Brasil ao longo dos anos.",
        link: "/projetos/analise-dados-gasolina-brasil",
        tecnologias: ["Python", "Pandas", "Numpy"],
    },
    {
        title: "Analise Dados Obesidade Mundial",
        description:"Este projeto tem como objetivo a análise de dados sobre a obesidade no mundo. Com base nesses dados, o projeto fornece informações sobre o aumento da obesidade em diferentes paíseses e regiões do mundo ao longo dos anos.",
        link: "/projetos/analise-dados-obesidade-mundial",
        tecnologias: ["Python", "Pandas", "Numpy", "Matplotlib"],
    },
    {
        title: "Analise Dados PIB Per Capita",
        description:"Este projeto tem como objetivo a análise de dados sobre as variações do PIB per capita em diversos países ao longo dos anos. Com base nesses dados, o projeto fornece informações sobre as regiões com maiores crescimentos de PIB per capita no século passado entre outros dados.",
        link: "/projetos/analise-dados-pib-per-capita",
        tecnologias: ["Python", "Pandas", "Numpy", "Matplotlib"],
    },
    {
        title: "Analise Dados Mapa Cidades Brasileiras",
        description:"Este projeto visa visualizar dados geográficos das cidades brasileiras. Utilizando a biblioteca Folium, ele apresenta informações como estado, região e código IBGE em um mapa interativo com clusters, facilitando a navegação e a exploração das localizações.",
        link:'/projetos/analise-dados-mapa-cidades-brasileiras',
        tecnologias: ["Python", "Pandas", "Numpy", "Folium"],
    },
];

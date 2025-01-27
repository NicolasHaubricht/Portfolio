import { motion } from "framer-motion";
import { useParams, Link } from 'react-router-dom';
import Github from '@/components/Buttons/Github/Github';
import Deploy from '@/components/Buttons/Deploy/Deploy';
import Error from '../Error/Error';
import ButtonType from "@/components/Buttons/ButtonType/ButtonType"

const projetos = [
    {
        id: 'weather-now',
        titulo: 'WeatherNow',
        sub_titulo: 'Condições Climáticas',
        descricao: 'Este projeto permite que o usuário pesquise as condições climáticas de qualquer cidade e obtenha informações detalhadas de forma rápida e eficiente. Além de funcional, ele é totalmente responsivo, garantindo uma experiência agradável em qualquer dispositivo. Além de funcional, ele é totalmente responsivo, garantindo uma experiência agradável em qualquer dispositivo.',
        imagem: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: 'https://weather-now-drab-eight.vercel.app/',
        repositorio: 'https://github.com/NicolasHaubricht/WeatherNow',
    },
    {
        id: 'ecobreathe',
        titulo: 'EcoBreathe',
        sub_titulo: 'Monitoramento Ambiental',
        descricao: 'Este projeto permite o monitoramento ambiental e coleta dados, como, temperatura, umidade e partículas PM10 e PM2.5 em tempo real com um dispositivo IoT, utilizando um ESP32 integrado a sensores. Os dados são transmitidos via Wi-Fi para uma máquina virtual e processados para análises detalhadas em formato de dashboards. Com foco em grandes centros urbanos, o sistema fornece dados sobre a qualidade do ar, auxiliando na conscientização, no planejamento de ações ambientais e na promoção de saúde pública. Neste projeto foi utilizada uma Máquina Virtual da AWS Linux Ubuntu 22.04.',
        imagem: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: 'https://eco-breathe-web-site.vercel.app/',
        repositorio: 'https://github.com/NicolasHaubricht/EcoBreathe-Web-Site',
    },
    {
        id: 'analise-dados-gasolina-brasil',
        titulo: 'Analise Dados Preço Gasolina no Brasil',
        descricao: 'Este projeto tem como objetivo a análise de dados sobre o preço da gasolina no Brasil. Com base nesses dados, o projeto fornece informações sobre o aumento e diminuição do preço em diferentes estados e regiões do Brasil ao longo dos anos.',
        imagem: 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: '',
        repositorio: 'https://github.com/NicolasHaubricht/Analise-Dados-Gasolina-Brasil',
    },
    {
        id: 'analise-dados-obesidade-mundial',
        titulo: 'Analise Dados Obesidade Mundial',
        descricao: 'Este projeto tem como objetivo a análise de dados sobre a obesidade no mundo. Com base nesses dados, o projeto fornece informações sobre o aumento da obesidade em diferentes paíseses e regiões do mundo ao longo dos anos.',
        imagem: 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: '',
        repositorio: 'https://github.com/NicolasHaubricht/Analise-Dados-Obesidade-Mundial',
    },
    {
        id: 'analise-dados-pib-per-capita',
        titulo: 'Analise Dados PIB Per Capita',
        descricao: 'Este projeto tem como objetivo a análise de dados sobre as variações do PIB per capita em diversos países ao longo dos anos. Com base nesses dados, o projeto fornece informações sobre as regiões com maiores crescimentos de PIB per capita no século passado entre outros dados.',
        imagem: 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: '',
        repositorio: 'https://github.com/NicolasHaubricht/Analise-Dados-PIB-Per-Capita',
    },
    {
        id: 'analise-dados-mapa-cidades-brasileiras',
        titulo: 'Analise Dados Mapa Cidades Brasileiras',
        descricao: 'Este projeto tem como objetivo a visualização de dados geográficos das cidades brasileiras. Com base nesses dados, o projeto fornece informações detalhadas sobre cada cidade, incluindo seu estado, região, e código IBGE. Por meio de um mapa interativo utilizando a biblioteca Folium, é possível explorar e visualizar as localizações das cidades, agrupadas de forma eficiente com a funcionalidade de clusters, permitindo uma navegação mais clara e intuitiva. Este projeto pode ser utilizado para análises geográficas, estudos regionais e como ferramenta de apresentação de dados de maneira interativa e visual.',
        imagem: 'https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: 'https://nicolashaubricht.github.io/Mapa-Cidades-Brasileiras/',
        repositorio: 'https://github.com/NicolasHaubricht/Mapa-Cidades-Brasileiras',
    },
    {
        id: 'sports-car-dashboard',
        titulo: 'Sports Car Dashboard',
        descricao: 'Este projeto é um dashboard interativo desenvolvido com o framework Dash, destinado à análise de dados sobre carros esportivos. Ele permite visualizar informações como potência, preço, aceleração e distribuição de veículos por marca e modelo.',
        imagem: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: '',
        repositorio: 'https://github.com/NicolasHaubricht/Sports-Car-Dashboard',
    },
];

const Projeto = () => {
    const { id } = useParams<{ id: string }>();

    const projeto = projetos.find((p) => p.id === id);

    if (!projeto) {
        return (<Error />)
    }

    if (!projeto?.repositorio && !projeto?.deploy?.trim()) {
        return <Error />;
    }

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <section
            className={`min-h-screen w-full bg-cover bg-center bg-no-repeat filter grayscale `}
            style={{ backgroundImage: `url(${projeto.imagem})` }}
        >
            <div className='flex flex-col items-center justify-center w-full min-h-screen bg-background/75'>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={animationVariants}
                    className="mt-28 lg:mt-20 w-[90%] md:w-[70%] lg:w-[50%]"
                >
                    <div className='flex flex-col items-center'>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black dark:text-white">{projeto.titulo}</h1>
                    </div>
                    <div>
                        <h2 className="text-xl mb-2 font-semibold uppercase mt-5 text-center">{projeto.sub_titulo}</h2>
                        <p className="text-black dark:text-white mb-4 font-normal text-justify">{projeto.descricao}</p>
                    </div>
                    <div className="flex gap-3 mt-8 justify-center flex-wrap">
                            {projeto.deploy?.trim() && (
                                <Link to={projeto.deploy} target="_blank">
                                    <Deploy text="Deploy" />
                                </Link>
                            )}
                            {projeto.repositorio?.trim() && (
                                <Link to={projeto.repositorio} target="_blank">
                                    <Github text="Repositório" />
                                </Link>
                            )}
                    </div>
                    <div>
                        <ButtonType text="Voltar para a página inicial" />
                    </div>
                </motion.section>
            </div>
        </section>
    );
};

export default Projeto;

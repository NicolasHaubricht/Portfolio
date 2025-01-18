import { motion } from "framer-motion";
import { useParams, Link } from 'react-router-dom';
import Github from '@/components/Buttons/Github/Github';
import Deploy from '@/components/Buttons/Deploy/Deploy';
import Error from '../Error/Error';
import ButtonType from "@/components/Buttons/ButtonType/ButtonType"

const projetos = [
    {
        id: 'portfolio',
        titulo: 'Meu Portfólio',
        sub_titulo: 'Portfólio Pessoal',
        descricao: 'Um portfólio pessoal desenvolvido com as tecnologias React, TypeScript e Tailwind CSS. O principal objetivo é exibir para empresas e recrutadores meus projetos e habilidades.',
        imagem: 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: '',
        repositorio: 'https://github.com/NicolasHaubricht/Portfolio',
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
        id: 'ecobreathe',
        titulo: 'EcoBreathe',
        sub_titulo: 'Monitoramento Ambiental',
        descricao: 'Este projeto permite o monitoramento ambiental e coleta dados, como, temperatura, umidade e partículas PM10 e PM2.5 em tempo real com um dispositivo IoT, utilizando um ESP32 integrado a sensores. Os dados são transmitidos via Wi-Fi para uma máquina virtual e processados para análises detalhadas em formato de dashboards. Com foco em grandes centros urbanos, o sistema fornece dados sobre a qualidade do ar, auxiliando na conscientização, no planejamento de ações ambientais e na promoção de saúde pública. Neste projeto foi utilizada uma Máquina Virtual da AWS Linux Ubuntu 22.04.',
        imagem: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: 'https://eco-breathe-web-site.vercel.app/',
        repositorio: 'https://github.com/NicolasHaubricht/EcoBreathe-Web-Site',
    },

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
        id: 'locadora-de-veiculos',
        titulo: 'Locadora de Veiculos',
        descricao: 'Este projeto permite que o usuário alugue um veiculo por um determinado periodo de tempo e possa devolve-lo após o prazo de aluguel. ',
        imagem: 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: '',
        repositorio: 'https://github.com/NicolasHaubricht/Locadora-de-Veiculos',
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

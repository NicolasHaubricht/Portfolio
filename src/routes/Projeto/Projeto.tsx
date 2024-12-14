import { useParams, Link } from 'react-router-dom';
import Github from '@/components/Buttons/Github/Github';
import Deploy from '@/components/Buttons/Deploy/Deploy';
import Error from '../Error/Error';

const projetos = [
    {
        id: 'portfolio',
        titulo: 'Meu Portfólio',
        descricao: 'Um portfólio pessoal criado com React, TypeScript e Tailwind CSS.',
        imagem: 'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: 'https://meu-portfolio.com',
        repositorio: 'https://github.com/seuusuario/meu-portfolio',
    },
    {
        id: 'organizador-de-arquivos',
        titulo: 'Organizador de Arquivos',
        descricao: 'Um organizador de arquivos criado com React, TypeScript e Tailwind CSS.',
        imagem: 'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: 'https://organizador-de-arquivos.com',
        repositorio: 'https://github.com/seuusuario/organizador-de-arquivos',
    },
    {
        id: 'ecobreathe',
        titulo: 'EcoBreathe',
        descricao: 'O EcoBreathe é um projeto de monitoramento ambiental que coleta dados de temperatura, umidade e partículas PM10 e PM2.5 em tempo real, utilizando um ESP32 integrado a sensores. Os dados são transmitidos via Wi-Fi para uma máquina virtual e processados para análises detalhadas em formato de dashboards. Com foco em grandes centros urbanos, o sistema fornece dados sobre a qualidade do ar, auxiliando na conscientização, no planejamento de ações ambientais e na promoção de saúde pública. Neste projeto foi utilizada uma Máquina Virtual da AWS Linux Ubuntu 22.04',
        imagem: 'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        deploy: 'https://ecobreathe.com',
        repositorio: 'https://github.com/NicolasHaubricht/EcoBreathe-Web-Site',
    },
];

const Projeto = () => {
    const { id } = useParams<{ id: string }>();

    const projeto = projetos.find((p) => p.id === id);

    if (!projeto) {
        return (<Error/>)
    }

    return (
        <section className='flex flex-col items-center'>
            <div className="relative w-full h-[400px]">
                <img
                    src={projeto.imagem}
                    alt={`Imagem do projeto ${projeto.titulo}`}
                    className="w-full object-cover h-full absolute filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
            <div className='p-4 w-full md:w-2/3 lg:w-1/2'>
                <h2 className="text-2xl mb-2 uppercase">{projeto.titulo}</h2>
                <p className="text-black dark:text-white mb-4 font-thin text-justify">{projeto.descricao}</p>
                <div className="flex gap-3 justify-between md:justify-center flex-wrap">
                    <Link to={projeto.deploy} target='_blank'>
                        <Deploy text='Deploy'/>
                    </Link>
                    <Link to={projeto.repositorio} target='_blank'>
                        <Github text='Repositório'/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projeto;

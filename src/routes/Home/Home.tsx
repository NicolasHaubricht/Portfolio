import BemVindo from "@/components/BemVindo/BemVindo";
import SobreMim from "@/components/SobreMim/SobreMim";
import Tecnologias from "@/components/Tecnologias/Tecnologias";
import CardProjetos from "../../components/CardProjetos/CardProjetos";
import Curriculo from "@/components/Buttons/Curriculo/Curriculo";

const Home = () => {
    return (
        <main className="flex flex-col gap-20">
            <section className="fixed bottom-0 right-0 p-10 z-50"><Curriculo/></section>
            {/* Bem Vindo */}
            <section><BemVindo/></section>
            {/* Sobre Mim */}
            <section><SobreMim /></section>
            {/* Linguagens de Programação */}
            <section><Tecnologias/></section>
            {/* Projeto Desktop */}
            <section><CardProjetos/></section>
        </main>
    )
}

export default Home

